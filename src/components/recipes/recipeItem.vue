<script setup >
    const props=defineProps({
        recipe: {
            type:Object,
            required:true
        }
    });
</script>

<template>
    <div class="d-flex justify-content-center mt-5">
    <div class="card recipe-card">
      <img :src=" recipe.image " class="card-img-top" alt="Receta">
      <div class="card-body">
        <h5 class="card-title">{{ recipe.name }}</h5>
        <p class="card-text">{{ recipe.shortDescription }}</p>
        <div class="d-flex justify-content-between align-items-center">
          <div class="rating">
            <i class="bi bi-star-fill"></i>
            <span>{{ recipe.qualification }}</span>
          </div>
          <RouterLink to="recipe/:id" class="btn btn-ver-receta">Ver receta</RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
    .recipe-card {
      width: 18rem;
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }
    .recipe-card img {
      border-bottom: 1px solid #ddd;
    }
    .card-body {
      padding: 16px;
    }
    .btn-ver-receta {
      background-color: #e74c3c;
      color: white;
      border-radius: 20px;
      padding: 0.5rem 1.5rem;
    }
    .btn-ver-receta:hover {
      background-color: #c0392b;
    }
    .rating {
      display: flex;
      align-items: center;
      gap: 5px;
      font-size: 14px;
    }
    .rating i {
      color: #f1c40f;
    }
  </style>