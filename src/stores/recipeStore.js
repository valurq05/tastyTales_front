import axios from "axios";
import { defineStore } from "pinia";

export const useRecipesStore = defineStore("recipe", ()=>{
    
  const RECIPES_URL = '/recetas'
  const recipes = []

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
   
  readRecipes()
  return{
    useRecipesStore,
    readRecipes,
    recipes
  }
});