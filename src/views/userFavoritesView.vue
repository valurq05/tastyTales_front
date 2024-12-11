<template>
    <div class="main-page p-5">
      <h1 class="text-white">Recetas Favoritas</h1>
    </div>
  
    <div v-if="loading" class="text-center mt-5">
      <p>Cargando tus recetas favoritas...</p>
    </div>
  
    <div v-else-if="Userrecipes.length > 0" class="d-flex mt-5">
      <div class="card recipe-card m-3" v-for="(recipe, index) in Userrecipes" :key="index">
        <img
          class="card-img-top"
          src="../assets/arrozpollo.jpg"
          alt="Receta"
        />
        <div class="card-body shadow">
          <h5 class="card-title">{{ recipe.recetaTitulo }}</h5>
          <p class="card-text">{{ recipe.recetaDescripcion }}</p>
          <div class="d-flex justify-content-between align-items-center">
            <div class="rating">
              <i class="bi bi-star-fill"></i>
              <span> 4.5 / 5</span>
            </div>
            <RouterLink
              :to="'recipe/' + recipe.recetaID"
              class="btn btn-ver-receta"
              >Ver receta</RouterLink
            >
          </div>
        </div>
      </div>
    </div>

    <div v-else class="text-center mt-5">
      <p>No tienes recetas favoritas</p>
    </div>
  </template>
  
  <script setup>
  import { useUserStore } from "../stores/userStore";
  import { onMounted, ref } from "vue";
  
  const userStore = useUserStore();
  const Userrecipes = userStore.userFavRecipes;
  let loading = ref(false)
  
  onMounted(async () => {
    loading.value = true
    const use_id = localStorage.getItem("USE_ID");
    if (use_id) {
      await userStore.readFavRecipes(use_id);
    }
    loading.value = false
  });
  </script>
  
  <style scoped>
  .main-page {
    background: linear-gradient(#ac1c24, #4f0f15);
  }
  </style>
  