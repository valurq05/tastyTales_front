<template>
    <div class="main-page p-5">
      <h1 class="text-white">Recetas Favoritas</h1>
    </div>
    <div v-if="Userrecipes" class="d-flex justify-content-center mt-5">
      <div class="card recipe-card" v-for="(recipe, index) in Userrecipes.value" :key="index">
        <img class="card-img-top" src="../assets/arrozpollo.jpg" alt="Receta"/>
        <div class="card-body">
          <h5 class="card-title">{{ recipe.recetaTitulo }}</h5>
          <p class="card-text">{{ recipe.recetaDescripcion }}</p>
          <div class="d-flex justify-content-between align-items-center">
            <div class="rating">
              <i class="bi bi-star-fill"></i>
              <span> 4.5 / 5</span> 
            </div>
            <RouterLink :to="'recipe/' + recipe.recetaID" class="btn btn-ver-receta">Ver receta</RouterLink>
          </div>
        </div>
      </div>
    </div>

    <div v-else-if="!Userrecipes" class="text-center mt-5">
      <p>No tienes recetas favoritas</p>
    </div>
  </template>

<script setup>
import { useUserStore } from '../stores/userStore';
import { onMounted, ref, watchEffect } from 'vue'

const userStore = useUserStore();
const Userrecipes = ref([]);

onMounted(async () => {
    const use_id = localStorage.getItem('USE_ID');
    console.log(use_id)
    Userrecipes.value = await userStore.readFavRecipes(use_id);
    console.log(Userrecipes.value);
})

watchEffect(() => {
    console.log(Userrecipes.length);
})
</script>

<style scoped>
.main-page{
  background: linear-gradient(#ac1c24, #4f0f15);
}
</style>