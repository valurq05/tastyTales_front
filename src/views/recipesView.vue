<script setup>

import RecipeItem from '../components/recipes/recipeItem.vue';
import { useRecipesStore } from '../stores/recipeStore';
import { onMounted, ref } from 'vue'

const recipesStore = useRecipesStore();
const recipes = ref([]);

onMounted(async () => {
  recipes.value = await recipesStore.readRecipes();
})

    
</script>
<template>
    <div class="container mt-5">
      <div class="row g-4">
        <!-- <div
          class="containerCardRecipe col-12 col-sm-6 col-md-4 col-lg-3 d-flex align-items-stretch"
          v-for="(recipesItem, index) in recipes.value" :key="index">
           <p>{{  recipesItem.recetaTitulo }}</p>
        </div> -->
        <div
          class="containerCardRecipe col-12 col-sm-6 col-md-4 col-lg-3 d-flex align-items-stretch"
          v-for="recipe in recipesStore.recipes"
        >
          <RecipeItem :recipe="recipe"/>
        </div>
      </div>
    </div>

    <!-- <pre v-for="recipe in recipesStore.recipes"
    >{{recipe.recetaID}}</pre> -->
</template>

<style scoped>
.containerCardRecipe {
  display: flex;
}

.containerCardRecipe > * {
  flex: 1; 
}

.card {
  height: 100%; 
}
.card-img-top {
  height: 200px; 
  object-fit: cover; 
}
</style>