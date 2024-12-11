import axios from "axios";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useUserStore = defineStore("usuario", ()=>{
    
  const USERFAVS_URL = '/recetas-favoritas'
  const USERECIPES_URL = '/recetas-usuario'
  const userRecipes = ref([]);
  const userFavRecipes = ref([]);

  const readFavRecipes = async(use_id) => {
  try {
    const res = await axios.get(`${USERFAVS_URL}/${use_id}`);
    console.log(res.data);
    userFavRecipes.value = res.data;
    console.log(res.data);
    return userFavRecipes.value;
  } catch (error) {
    console.log(error);
  }
  }

  const readUserRecipes = async(use_id) => {
    try {
      const res = await axios.get(`${USERECIPES_URL}/${use_id}`);
      console.log(res.data);
      userRecipes.value = res.data;
      console.log(res.data);
      return userRecipes.value;
    } catch (error) {
      console.log(error);
    }
    }

  return{
    useUserStore,
    readFavRecipes,
    readUserRecipes,
    userRecipes,
    userFavRecipes
  }
});