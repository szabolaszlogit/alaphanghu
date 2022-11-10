import { createRouter, createWebHistory } from "vue-router";

const HomePage = () => import("./components/HomePage.vue");
const ContactPage = () => import("./components/ContactPage.vue");
const TransPonator = () => import("./pages/TransPonator.vue");
const ChordProgression = () => import("./pages/ChordProgression.vue");
const routes = [
  {
    path: "/",
    name: "Alaphang",
    component: HomePage,
  },
  {
    path: "/kapcsolat",
    name: "kapcsolat",
    component: ContactPage,
  },
  {
    path: "/transzponator",
    name: "TransPonator",
    component: TransPonator,
  },
  {
    path: "/akkordmenetek",
    name: "akkordmenetek",
    component: ChordProgression,
  },
  {
    path: "/gitar/agitar",
    component: () => import("./pages/gitar/agitar.vue"),
  },
  {
    path: "/gitar/gitarfajtak",
    component: () => import("./pages/gitar/gitarfajtak.vue"),
  },
  { path: "/gitar/hurok", component: () => import("./pages/gitar/hurok.vue") },
  {
    path: "/gitar/milyen-gitart-vegyek",
    component: () => import("./pages/gitar/milyen-gitart-vegyek.vue"),
  },
  {
    path: "/elektromosgitar/tortenelem",
    component: () => import("./pages/elektromosgitar/tortenelem.vue"),
  },
  {
    path: "/elektromosgitar/hangszedo",
    component: () => import("./pages/elektromosgitar/hangszedo.vue"),
  },
  {
    path: "/elektromosgitar/kezeloszervek",
    component: () => import("./pages/elektromosgitar/kezeloszervek.vue"),
  },
  {
    path: "/elektromosgitar/erosito",
    component: () => import("./pages/elektromosgitar/erosito.vue"),
  },
  {
    path: "/elektromosgitar/erosito-kezeloszervei",
    component: () =>
      import("./pages/elektromosgitar/erosito-kezeloszervei.vue"),
  },
  {
    path: "/elektromosgitar/effektek",
    component: () => import("./pages/elektromosgitar/effektek.vue"),
  },
  {
    path: "/elektromosgitar/erosito-es-effekt-modellezo-szoftver",
    component: () =>
      import(
        "./pages/elektromosgitar/erosito-es-effekt-modellezo-szoftver.vue"
      ),
  },
  {
    path: "/elektromosgitar/nagy-kerdesek",
    component: () => import("./pages/elektromosgitar/nagy-kerdesek.vue"),
  },
  {
    path: "/zeneelmelet/amit-tudni-kell",
    component: () => import("./pages/zeneelmelet/amit-tudni-kell.vue"),
  },
  {
    path: "/zeneelmelet/akkord",
    component: () => import("./pages/zeneelmelet/akkord.vue"),
  },
  {
    path: "/zeneelmelet/jelolesek",
    component: () => import("./pages/zeneelmelet/jelolesek.vue"),
  },
  {
    path: "/zeneelmelet/tabulatura",
    component: () => import("./pages/zeneelmelet/tabulatura.vue"),
  },
  {
    path: "/zeneelmelet/akkordjeloles",
    component: () => import("./pages/zeneelmelet/akkordjeloles.vue"),
  },
  {
    path: "/mielott-nekikezdunk/mire-lesz-szuksegem",
    component: () =>
      import("./pages/mielott-nekikezdunk/mire-lesz-szuksegem.vue"),
  },
  {
    path: "/mielott-nekikezdunk/mennyi-ido",
    component: () => import("./pages/mielott-nekikezdunk/mennyi-ido.vue"),
  },
  {
    path: "/mielott-nekikezdunk/gyakorlas",
    component: () => import("./pages/mielott-nekikezdunk/gyakorlas.vue"),
  },
  {
    path: "/mielott-nekikezdunk/gitartartas",
    component: () => import("./pages/mielott-nekikezdunk/gitartartas.vue"),
  },
  {
    path: "/mielott-nekikezdunk/hangok-lefogasa",
    component: () => import("./pages/mielott-nekikezdunk/hangok-lefogasa.vue"),
  },
  {
    path: "/mielott-nekikezdunk/hangolas",
    component: () => import("./pages/mielott-nekikezdunk/hangolas.vue"),
  },
  {
    path: "/ritmusgitar1/akkordtanulas",
    component: () => import("./pages/ritmusgitar1/akkordtanulas.vue"),
  },
  {
    path: "/ritmusgitar1/akkordtanulas-hibak",
    component: () => import("./pages/ritmusgitar1/akkordtanulas-hibak.vue"),
  },
  {
    path: "/ritmusgitar1/lehuzas",
    component: () => import("./pages/ritmusgitar1/lehuzas.vue"),
  },
  {
    path: "/ritmusgitar1/akkordvaltas",
    component: () => import("./pages/ritmusgitar1/akkordvaltas.vue"),
  },
  {
    path: "/ritmusgitar1/e-moll",
    component: () => import("./pages/ritmusgitar1/e-moll.vue"),
  },
  {
    path: "/ritmusgitar1/am",
    component: () => import("./pages/ritmusgitar1/am.vue"),
  },
  {
    path: "/ritmusgitar1/a-d-e",
    component: () => import("./pages/ritmusgitar1/a-d-e.vue"),
  },
  {
    path: "/ritmusgitar1/akkordkiseret1",
    component: () => import("./pages/ritmusgitar1/akkordkiseret1.vue"),
  },
  {
    path: "/ritmusgitar1/ures-akkord",
    component: () => import("./pages/ritmusgitar1/ures-akkord.vue"),
  },
  {
    path: "/ritmusgitar1/c-g",
    component: () => import("./pages/ritmusgitar1/c-g.vue"),
  },
  {
    path: "/ritmusgitar2/akkordkiseret2",
    component: () => import("./pages/ritmusgitar2/akkordkiseret2.vue"),
  },
  {
    path: "/ritmusgitar2/pengeto",
    component: () => import("./pages/ritmusgitar2/pengeto.vue"),
  },
  {
    path: "/ritmusgitar2/d-moll-b-7",
    component: () => import("./pages/ritmusgitar2/d-moll-b-7.vue"),
  },
  {
    path: "/ritmusgitar2/akkordkiseret3",
    component: () => import("./pages/ritmusgitar2/akkordkiseret3.vue"),
  },
  {
    path: "/ritmusgitar2/b-moll-d-dur-1",
    component: () => import("./pages/ritmusgitar2/b-moll-d-dur-1.vue"),
  },
  {
    path: "/ritmusgitar2/b-moll-konnyitett",
    component: () => import("./pages/ritmusgitar2/b-moll-konnyitett.vue"),
  },
  {
    path: "/ritmusgitar2/f-dur-konnyitett",
    component: () => import("./pages/ritmusgitar2/f-dur-konnyitett.vue"),
  },
  {
    path: "/ritmusgitar2/f-dur-teljes",
    component: () => import("./pages/ritmusgitar2/f-dur-teljes.vue"),
  },
  {
    path: "/ritmusgitar2/b-moll-teljes",
    component: () => import("./pages/ritmusgitar2/b-moll-teljes.vue"),
  },
  {
    path: "/ritmusgitar2/hetes-akkordok",
    component: () => import("./pages/ritmusgitar2/hetes-akkordok.vue"),
  },

  {
    path: "/mobil-akkordok/barres-akkord",
    component: () => import("./pages/mobil-akkordok/barres-akkord.vue"),
  },
  {
    path: "/mobil-akkordok/formak",
    component: () => import("./pages/mobil-akkordok/formak.vue"),
  },
  {
    path: "/mobil-akkordok/power-chord",
    component: () => import("./pages/mobil-akkordok/power-chord.vue"),
  },
  {
    path: "/mobil-akkordok/melyik-akkordfajtat-hasznaljam",
    component: () =>
      import("./pages/mobil-akkordok/melyik-akkordfajtat-hasznaljam.vue"),
  },

  {
    path: "/hangzatfelbontas/hangzatfelbontas",
    component: () => import("./pages/hangzatfelbontas/hangzatfelbontas.vue"),
  },
  {
    path: "/hangzatfelbontas/altalanos-bontas",
    component: () => import("./pages/hangzatfelbontas/altalanos-bontas.vue"),
  },

  { path: "/riffek/riff", component: () => import("./pages/riffek/riff.vue") },
  {
    path: "/riffek/technikak",
    component: () => import("./pages/riffek/technikak.vue"),
  },
  {
    path: "/riffek/riff-gyakorlas",
    component: () => import("./pages/riffek/riff-gyakorlas.vue"),
  },

  {
    path: "/szolo/hogyan-tanulj-szolozni",
    component: () => import("./pages/szolo/hogyan-tanulj-szolozni.vue"),
  },
  {
    path: "/szolo/dur-skala-1",
    component: () => import("./pages/szolo/dur-skala-1.vue"),
  },
  {
    path: "/szolo/dur-skala-2",
    component: () => import("./pages/szolo/dur-skala-2.vue"),
  },
  {
    path: "/szolo/dur-skala-3",
    component: () => import("./pages/szolo/dur-skala-3.vue"),
  },
  {
    path: "/szolo/moll-skala",
    component: () => import("./pages/szolo/moll-skala.vue"),
  },
  {
    path: "/szolo/a-moll-skala",
    component: () => import("./pages/szolo/a-moll-skala.vue"),
  },
  {
    path: "/szolo/pentaton-skala",
    component: () => import("./pages/szolo/pentaton-skala.vue"),
  },
  {
    path: "/szolo/blues-skala",
    component: () => import("./pages/szolo/blues-skala.vue"),
  },
  {
    path: "/szolo/skalak-vizszintesen",
    component: () => import("./pages/szolo/skalak-vizszintesen.vue"),
  },

  {
    path: "/utravalo/transzponalas",
    component: () => import("./pages/utravalo/transzponalas.vue"),
  },
  {
    path: "/utravalo/hangnem",
    component: () => import("./pages/utravalo/hangnem.vue"),
  },
  {
    path: "/utravalo/kvintkor",
    component: () => import("./pages/utravalo/kvintkor.vue"),
  },
  {
    path: "/utravalo/proba",
    component: () => import("./pages/utravalo/proba.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
