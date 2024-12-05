<script setup>
    import RecipeItem from '../components/recipes/recipeItem.vue';
    import { useRecipesStore } from '../stores/recipeStore';

    const recipesStore= useRecipesStore();
</script>
<template>
    <div class="container mt-5">
      <div class="row g-4">
        <div
          class="containerCardRecipe col-12 col-sm-6 col-md-4 col-lg-3 d-flex align-items-stretch"
          v-for="recipe in recipesStore.recipes"
          :key="recipe.name"
        >
          <RecipeItem :recipe="recipe" />
        </div>
      </div>
    </div>
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