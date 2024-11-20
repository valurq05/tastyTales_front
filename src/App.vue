<script setup>
import headerMainComponent from './components/header/headerMainComponent.vue';
import landingView from './views/landingView.vue'
import footerComponent from './components/footerComponent.vue';
import headerProtected from './components/header/headerProtected.vue';
import { RouterView } from 'vue-router';
</script>

<template>
  <headerMainComponent></headerMainComponent>
  <RouterView></RouterView>
  <footerComponent></footerComponent>
</template>

<style scoped>

</style>
