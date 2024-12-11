<script setup>
import { onMounted, ref } from 'vue';
import { useRecipesStore } from '../stores/recipeStore';
import cryptoJS from 'crypto-js';
import { useAuthStore } from '../stores/authStore';

const authStore = useAuthStore();
const recipesStore = useRecipesStore();
const recipes = ref([]);
let loading = ref(false);
const per_data = ref();
const user_data = ref();
let encr_password = 'clave-secreta';

onMounted(async () => {
    loading.value = true;
    const user_id = JSON.parse(localStorage.getItem("User"))
    user_data.value = user_id;
    recipes.value = await recipesStore.readRecipes();
    console.log(user_data.value);
    per_data.value = user_id.person;
    console.log(per_data.value);
    loading.value = false;
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
</script>

<template>
  <div class="main-page">
    <div class="welcome-section container-fluid p-5">
      <div class="row align-items-center">
        <div class="col-12 col-md-8 d-flex align-items-center">
          <div v-if="loading">
            <p>Cargando tus datos de usuario......</p>
          </div>
          <div v-else-if="!loading && per_data">
            <div class="profile-heading d-flex align-items-center">
              <img class="profile-img me-3" src="../assets/ftuftytyrtf.jpg" alt="Profile Picture">
              <h2 class="m-2 fw-bold text-white">Bienvenidx, {{ per_data.perName }} {{ per_data.perLastName }}</h2>
            </div>
            <p class="font-italic text-white mt-2">Disfruta de recetas nuevas y comparte tus creaciones</p>
            <RouterLink to="register" class="btn btn-custom fw-semibold">Crea una nueva receta</RouterLink>
          </div>
        </div>
      </div>
    </div>
    <div class="popular-recipes-container mt-2">
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

    <div class="explore-flavors-container mt-2 bg-body-secondary p-5">
      <div class="explore-flavors text-end">
        <h2 class="fw-bold mb-3 text-dark">Explora los sabores del mundo</h2>
        <p class="mb-4 text-dark font-italic">Descubre nuevos sabores y técnicas de cocina utilizadas en todo el mundo.</p>
        <div class="row justify-content-center">
          <div class="col-6 col-md-4 col-lg-3 mb-3" v-for="(flavor, index) in flavors" :key="index">
            <div class="flavor-category btn btn-light text-dark fw-semibold w-100">
              {{ flavor }}
            </div>
          </div>
        </div>
      </div>
    </div>


    <div class="culinary-creations-container my-5">
      <div class="text-center">
        <h2 class="fw-bold text-dark">Descubre tus Siguientes Creaciones Culinarias</h2>
        <p class="font-italic text-dark">Seleccionados especialmente para ti</p>
      </div>
      <div class="carousel-wrapper d-flex align-items-center">
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
      </div>
    </div>
  </div>
</template>

<style scoped>
.main-page {
  background: linear-gradient(135deg, #f5f5f5, #ffffff);
  color: white;
}

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


/* Flavor Categories */
.flavor-category {
  padding: 1rem;
  border-radius: 8px;
  font-weight: bold;
  transition: all 0.3s ease;
}
.flavor-category:hover {
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

.welcome-section{
  background: linear-gradient(#ac1c24, #4f0f15);
}

.font-italic{
  font-style: italic;
}
</style>
