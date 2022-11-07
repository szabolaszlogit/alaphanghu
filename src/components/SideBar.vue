<script setup>
import links from "../assets/links";
</script>

<template>
  <nav>
    <div v-for="link in links">
      <router-link v-if="link.to" :to="link.to">{{ link.txt }}</router-link>
      <div v-if="link.title" class="title">{{ link.title }}</div>
    </div>
  </nav>
</template>

<style scoped>
nav {
  display: flex;
  flex-direction: column;
  max-width: max-content;
  margin-right: 4rem;
}

nav a {
  text-decoration: none;
  color: var(--black);
  margin-bottom: 1rem;
}

.router-link-exact-active {
  color: var(--blue);
}
.router-link-active {
  color: var(--blue);
}

.title{
  margin: 1rem 0;
  color: var(--green)
}

@media screen and (max-width: 576px) {
  nav {
    display: none;
  }
}
</style>
