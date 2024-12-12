<script setup>
import { onMounted, ref, watch } from 'vue';
import router from '../router';
import { useRecipesStore } from '../stores/recipeStore';
import cryptoJS from 'crypto-js';


let encr_password = 'clave-secreta';
const recipeStore = useRecipesStore(); 
const recipe = ref({});
const recipeWatch = ref({});
const loading = ref(true);
let id = 0;

onMounted(async () => {
  loading.value = true;
  id = decodeURIComponent(cryptoJS.AES.decrypt(router.currentRoute.value.params.id.toString(), encr_password).toString(cryptoJS.enc.Utf8));
  console.log(id);
  recipe.value = await recipeStore.readRecipeById(id);
  console.log(recipe.value);
  loading.value = false;
})

</script>
<template>
  <div v-if="loading" class="text-center mt-5">
    <p>Cargando receta...</p>
  </div>
  <div v-else-if="!loading"class="container mt-4">
      <!-- Encabezado -->
      <div class="row align-items-center">
        <div class="col-lg-8">
          <h1 class="display-5">{{ recipe.value.recetaTitulo}}</h1>
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
            :src="`/src/assets/recipes/receta-${id-1}.jpg`"
            alt="Tiramisu"
            class="img-fluid rounded shadow-sm"
          />
          <p class="mt-3">
            {{ recipe.value.recetaDescripcion}}
          </p>
  
          <h3 class="mt-4">Lista de Ingredientes</h3>
          <ul>
            <li v-for="item in recipe.value.ingredients">{{`${parseInt(item.ingrRecCantidad)} ${item.medNombre.toLowerCase()} de ${item.ingredNombre}`}}</li>
          </ul>
  
          <h3 class="mt-4">Paso a Paso</h3>
          <ol>
            <li v-for="paso in recipe.value.steps" :key="paso.id"  
            class="d-flex align-items-center mb-3">
              {{ paso.pasoDescripcion}}
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