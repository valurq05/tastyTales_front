<template>
    <div class="container-fluid d-flex justify-content-center align-items-center bg-body-secondary">
      <div class="card w-50 p-4 shadow-sm m-5 p-5">
        <h2 class="text-center mb-4">Registrarse</h2>
        <FormKit 
          type="form" @submit="handleSubmit"
          incomplete-message="Por favor llena todos los campos" 
          :actions="false"
        >
          <div class="mb-3">
            <FormKit 
              type="text" 
              label="Nombre:" 
              name="name" 
              validation="required" 
              :validation-messages="{ required: 'El Nombre es requerido' }"
              input-class="form-control"
              label-class="form-label"
            />
          </div>

          <div class="mb-3">
            <FormKit 
              type="text" 
              label="Apellido:" 
              name="lastName"
              validation="required" 
              :validation-messages="{ required: 'El apellido es requerido' }"
              input-class="form-control"
              label-class="form-label"
            />
          </div>

          <div class="mb-3">
            <FormKit 
              type="text" 
              label="Documento:" 
              name="document" 
              validation="required" 
              :validation-messages="{ required: 'El documento es requerido' }"
              input-class="form-control"
              label-class="form-label"
            />
          </div>
  
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
            <RouterLink :to="{name:'login'}" class="text-decoration-none">¿Ya tiene una cuenta? Inicie sesión aquí</RouterLink>
          </p>
  
          <div class="d-flex justify-content-center mb-3">
            <FormKit 
              type="submit" 
              label="Registrarse" 
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
  
  <script setup>
  import { FormKit } from '@formkit/vue';
  import { useRouter, RouterLink } from 'vue-router';
  import { useAuthStore } from '../stores/authStore.js';
  const authStore = useAuthStore();
  const router = useRouter();

  const handleSubmit = async (formData) =>{
  try {
    const name= formData.name;
    const lastName= formData.lastName;
    const document = formData.document;
    const email = formData.email;
    const password = formData.password;
    await authStore.register(name, lastName, document, email, password);
  } catch (error) {
    console.log(error);
  }
  }   

</script>

  
    
    <style scoped>
    .container-fluid{
    background-color: #e0dcdc;
}
    </style>