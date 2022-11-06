import { createRouter, createWebHistory } from "vue-router";

const HomePage = () => import("./components/HomePage.vue");
const ContactPage = () => import("./components/ContactPage.vue");

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomePage,
  },
  {
    path: "/kapcsolat",
    name: "kapcsolat",
    component: ContactPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
