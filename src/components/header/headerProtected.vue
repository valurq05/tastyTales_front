<template>
  <div class="header d-flex align-items-center justify-content-between py-3">
    <!-- Sección del logo -->
    <div class="logo">
      <a href="#" class="logo-link"></a>
    </div>

    <!-- Sección del menú de navegación -->
    <div class="nav-container">
      <ul class="nav d-flex align-items-center justify-content-end">
        <!-- Barra de búsqueda -->
        <li class="nav-item search-bar d-flex align-items-center me-3">
          <input class="form-control me-2" type="text" placeholder="Search..">
          <a href="#" class="search-icon"><i class="bi bi-search"></i></a>
        </li>
        <!-- Enlaces de navegación -->
        <li class="nav-item">
          <a class="nav-link" href="#">Descubrir</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Favoritos</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Mi Perfil</a>
        </li>
        <li class="nav-item">
          <button class="btn text-white" @click="logout"><i class="bi bi-box-arrow-right"></i> Salir</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { useAuthStore } from '../../stores/authStore.js'
import { useRouter } from 'vue-router'

const authStore = useAuthStore()
const router = useRouter()

const logout = async () => {
  try {
    await authStore.logout();
    router.push('/')
  } catch (error) {
    console.error('Error al cerrar sesión:', error)
  }
}
</script>

<style scoped>
.logo-link {
  display: inline-block;
  margin: 0 8%;
  width: 200px; 
  height: 100px;
  background-image: url('../../assets/TastyTalesLogo.png');
  background-repeat: no-repeat;
  background-size: contain; 
  background-position: center;
}

.header {
  background-color: #ac1c24;
  padding: 0 15px;
}

.nav-container {
  flex-grow: 1;
}

.nav {
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-link {
  color: white;
  font-weight: semibold;
  text-decoration: none;
  margin-left: 15px;
}

.nav-link:hover {
  color: #ffcccb;
}

.search-bar {
  display: flex;
  align-items: center; 
  gap: 8px; 
}

.search-bar input {
  flex: 1;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 5px 10px;
}

.search-icon {
  color: #333; 
  text-decoration: none;
  font-size: 1.2rem;
  cursor: pointer;
}

.search-icon:hover {
  color: #007bff; 
}
</style>
