import { defineStore } from "pinia";

export const useAuthStore=defineStore("auth", ()=>{
    function login(data){
        console.log("iniciando sesion", data)
    }
    function singUp(data){
        console.log("registro exitoso", data)
    }
    return{ 
        login, singUp   
}})