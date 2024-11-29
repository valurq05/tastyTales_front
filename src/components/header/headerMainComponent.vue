<template>
    <div class="header d-flex align-items-center">
      <div class="col-6 col-md-5">
        <div class="pb-2">
          <RouterLink :to="{name:'home'}" class="logo-link"></RouterLink>
        </div>
      </div>
      <div class="col-6 col-md-7 text-end">
        <RouterLink :to="{name:'login'}" class="btn fw-semibold text-light">Iniciar Sesión</RouterLink>
      </div>
    </div>
</template>  

<script setup>
  import {RouterLink} from 'vue-router';
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

.header{
    background-color: #ac1c24;
}

</style>