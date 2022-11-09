import { createRouter, createWebHistory } from "vue-router";

const HomePage = () => import("./components/HomePage.vue");
const ContactPage = () => import("./components/ContactPage.vue");
const TransPonator = () => import("./posts/TransPonator.vue");
const ChordProgression = () => import("./posts/ChordProgression.vue");
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
    path: "/transzponator",
    name: "TansPonator",
    component: TransPonator,
  },
  {
    path: "/akkordmenetek",
    name: "akkordmenetek",
    component: ChordProgression,
  },

  { path: "/gitar", component: () => import("./posts/GuitarPost.vue") },

  { path: "/gitarfajtak", component: () => import("./posts/GuitarTypes.vue") },

  { path: "/hurok", component: () => import("./posts/HurokPost.vue") },

  {
    path: "/gitarvalasztas",
    component: () => import("./posts/MilyenGuitart.vue"),
  },

  {
    path: "/elektromos-gitar",
    component: () => import("./posts/ElectricGuitar.vue"),
  },

  { path: "/hangszedo", component: () => import("./posts/PickUp.vue") },

  {
    path: "/kezeloszervek",
    component: () => import("./posts/KezeloSzervek.vue"),
  },

  { path: "/erosito", component: () => import("./posts/Erosito.vue") },

  {
    path: "/erosito-kezeloszervei",
    component: () => import("./posts/ErositoKezelo.vue"),
  },
  { path: "/effektek", component: () => import("./posts/Effects.vue") },
  {
    path: "/erosito-modellezo",
    component: () => import("./posts/ErositoModellezo.vue"),
  },
  { path: "/kerdesek", component: () => import("./posts/Kerdesek.vue") },
  { path: "/zeneelmelet", component: () => import("./posts/ZeneElmelet.vue") },
  { path: "/akkord", component: () => import("./posts/Akkord.vue") },
  { path: "/jelolesek", component: () => import("./posts/Jelolesek.vue") },
  { path: "/tabulatura", component: () => import("./posts/Tabulatura.vue") },
  {
    path: "/akkordjeloles",
    component: () => import("./posts/Akkordjeloles.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
