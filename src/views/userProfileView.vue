<template>
    <div class="main-page text-center text-white p-5">
      <h1>Mi perfil</h1>
    </div>
  <div v-if="loading">
  <p class="text-center">Cargando tu perfil...</p>
  </div>
  <div v-else-if="!loading && per_data" class="container my-5">
  <div id="cardProfile" class="card p-4 shadow ">
    <div class="row align-items-center">
      <div class="col-md-8">
        <h5 id="namePerson" class="fw-bold mb-3">
          <span class="text-dark fw-bold">{{ per_data.perName }} {{per_data.perLastName}}</span>
        </h5>
        <p id="infoPerson" class="mb-0 text-secondary fw-semibold">Correo: {{ user_data.userNombre }}</p>
        <p id="infoPerson" class="mb-0 text-secondary fw-semibold">Documento: {{ per_data.perDoc }}</p>
      </div>

      <div class="col-md-4 text-center">
        <img id="imageProfile"
          src="../assets/ftuftytyrtf.jpg"
          alt="Foto de perfil" class="rounded-circle img-fluid">
          <p id="fotoPerfil" class="mt-2 fw-bold">Foto de Perfil</p>
      </div>
    </div>
  </div>
  <h2 class="text-center mt-5">Tus recetas</h2>
    <div class="d-flex mt-5">
      <div class="card recipe-card m-3" v-for="(recipe, index) in Userrecipes" :key="index">
        <img
          class="card-img-top"
          src="../assets/arrozpollo.jpg"
          alt="Receta"
        />
        <div class="card-body shadow">
          <h5 class="card-title">{{ recipe.recetaTitulo }}</h5>
          <p class="card-text">{{ recipe.recetaDescripcion }}</p>
          <div class="d-flex justify-content-between align-items-center">
            <div class="rating">
              <i class="bi bi-star-fill"></i>
              <span> 4.5 / 5</span>
            </div>
            <RouterLink
              :to="'recipe/' + recipe.recetaID"
              class="btn btn-ver-receta"
              >Ver receta</RouterLink
            >
          </div>
        </div>
      </div>
    </div>
</div>
</template>

<script setup>
import { useUserStore } from '../stores/userStore'
import { onMounted, ref } from "vue";

const userStore = useUserStore();
const Userrecipes = userStore.userRecipes;
const per_data = ref();
const user_data = ref();
let loading = ref(false);

onMounted(async () => {
    loading.value = true;
    const user_id = JSON.parse(localStorage.getItem("User"));
    const use_id = localStorage.getItem("USE_ID");
    user_data.value = user_id;
    if (user_id) {
      await userStore.readUserRecipes(use_id);
    }
    console.log(user_data.value);
    per_data.value = user_id.person;
    console.log(per_data.value);
    loading.value = false;
  });
</script>


<style scoped>
.main-page{
  background: linear-gradient(#ac1c24, #4f0f15);
}
.card {
    border: none;
    border-radius: 12px;
}

.dark-mode .card {
    background-color: #1e1e1e;
}

.edit-button {
    background-color: #d63384;
    border: none;
    color: white;
}

.edit-button:hover {
    background-color: #bb2d73;
}

#buttonEditProfile{
    background-color: #C06EF3; 
    color: #ffffff; 
    border: none; 
    border-radius: 10px; 
    padding: 10px 20px;
    margin-left:15px;
}

#imageProfile{
    width: 250px; 
    height: 250px; 
    object-fit: cover;
}
#namePerson{
    margin-left:15px;
    font-size:180%;
    color: var(--purple-font-color);
}
#infoPerson{
    margin-left:15px;
    font-size:120%;
}
#cardProfile{
    background-color: #f3e8ff; 
    border-radius: 15px;
}

#fotoPerfil{
    color: var(--purple-font-color);
}
.personName{
    color: #824dad;
}

</style>