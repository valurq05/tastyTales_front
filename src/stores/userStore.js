import axios from "axios";
import { defineStore } from "pinia";

export const useUserStore = defineStore("usuario", ()=>{
    
  const USERFAVS_URL = '/recetas-favoritas'
  const userRecipes = []

  const readFavRecipes = async(use_id) => {
  try {
    const res = await axios.get(`${USERFAVS_URL}/${use_id}`);
    console.log(res.data);
    userRecipes.value = res.data;
    console.log(res.data);
    return userRecipes;
  } catch (error) {
    console.log(error);
  }
  }

  return{
    useUserStore,
    readFavRecipes,
    userRecipes
  }
});