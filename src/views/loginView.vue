<template>
    <div class="container-fluid d-flex justify-content-center align-items-center bg-body-secondary">
      <div class="card w-50 p-4 shadow-sm m-5">
        <h2 class="text-center mb-4">Iniciar Sesión</h2>
        <FormKit 
          type="form" @submit="handleSubmit" 
          incomplete-message="Por favor llena los campos" 
          :actions="false"
        >
          <div class="mb-3">
            <FormKit 
              type="email" 
              label="Usuario" 
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
            <RouterLink :to="{name:'register'}" class="text-decoration-none">¿No tiene una cuenta? Regístrese aquí
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
  
  <script setup>
  import { useAuthStore } from '../stores/authStore.js'
  import { useRouter } from 'vue-router'
  
  const authStore = useAuthStore()
  const router = useRouter()
  
  const handleSubmit = async (formData) => {
  try {
    const email = formData.email; 
    const password = formData.password;

    await authStore.access(email, password);

    const token = localStorage.getItem('Token');
    if (token != undefined) {
      router.push('/home');
    } else {
      console.log('Error en el inicio de sesión');
    }
  } catch (error) {
    console.log('Error:', error);
  }
};

</script>

<style scoped>
.container-fluid{
    background-color: #e0dcdc;
}
</style>