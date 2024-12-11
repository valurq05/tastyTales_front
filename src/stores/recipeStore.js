import axios from "axios";
import { defineStore } from "pinia";

export const useRecipesStore = defineStore("recipe", ()=>{
    
  const RECIPES_URL = '/recetas'
  const recipes = ref([])
  const recipe = ref({})

  const readRecipes = async() => {
  try {
    const res = await axios.get(RECIPES_URL);
    recipes.value = res.data;
    console.log(res.data);
    return recipes;
  } catch (error) {
    console.log(error);
  }
  }

  const readRecipeById = async(id) => {
    try {
      const res = await axios.get(RECIPES_URL + `/${id}`);
      recipe.value = res.data;
      console.log(res.data);
      return recipe;
    } catch (error) {
      console.log(error);
    }
    }
   
  readRecipes()
  return{
    useRecipesStore,
    readRecipes,
    readRecipeById,
    recipes,
    recipe,
  }
});