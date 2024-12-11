<template>
     <div class="main-page container-fluid text-white py-5">
      <div class="d-flex col-12 align-items-center">
        <img class="profile-img" src="../assets/4fd8c349-a322-4baa-bfc1-4e9242bf571f_3.jpeg" alt="" srcset="">
        <h2 class="m-2 fw-bold">Bienvenida, Valentina.</h2>
      </div>
      <p class="pt-1 font-italic">Disfruta de recetas nuevas y comparte tus creaciones</p>
      <RouterLink to="register" class="btn btn-custom fw-semibold">Crea una nueva receta</RouterLink>
    </div>
</template>

<style scope>

.main-page{
  background: linear-gradient(#ac1c24, #4f0f15);
}

.profile-img{
    height: 60px;
    border-radius: 50%;
}

.btn-custom{
  color: white;
  background-color: #DD3B3C;
  font-size: 14px;
}

.font-italic{
    font-style: italic;
}

</style>