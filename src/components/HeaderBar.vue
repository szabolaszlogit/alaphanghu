<script setup>
import links from "../assets/links";
import { ref } from "vue";

let isOpen = ref(false);
</script>

<template>
  <header>
    <div class="hamburger" v-on:click="isOpen = !isOpen">
      <svg
        class="header-items"
        xmlns="http://www.w3.org/2000/svg"
        height="48"
        width="48"
      >
        <path d="M6 36v-3h36v3Zm0-10.5v-3h36v3ZM6 15v-3h36v3Z" />
      </svg>
    </div>
    <img class="header-items" src="/logo.svg" alt="alaphang logo" />
    <div class="header-items"><router-link to="/">Alaphang</router-link></div>
  </header>

  <Transition name="slide">
    <nav v-if="isOpen" v-on:click="isOpen = !isOpen">
      <div v-for="link in links">
      <router-link v-if="link.head === false" :to="link.ref">{{ link.name }}</router-link>
      <div v-if="link.head === true" class="title">{{ link.name }}</div>
    </div>
    </nav>
  </Transition>
</template>

<style scoped>
header {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: var(--blue);
  padding: 1rem 0.5rem;
}

header div {
  font-size: 2rem;
}
.header-items {
  margin-right: 1rem;
}

header a {
  text-decoration: none;
  color: var(--white);
}

header .router-link-exact-active {
  color: var(--white);
}
header .router-link-active {
  color: var(--white);
}

nav {
  background-color: var(--darkgrey);
  display: flex;
  flex-direction: column;
  position: absolute;
  z-index: 100;
  padding: 1.5rem;
  width: 100%;
  border-top: 20px solid var(--red);
}

nav a {
  text-decoration: none;
  color: var(--white);
  margin-bottom: 1rem;
}

img {
  display: inline-block;
  margin: 0;
}

.title {
  margin: 1rem 0; 
  color: var(--green);
}

.router-link-exact-active {
  color: var(--blue);
}
.router-link-active {
  color: var(--red);
}

@media screen and (min-width: 576px) {
  .hamburger {
    display: none;
  }
  header {
    padding: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  nav {
    display: none;
  }
  nav a:hover {
    color: hotpink;
  }
}
</style>
