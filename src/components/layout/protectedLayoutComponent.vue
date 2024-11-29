<template>
    <div>
      <HeaderProtectedComponent></HeaderProtectedComponent>
      <main>
        <RouterView></RouterView>
      </main>
      <FooterComponent></FooterComponent>
    </div>
</template>

<script setup>
import FooterComponent from '../footerComponent.vue'
import HeaderProtectedComponent from '../header/headerProtected.vue'
</script>