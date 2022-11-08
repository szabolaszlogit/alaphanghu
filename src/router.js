import { createRouter, createWebHistory } from "vue-router";

const HomePage = () => import("./components/HomePage.vue");
const ContactPage = () => import("./components/ContactPage.vue");
const ToolsPost = () => import("./posts/ToolsPost.vue");
const ChordProgression = () => import("./posts/ChordProgression.vue");
const GuitarPost = () => import("./posts/GuitarPost.vue");
const GuitarTypes = () => import("./posts/GuitarTypes.vue");
const HurokPost = () => import("./posts/HurokPost.vue");
const MilyenGuitart = () => import("./posts/MilyenGuitart.vue");

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
  {
    path: "/tools",
    name: "tools",
    component: ToolsPost,
  },  
  {
    path: "/akkordmenetek",
    name: "akkordmenetek",
    component: ChordProgression,
  },
  {
    path: "/gitar",
    name: "gitar",
    component: GuitarPost,
  },
  {
    path: "/gitarfajtak",
    name: "gitarfajtak",
    component: GuitarTypes,
  },
  {
    path: "/hurok",
    name: "hurok",
    component: HurokPost,
  },
  {
    path: "/gitarvalasztas",
    name: " /gitarvalasztas",
    component: MilyenGuitart,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
