import { createRouter, createWebHistory } from "vue-router";

const HomePage = () => import("./components/HomePage.vue");
const ContactPage = () => import("./components/ContactPage.vue");
const TransPonator = () => import("./posts/TransPonator.vue");
const ChordProgression = () => import("./posts/ChordProgression.vue");
const GuitarPost = () => import("./posts/GuitarPost.vue");
const GuitarTypes = () => import("./posts/GuitarTypes.vue");
const HurokPost = () => import("./posts/HurokPost.vue");
const MilyenGuitart = () => import("./posts/MilyenGuitart.vue");
const ElectricGuitar = () => import("./posts/ElectricGuitar.vue");
const PickUp = () => import("./posts/PickUp.vue");
const KezeloSzervek = () => import("./posts/KezeloSzervek.vue");
const Erosito = () => import("./posts/Erosito.vue");
const ErositoKezelo = () => import("./posts/ErositoKezelo.vue");
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
    name: " Gitarvalasztas",
    component: MilyenGuitart,
  },
  {
    path: "/elektromos-gitar",
    name: "ElectricGuitar",
    component: ElectricGuitar,
  },
  {
    path: "/hangszedo",
    name: "hangszedo",
    component: PickUp,
  },
  {
    path: "/kezeloszervek",
    component: KezeloSzervek,
  },
  {
    path: "/erosito",
    component: () => import("./posts/Erosito.vue"),
  },
  {path: "/erosito-kezeloszervei", component: () => import("./posts/ErositoKezelo.vue")},
  {path: "/effektek", component: () => import("./posts/Effects.vue"),},
  {path: "/erosito-modellezo", component: () => import("./posts/ErositoModellezo.vue")},
  {path: "/kerdesek", component: () => import("./posts/Kerdesek.vue")},
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
