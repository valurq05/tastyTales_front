<template>
  <div class="container-fluid text-white py-5">
    <div class="d-flex align-items-center justify-content-center">
      <div class="col-md-6 ps-3">
        <h2 class="display-5 fw-bold">TODO TIPO DE RECETAS</h2>
        <h2 class=" fw-bold">AL ALCANCE DE TUS MANOS</h2>
        <p class="pt-2">
          Publica, edita y califica recetas. Sigue tutoriales paso a paso y comparte tu pasión por la cocina. ¡Inspírate y cocina con confianza!
        </p>
        <button class="btn btn-custom btn-lg fw-semibold">Registrarse</button>
      </div>
      <div class="col-md-6 text-center">
        <img src="../assets/f_bandejitapaisa.png" alt="Comida" class="img-fluid rounded diagonal-image">
      </div>
    </div>
  </div>
</template>

<style scoped>

.container-fluid {
  background: linear-gradient(#ac1c24, #4f0f15);
}

.diagonal-image {
  transform: rotate(-20deg); 
  max-width: 100%; 
}

.col-md-6.text-center {
  position: relative;
  overflow: hidden; 
}

.col-md-6 h1, h2{
  font-family: serif;
}

.btn-custom{
  color: white;
  background-color: #DD3B3C;
  font-size: 15px;
  padding: 1% 10% 1% 10%;
}

</style>
