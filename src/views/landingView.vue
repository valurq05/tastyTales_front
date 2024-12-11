<template>
  <div class="main-page container-fluid text-white py-5">
    <div class="row align-items-center">
      <div class="col-12 col-md-6 text-center text-md-start ps-3">
        <h2 class="display-5 fw-bold">TODO TIPO DE RECETAS</h2>
        <h2 class="fw-bold">AL ALCANCE DE TUS MANOS</h2>
        <p class="pt-3">
          Publica, edita y califica recetas. Sigue tutoriales paso a paso y comparte tu pasión por la cocina. ¡Inspírate y cocina con confianza!
        </p>
        <RouterLink to="register" class="btn btn-custom btn-lg fw-semibold mt-3">Registrarse</RouterLink>
      </div>
      <div class="col-12 col-md-6 text-center">
        <img src="../assets/bandejapaisa2.png" alt="Comida" class="img-fluid rounded">
      </div>
    </div>
  </div>

  <div class="categories d-flex flex-wrap justify-content-center align-items-center py-4">
    <p class="mx-3">RECETAS</p>
    <p class="mx-3">BEBIDAS</p>
    <p class="mx-3">SALUDABLES</p>
    <p class="mx-3">REPOSTERÍA</p>
    <p class="mx-3">COMUNIDAD</p>
  </div>

  <div class="recipes container d-flex flex-wrap justify-content-center py-5">
    <div class="card mx-2 my-3" style="width: 18rem;">
      <img src="../assets/arrozpollo.jpg" class="card-img-top" alt="Arroz con Pollo">
      <div class="card-body">
        <h5 class="card-title fw-bold">Arroz con Pollo</h5>
        <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga necessitatibus nulla sequi! Sint architecto ipsum neque.</p>
        <a href="#" class="btn btn-custom">Ver</a>
      </div>
    </div>

    <div class="card mx-2 my-3" style="width: 18rem;">
      <img src="../assets/pasta.jpg" class="card-img-top" alt="Pasta Alfredo">
      <div class="card-body">
        <h5 class="card-title fw-bold">Pasta Alfredo</h5>
        <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga necessitatibus nulla sequi! Sint architecto ipsum neque.</p>
        <a href="#" class="btn btn-custom">Ver</a>
      </div>
    </div>

    <div class="card mx-2 my-3" style="width: 18rem;">
      <img src="../assets/Ensalada-pollo-vinagreta-limon.webp" class="card-img-top" alt="Ensalada de Pollo">
      <div class="card-body">
        <h5 class="card-title fw-bold">Ensalada de Pollo</h5>
        <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga necessitatibus nulla sequi! Sint architecto ipsum neque.</p>
        <a href="#" class="btn btn-custom">Ver</a>
      </div>
    </div>
  </div>

  <div class="services container py-5">
    <h4 class="text-center fw-bold mb-5">NUESTROS SERVICIOS</h4>
    <div class="row">
      <!-- First column -->
      <div class="col-12 col-md-6">
        <div class="service-item d-flex align-items-center mb-4">
          <img src="../assets/plato.png" alt="Recetas" class="service-icon me-3">
          <div>
            <h3 class="service-title">Recetas paso a paso</h3>
            <p class="service-text">Tendrá desde la lista de ingredientes hasta el último detalle de la preparación.</p>
          </div>
        </div>
        <div class="service-item d-flex align-items-center mb-4">
          <img src="../assets/lampara.png" alt="Tips de Cocina" class="service-icon me-3">
          <div>
            <h3 class="service-title">Tips de Cocina</h3>
            <p class="service-text">Desde trucos para cortar y preparar ingredientes hasta consejos para perfeccionar técnicas.</p>
          </div>
        </div>
        <div class="service-item d-flex align-items-center mb-4">
          <img src="../assets/cronometro.png" alt="Cronómetro" class="service-icon me-3">
          <div>
            <h3 class="service-title">Cronómetro</h3>
            <p class="service-text">Nuestro cronómetro te permite medir el tiempo de cada paso con precisión.</p>
          </div>
        </div>
      </div>
      <!-- Second column -->
      <div class="col-12 col-md-6">
        <div class="service-item d-flex align-items-center mb-4">
          <img src="../assets/boton-de-play.png" alt="Videos Explicativos" class="service-icon me-3">
          <div>
            <h3 class="service-title">Videos Explicativos</h3>
            <p class="service-text">Cada video te guía paso a paso a través de recetas, técnicas y consejos culinarios.</p>
          </div>
        </div>
        <div class="service-item d-flex align-items-center mb-4">
          <img src="../assets/subir-a-la-nube.png" alt="Publicar Recetas" class="service-icon me-3">
          <div>
            <h3 class="service-title">Publicar Recetas</h3>
            <p class="service-text">Comparte tus creaciones culinarias con el mundo utilizando nuestro servicio.</p>
          </div>
        </div>
        <div class="service-item d-flex align-items-center mb-4">
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
/* Existing styles with adjustments for better responsiveness */
.main-page {
  background: linear-gradient(#ac1c24, #4f0f15);
}

.diagonal-image {
  transform: rotate(-20deg);
  max-width: 100%;
}

.btn-custom {
  background-color: #DD3B3C;
  color: white;
  transition: all 0.3s ease;
}

.btn-custom:hover {
  background-color: #b72d2e;
  transform: scale(1.1);
}

.categories p {
  font-weight: bold;
  font-size: 18px;
  padding: 1rem;
  cursor: pointer;
  transition: color 0.3s ease;
}

.categories p:hover {
  color: #DD3B3C;
}

.recipes .card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.recipes .card:hover {
  transform: scale(1.05);
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);
}

.service-icon {
  width: 50px;
  height: 50px;
}

.service-title {
  font-size: 1.2rem;
  font-weight: bold;
}

.service-text {
  font-size: 0.9rem;
  color: #333;
}
</style>