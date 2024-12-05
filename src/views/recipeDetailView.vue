<script setup>

</script>
<template>
    <div class="container mt-4">
      <!-- Encabezado -->
      <div class="row align-items-center">
        <div class="col-lg-8">
          <h1 class="display-5">Tiramisú</h1>
        </div>
        <div class="col-lg-4 text-end">
          <button class="btn btn-outline-danger btn-rounded shadow-sm">Descargar Receta</button>
          <button class="btn btn-light btn-rounded shadow-sm ms-2">Añadir</button>
        </div>
      </div>
  
      <!-- Contenido principal -->
      <div class="row mt-4">
        <!-- Sección izquierda -->
        <div class="col-lg-8">
          <img
            src="https://img.rtve.es/imagenes/receta-tiramisu-trucos-jugoso-facil-rapido/1684846876915.jpg"
            alt="Tiramisu"
            class="img-fluid rounded shadow-sm"
          />
          <p class="mt-3">
            El tiramisú es un postre italiano clásico y delicioso que combina capas de bizcochos de soletilla empapados en café expreso con una mezcla suave y cremosa de queso mascarpone, huevos y azúcar.
          </p>
  
          <h3 class="mt-4">Lista de Ingredientes</h3>
          <ul>
            <li>300 g de bizcochos de soletilla</li>
            <li>500 gramos de queso mascarpone</li>
            <li>4 huevos grandes (separados en yemas y claras)</li>
            <li>100 g de azúcar</li>
            <li>300 ml de café expreso fuerte (enfriado)</li>
            <li>30 ml de licor de amaretto o marsala</li>
            <li>Cacao en polvo para decorar</li>
          </ul>
  
          <h3 class="mt-4">Paso a Paso</h3>
          <ol>
            <li class="d-flex align-items-center mb-3">
              Preparar el café y dejarlo enfriar.
              <button class="btn btn-outline-primary btn-sm ms-auto">Cronómetro</button>
            </li>
            <li class="d-flex align-items-center mb-3">
              Separar las claras de las yemas y batir cada una con azúcar.
              <button class="btn btn-outline-primary btn-sm ms-auto">Cronómetro</button>
            </li>
            <li class="d-flex align-items-center mb-3">
              Montar el tiramisú en capas alternando bizcochos empapados en café.
              <button class="btn btn-outline-primary btn-sm ms-auto">Cronómetro</button>
            </li>
            <li class="d-flex align-items-center mb-3">
              Refrigerar y espolvorear cacao en polvo antes de servir.
              <button class="btn btn-outline-primary btn-sm ms-auto">Cronómetro</button>
            </li>
          </ol>
  
          <div class="alert alert-success mt-4 shadow-sm" role="alert">
            <strong>Felicidades:</strong> Completa tu receta y descarga tu certificado.
          </div>
        </div>
  
        <!-- Sección derecha -->
        <div class="col-lg-4">
          <div class="card shadow-sm mb-4">
            <div class="card-body">
              <h5 class="card-title">Tiempo de preparación</h5>
              <p>45 Minutos Aproximadamente</p>
              <h6>Cantidad:</h6>
              <p>4 - 6 personas</p>
              <h6>Categoría:</h6>
              <p>Postre, Fácil</p>
              <h6>Calificación:</h6>
              <p>
                <span class="text-warning">★★★★★</span>
              </p>
            </div>
          </div>
  
          <div class="card shadow-sm mb-4">
            <div class="card-header bg-danger text-white">Tips Especiales</div>
            <div class="card-body">
              Usa mascarpone fresco para una textura más cremosa y evita que los bizcochos se empapen demasiado en el café.
            </div>
          </div>
  
          <div class="card shadow-sm mb-4">
            <div class="card-header bg-warning text-white">Notas</div>
            <div class="card-body">
              <textarea class="form-control" rows="4" placeholder="Escribe tus notas aquí..."></textarea>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
<style>
    .btn-rounded {
  border-radius: 20px;
}

.card {
  border: none;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.img-fluid {
  max-height: 400px;
  object-fit: cover;
}

.alert {
  border-radius: 10px;
}

button.btn-outline-primary {
  border-radius: 20px;
}
</style>  