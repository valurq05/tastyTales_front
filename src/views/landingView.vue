<template>
  <div class="main-page container-fluid text-white py-5">
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

  <div class="categories d-flex justify-content-center align-items-center">
    <p>RECETAS</p>
    <p>BEBIDAS</p>
    <p>SALUDABLES</p>
    <p>REPOSTERÍA</p>
    <p>COMUNIDAD</p>
  </div>

  <div class="recipes container-fluid d-flex justify-content-center align-items-center">
    <div class="card" style="width: 18rem;">
      <img src="../assets/arrozpollo.jpg" class="card-img-top" alt="...">
      <div class="card-body">
       <h5 class="card-title fw-bold">Arroz con Pollo</h5>
        <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga necessitatibus nulla sequi! Sint architecto ipsum neque.</p>
        <a href="#" class="btn btn-custom">Ver</a>
      </div>
    </div>

    <div class="card" style="width: 18rem;">
      <img src="../assets/pasta.jpg" class="card-img-top" alt="...">
      <div class="card-body">
       <h5 class="card-title fw-bold">Pasta Alfredo</h5>
        <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga necessitatibus nulla sequi! Sint architecto ipsum neque.</p>
        <a href="#" class="btn btn-custom">Ver</a>
      </div>
    </div>

    <div class="card" style="width: 18rem;">
      <img src="../assets/Ensalada-pollo-vinagreta-limon.webp" class="card-img-top" alt="...">
      <div class="card-body">
       <h5 class="card-title fw-bold">Ensalada de Pollo</h5>
        <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga necessitatibus nulla sequi! Sint architecto ipsum neque.</p>
        <a href="#" class="btn btn-custom">Ver</a>
      </div>
    </div>
  </div>

  <div class="services container-fluid pb-4">
  <h4 class="text-center fw-bold mb-5 pt-3">NUESTROS SERVICIOS</h4>
  <div class="row">
    <div class="col-12 col-md-6 d-flex flex-column align-items-end">
      <!-- Servicio 1 -->
      <div class="col-md-8 d-flex mb-4 align-items-center">
        <img src="../assets/plato.png" alt="Recetas" class="service-icon me-3">
        <div>
          <h3 class="service-title">Recetas paso a paso</h3>
          <p class="service-text">Tendrá desde la lista de ingredientes hasta el último detalle de la preparación.</p>
        </div>
      </div>
      <!-- Servicio 2 -->
      <div class="col-md-8 d-flex mb-4 align-items-center">
        <img src="../assets/lampara.png" alt="Tips de Cocina" class="service-icon me-3">
        <div>
          <h3 class="service-title">Tips de Cocina</h3>
          <p class="service-text">Desde trucos para cortar y preparar ingredientes hasta consejos para perfeccionar técnicas.</p>
        </div>
      </div>
      <!-- Servicio 3 -->
      <div class="col-md-8 d-flex mb-4 align-items-center">
        <img src="../assets/cronometro.png" alt="Cronómetro" class="service-icon me-3">
        <div>
          <h3 class="service-title">Cronómetro</h3>
          <p class="service-text">Nuestro cronómetro te permite medir el tiempo de cada paso con precisión.</p>
        </div>
      </div>
    </div>

    <div class="col-12 col-md-6 d-flex flex-column align-items-start">
      <!-- Servicio 4 -->
      <div class="col-md-8 mb-4 d-flex align-items-center">
        <img src="../assets/boton-de-play.png" alt="Videos Explicativos" class="service-icon me-3">
        <div>
          <h3 class="service-title">Videos Explicativos</h3>
          <p class="service-text">Cada video te guía paso a paso a través de recetas, técnicas y consejos culinarios.</p>
        </div>
      </div>
      <!-- Servicio 5 -->
      <div class="col-md-8 d-flex mb-4 align-items-center">
        <img src="../assets/subir-a-la-nube.png" alt="Publicar Recetas" class="service-icon me-3">
        <div>
          <h3 class="service-title">Publicar Recetas</h3>
          <p class="service-text">Comparte tus creaciones culinarias con el mundo utilizando nuestro servicio.</p>
        </div>
      </div>
      <!-- Servicio 6 -->
      <div class="col-md-8 d-flex mb-4 align-items-center">
        <img src="../assets/descargar.png" alt="Descarga de Recetas" class="service-icon me-3">
        <div>
          <h3 class="service-title">Descarga de Recetas</h3>
          <p class="service-text">Accede a tus platos favoritos en cualquier momento descargando nuestras recetas.</p>
        </div>
      </div>
    </div>
  </div>
</div>


</template>

<style scoped>

.main-page{
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

.categories p{
  font-weight: bold;
  padding: 1.5%;
  font-size: 18px;
}

.categories h5:hover{
  cursor: pointer;
}

.recipes .card{
  margin: 2%;
}

.card-img-top{
  width: 100%; 
  height: 150px; 
  object-fit: cover;
  object-position: center;
}

.recipes, .services{
  background: #e0dcdc;
}

.service-icon {
  width: 60px;
  height: 60px;
  margin-bottom: 1rem;
}

.service-title {
  font-size: 1.3rem;
  font-weight: bold;
  margin-top: 0.5rem;
  color: black;
}

.service-text {
  font-size: 0.85rem;
  color: black;
}

</style>
