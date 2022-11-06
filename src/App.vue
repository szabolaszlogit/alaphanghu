<script setup>
import HeaderBar from "./components/HeaderBar.vue";
import SideBar from "./components/SideBar.vue"; 
</script>

<template>
  <header-bar></header-bar>
  <div class="wrapper">
    <side-bar></side-bar>
    <main><div>
      <router-view></router-view>
    </div></main>
  </div>
</template>

<style scoped></style>
