<script setup>
import { onMounted, ref } from 'vue';
import { useRecipesStore } from '../stores/recipeStore';
import cryptoJS from 'crypto-js';

const recipesStore = useRecipesStore();
const recipes = ref([]);
let encr_password = 'clave-secreta';

onMounted(async () => {
  recipes.value = await recipesStore.readRecipes();
})

const calif = (cal) =>{
  if(cal == 1){
    return "1";
  }else if(cal == 2){
    return "2";
  }else if(cal == 3){
    return "3";
  }else if(cal == 4){
    return "4";
  }else if(cal == 5){
    return "5";
  }else{
    return "Sin calificaciones";
  }
}

const encrypted = (id) =>{
  return encodeURIComponent(cryptoJS.AES.encrypt(id.toString(), encr_password).toString());
}
const culinaryCreations = ref([
  {
    title: "Papas Asadas con Especias",
    description: "Deliciosas papas asadas con una mezcla de hierbas y especias.",
    image: "src/assets/Ensalada-pollo-vinagreta-limon.webp",
  },
  {
    title: "Desayuno Completo",
    description: "Un desayuno completo con huevos, frijoles y aguacate para comenzar el día con energía.",
    image: "src/assets/Ensalada-pollo-vinagreta-limon.webp",
  },
  {
    title: "Ensalada Fresca",
    description: "Ensalada con pollo, edamame y un toque de aderezo de limón.",
    image: "src/assets/Ensalada-pollo-vinagreta-limon.webp",
  },
  {
    title: "Chili Con Carne",
    description: "Un plato clásico lleno de sabor y especias.",
    image: "src/assets/Ensalada-pollo-vinagreta-limon.webp",
  },
  
]);

const flavors = ref([
  "Cocina Oriental",
  "Cocina del Subcontinente Indio",
  "Cocina del Sudeste Asiático",
  "Cocina del Medio Oriente",
  "Cocina Europea",
  "Cocina Africana",
  "Cocina Latinoamericana",
  "Cocina Norteamericana y Oceánica",
]);

function scrollLeft() {
  const carousel = document.querySelector('.carousel');
  if (carousel) carousel.scrollLeft -= 300;
}

function scrollRight() {
  const carousel = document.querySelector('.carousel');
  if (carousel) carousel.scrollLeft += 300;
}
</script>


