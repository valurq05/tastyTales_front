<template>
    <div class="container mt-5 mb-4">
      <h4 class="text-danger">Datos principales de tu receta</h4>
      <form @submit.prevent="submitForm" class="needs-validation" novalidate>
        <div class="row">
          <div class="col-md-6">
            <div class="mb-3">
              <label class="form-label">¿Cómo llamarás tu receta?</label>
              <input type="text" class="form-control" v-model="recipe.name" required />
              <div class="invalid-feedback">Por favor, ingresa un nombre para la receta.</div>
            </div>
            <div class="mb-3">
              <label class="form-label">Categoría de la receta</label>
              <input type="text" class="form-control" v-model="recipe.category" required />
              <div class="invalid-feedback">Por favor, ingresa una categoría.</div>
            </div>
            <div class="mb-3">
              <label class="form-label">Cantidad</label>
              <div class="input-group">
                <button type="button" class="btn btn-outline-secondary" @click="updateQuantity(-1)">-</button>
                <input type="number" class="form-control text-center" v-model.number="recipe.quantity" required readonly />
                <button type="button" class="btn btn-outline-secondary" @click="updateQuantity(1)">+</button>
              </div>
            </div>
            <div class="mb-3">
              <label class="form-label">Tiempo de preparación</label>
              <div class="input-group">
                <button type="button" class="btn btn-outline-secondary" @click="updateTime(-5)">-</button>
                <input type="number" class="form-control text-center" v-model.number="recipe.time" required readonly />
                <button type="button" class="btn btn-outline-secondary" @click="updateTime(5)">+</button>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="mb-3">
              <label class="form-label">Descripción de la receta</label>
              <textarea class="form-control" v-model="recipe.description" rows="3" required></textarea>
              <div class="invalid-feedback">Por favor, proporciona una descripción.</div>
            </div>
            <div class="mb-3">
              <label class="form-label">¿Algún tip especial?</label>
              <textarea class="form-control" v-model="recipe.tip" rows="2"></textarea>
            </div>
            <div class="mb-3">
              <label class="form-label">Fotos o imágenes de tu receta</label>
              <div class="d-flex justify-content-center border rounded py-3">
                <i class="fas fa-solid fa-pen-to-square"></i>
              </div>
            </div>
            <div class="mb-3">
              <label class="form-label">Videos detallados de tu receta</label>
              <div class="d-flex justify-content-center border rounded py-3">
                <i class="fas fa-solid fa-pen-to-square"></i>
              </div>
            </div>
          </div>
        </div>
  
        <div class="mb-3">
          <label class="form-label">Agrega los ingredientes necesarios para tu receta</label>
          <div class="d-flex flex-wrap">
            <div v-for="(ingredient, index) in recipe.ingredients" :key="index" class="border rounded p-2 me-2 mb-2">
              <span>{{ ingredient }}</span>
              <i @click="removeIngredient(index)"> x </i>
            </div>
            <button type="button" class="btn btn-outline-primary" @click="showAddIngredientModal">
              Agregar ingrediente
            </button>
          </div>
        </div>
  
        <h4 class="text-danger">Planea el paso a paso de tu receta</h4>
        <br />
        <button type="button" class="btn btn-outline-primary" @click="openModal">Agregar paso</button>
        <hr />
        <div class="mb-3">
    <label class="form-label">Pasos</label>
    <div v-for="(step, index) in recipe.steps" :key="index" class="border rounded p-3 mb-2">
      <p><strong>{{ index + 1 }}:</strong> {{ step.description }}</p>
      <div class="d-flex align-items-center">
        <input type="number" class="form-control me-2" v-model.number="step.timer" min="0" />
        <button class="btn btn-outline-success me-2" @click="startTimer(index)">Iniciar</button>
        <button class="btn btn-outline-warning me-2" @click="pauseTimer(index)">Pausar</button>
        <button class="btn btn-outline-danger" @click="resetTimer(index)">Reiniciar</button>
      </div>
      <p class="mt-2">Tiempo restante: {{ step.timeLeft }} segundos</p>
    </div>
  </div>

  
        <div class="d-flex justify-content-between">
          <button type="submit" class="btn btn-danger">Guardar</button>
          <button type="button" class="btn btn-outline-danger">Subir receta Pública</button>
          <button type="button" class="btn btn-outline-secondary">Subir receta Privada</button>
        </div>
      </form>
  
      <!-- Modal para agregar pasos -->
      <div class="modal fade" id="addStepModal" tabindex="-1" aria-labelledby="addStepModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="addStepModalLabel">Agregar Paso</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <input type="text" class="form-control" v-model="newStep" placeholder="Describe el paso" />
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
              <button type="button" class="btn btn-primary" @click="addStep">Agregar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { ref, reactive } from 'vue';
  
  export default {
    setup() {
      const recipe = reactive({
        name: '',
        category: '',
        quantity: 4,
        time: 45,
        description: '',
        tip: '',
        ingredients: ['500g. Carne', '1 Cucharada Sal', '1 Pizca Azúcar'],
        steps: [
          { description: 'Vierta 50g. de sal sobre la carne', timer: 0, timeLeft: 0, interval: null },
          { description: 'Vierta 50g. de pimienta sobre la carne', timer: 0, timeLeft: 0, interval: null },
        ],
      });
  
      const newStep = ref('');
  
      const updateQuantity = (amount) => {
        recipe.quantity = Math.max(1, recipe.quantity + amount);
      };
  
      const updateTime = (amount) => {
        recipe.time = Math.max(5, recipe.time + amount);
      };
  
      const openModal = () => {
        const modal = new bootstrap.Modal(document.getElementById('addStepModal'));
        modal.show();
      };
  
      const addStep = () => {
        if (newStep.value.trim() !== '') {
          recipe.steps.push({ description: newStep.value.trim(), timer: 0, timeLeft: 0, interval: null });
          const modal = bootstrap.Modal.getInstance(document.getElementById('addStepModal'));
          modal.hide();
        }
      };
  
      const startTimer = (index) => {
        if (recipe.steps[index].timeLeft === 0) {
          recipe.steps[index].timeLeft = recipe.steps[index].timer;
        }
  
        if (!recipe.steps[index].interval) {
          recipe.steps[index].interval = setInterval(() => {
            if (recipe.steps[index].timeLeft > 0) {
              recipe.steps[index].timeLeft--;
            } else {
              clearInterval(recipe.steps[index].interval);
              recipe.steps[index].interval = null;
            }
          }, 1000);
        }
      };
  
      const pauseTimer = (index) => {
        clearInterval(recipe.steps[index].interval);
        recipe.steps[index].interval = null;
      };
  
      const resetTimer = (index) => {
        clearInterval(recipe.steps[index].interval);
        recipe.steps[index].interval = null;
        recipe.steps[index].timeLeft = recipe.steps[index].timer;
      };
  
      return {
        recipe,
        newStep,
        updateQuantity,
        updateTime,
        openModal,
        addStep,
        startTimer,
        pauseTimer,
        resetTimer,
      };
    },
  };
  </script>
  
  <style>
  .form-label {
    font-weight: bold;
  }
  </style>