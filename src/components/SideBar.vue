<script setup>
import links from "../assets/links";

</script>

<template>
   <nav>
      <router-link v-for="link in links" :to="link.to">{{
        link.txt
      }}</router-link>
    </nav>
</template>

<style scoped>
nav {
  background-color: var(--darkgrey);
  display: flex;
  flex-direction: column;
  padding: 2rem 4rem 2rem 2rem;
  max-width:max-content;
 
}

nav a {
  text-decoration: none;
  color: var(--white);
  margin-bottom: 1rem;
}

.router-link-exact-active {
  color: var(--blue);
}
.router-link-active {
  color: var(--blue);
}

@media screen and (max-width: 576px) {
  
 
  nav {
    display: none;
  }
}
</style>