<template>
  <div class="main-page container-fluid py-5">
    <!-- Welcome Section -->
    <div class="welcome-section container">
      <div class="row align-items-center">
        <div class="col-12 col-md-8 d-flex align-items-center">
          <div>
            <div class="profile-heading d-flex align-items-center">
              <img class="profile-img me-3" src="../assets/4fd8c349-a322-4baa-bfc1-4e9242bf571f_3.jpeg" alt="Profile Picture">
              <h2 class="m-2 fw-bold text-black">Bienvenidx</h2>
            </div>
            <p class="font-italic text-dark mt-2">Disfruta de recetas nuevas y comparte tus creaciones</p>
            <RouterLink to="register" class="btn btn-custom fw-semibold">Crea una nueva receta</RouterLink>
          </div>
        </div>
      </div>
    </div>

    <!-- Popular Recipes Section -->
    <div class="popular-recipes-container mt-5">
      <div class="popular-recipes">
        <h3 class="mb-4 text-center fw-bold text-dark">Recetas más populares de la semana</h3>
        <div class="row">
          <div class="col-12 col-md-6 col-lg-3 mb-4" v-for="(recipe, index) in recipesStore.recipes" :key="index">
            <div class="card">
              <img :src="`src/assets/recipes/receta-${index}.jpg`" class="card-img-top" :alt="recipe.recetaTitulo">
              <div class="card-body">
                <h5 class="card-title fw-bold">{{ recipe.recetaTitulo }}</h5>
                <p class="card-text">{{ recipe.recetadescripcion }}</p>
                <div class="d-flex justify-content-between align-items-center">
                  <span class="rating">
                    <i class="fas fa-star text-warning"></i> {{ calif(recipe.calificacion) }}
                  </span>
                  <RouterLink :to="`recipe/${encrypted(recipe.recetaID)}`" class="btn btn-custom btn-sm">Ver receta</RouterLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Explore Flavors Section -->
    <div class="explore-flavors-container mt-5">
      <div class="explore-flavors text-center">
        <h2 class="fw-bold mb-3 text-dark">Explora los sabores del mundo</h2>
        <p class="mb-4 text-dark">Descubre nuevos sabores y técnicas de cocina utilizadas en todo el mundo.</p>
        <div class="row justify-content-center">
          <div class="col-6 col-md-4 col-lg-3 mb-3" v-for="(flavor, index) in flavors" :key="index">
            <div class="flavor-category btn btn-light text-dark fw-semibold w-100">
              {{ flavor }}
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Culinary Creations Carousel -->
    <div class="culinary-creations-container my-5">
      <div class="text-center">
        <h2 class="fw-bold text-dark">Descubre tus Siguientes Creaciones Culinarias</h2>
        <p class="font-italic text-dark">Seleccionados especialmente para ti</p>
      </div>
      <div class="carousel-wrapper d-flex align-items-center">
        <button class="carousel-control-prev" @click="scrollLeft">
          <i class=""></i>
        </button>
        <div class="carousel d-flex">
          <div class="card" v-for="(recipe, index) in culinaryCreations" :key="index">
            <img :src="recipe.image" class="card-img-top" :alt="recipe.title">
            <div class="card-body">
              <h5 class="card-title fw-bold">{{ recipe.title }}</h5>
              <p class="card-text">{{ recipe.description }}</p>
              <RouterLink to="#" class="btn btn-custom btn-sm">Ver receta</RouterLink>
            </div>
          </div>
        </div>
        <button class="carousel-control-next" @click="scrollRight">
          <i class="">></i>
        </button>
      </div>
    </div>
  </div>
</template>


<style scoped>
/* General Styling */
.main-page {
  background: linear-gradient(135deg, #f5f5f5, #ffffff);
  color: white;
}

/* Profile Styling */
.profile-heading {
  display: flex;
  align-items: center;
}
.profile-img {
  height: 80px;
  width: 80px;
  border-radius: 50%;
  object-fit: cover;
}

/* Buttons */
.btn-custom {
  color: white;
  background-color: #DD3B3C;
  font-size: 14px;
  padding: 0.5rem 1.5rem;
  border-radius: 20px;
  transition: all 0.3s ease;
}
.btn-custom:hover {
  background-color: #b72d2e;
  transform: scale(1.05);
}

/* Chevron Controls */
.carousel-control-prev,
.carousel-control-next {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: white;
  color: black;
  border: none;
  padding: 0.7rem;
  border-radius: 50%;
  font-size: 1.2rem; /* Reduced size */
  cursor: pointer;
  z-index: 10;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
}
.carousel-control-prev:hover,
.carousel-control-next:hover {
  background-color: #DD3B3C;
  color: white;
}

/* Flavor Categories */
.flavor-category {
  padding: 1rem;
  border-radius: 8px;
  background-color: #f0f0f0; /* Improved contrast */
  color: #333; /* Darker text for better readability */
  font-weight: bold;
  transition: all 0.3s ease;
}
.flavor-category:hover {
  background-color: #DD3B3C;
  color: white;
  transform: translateY(-3px);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

/* Popular Recipes */
.popular-recipes-container {
  background: #f9f9f9;
  padding: 2rem;
}
.popular-recipes .card {
  border: none;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}
.popular-recipes .card-img-top {
  height: 150px;
  object-fit: cover;
}
.popular-recipes .rating {
  font-size: 14px;
  color: #555;
}

/* Culinary Creations */
.carousel-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  overflow: hidden;
}
.carousel {
  display: flex;
  gap: 1rem;
  overflow-x: auto;
  scroll-behavior: smooth;
}
</style>
