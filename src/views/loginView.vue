<script setup>
    import {FormKit} from '@formkit/vue';
    import { RouterLink } from 'vue-router';
    import { useAuthStore } from '../stores/auth';
    const authStore = useAuthStore()

    const handleSubmit=(data)=>{
        authStore.login(data)
    }
    
</script>

<template>
    <div class="container d-flex justify-content-center align-items-center vh-100">
      <div class="card p-4 shadow-sm" style="max-width: 400px; width: 100%;">
        <h2 class="text-center mb-4">Iniciar Sesión</h2>
        <FormKit 
          type="form" @submit="handleSubmit" 
          incomplete-message="Por favor llena los campos" 
          :actions="false"
        >
          <div class="mb-3">
            <FormKit 
              type="email" 
              label="Correo electrónico:" 
              name="email" 
              validation="required|email" 
              :validation-messages="{
                required: 'El correo electrónico es requerido.', 
                email: 'Por favor ingrese un correo electrónico válido.'
              }"
              input-class="form-control"
              label-class="form-label"
            />
          </div>
  
          <div class="mb-3">
            <FormKit 
              type="password"
              label="Contraseña:"
              name="password"
              validation="required|length:8"
              :validation-messages="{ 
                required: 'La contraseña es requerida.',
                length: 'La contraseña debe tener al menos 8 caracteres.'
              }"
              input-class="form-control"
              label-class="form-label"
            />
          </div>
  
          <p class="text-center mt-2 mb-4">
            <RouterLink to="register" class="text-decoration-none">¿No tiene una cuenta? Regístrese aquí
            </RouterLink>
          </p>
  
          <div class="d-flex justify-content-center mb-3">
            <FormKit 
              type="submit" 
              label="Iniciar Sesión" 
              input-class="btn btn-danger"
            />
          </div>
        </FormKit>
  
          <hr class="my-4" />
  
          <p class="text-center mb-3">O inicie sesión con:</p>
  
          <div class="d-flex justify-content-center gap-3">
            <button class="btn btn-light border rounded-circle p-2">
              <img src="/src/assets/logoGoogle.png" alt="Google" width="24" height="24">
            </button>
            <button class="btn btn-light border rounded-circle p-2">
              <img src="/src/assets/logoFacebook.png" alt="Facebook" width="24" height="24">
            </button>
          </div>
        
      </div>
    </div>
  </template>
  

<style scoped>

</style>