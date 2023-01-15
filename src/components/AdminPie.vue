<script setup>
// import éléments utiles vue
import { reactive, ref, onMounted } from "vue";

//import fonction getCinemas
import { getAnniversaireDatas } from "@/components/serviceAjax.js";

// import fonctions couleur commonChart
import { densite } from "@/components/commonChart.js";

// import grapgique Pie
import { Pie } from "vue-chartjs";

// import objets graphique bibli chartjs
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale,
} from "chart.js";

// éléments utilisés pour graphique
ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale);
// couleurs de la légende + axes
ChartJS.defaults.color = "#d1d5db";

const propChart = defineProps({
  chartId: { type: String, default: "pie-chart" },
  datasetIdKey: { type: String, default: "label" },
  width: { type: Number, default: 400 },
  height: { type: Number, default: 400 },
  cssClasses: { type: String, default: "" },
  styles: { type: Object, default: () => {} },
  plugins: { type: Object, default: () => {} },
});

const chartData = reactive({
  // étiquette jeu données
  labels: [],

  datasets: [
    {
      label: "Films au total",
      data: [],
    },
  ],
});

//options du graphique
let chartOptions = reactive({
  //responsive graphique
  responsive: true,

  // plugins
  plugins: {
    //titre graphique
    title: {
      display: false,
      text: "Nombre de vote par UID",
      font: {
        size: 16,
      },
    },
    legend: {
      display: false,
    },
  },
});

let baseColor = ref();

//montage composant + chargement données
// la 'listeCinemas' contiendra le résultat de la requête
let listeCinemas = ref();

onMounted(async () => {
  await getAnniversaireDatas()
    .then((response) => {
      listeCinemas.value = new Array(response);
      //on vérifie dans la console obtention résultats
      console.log("response", listeCinemas.value);

      //chargement labels (axe des ordonnées)
      let setLabels = new Set();
      // parcours des valeurs, récupération REGION

      listeCinemas.value[0].records.forEach((el) => {
        setLabels.add(el.fields.region_administrative);
      });

      // transmission des valeurs du set aux labels
      chartData.labels = Array.from(setLabels);

      //
      // CHARGEMENT DONNEES
      //
      let cptProg = [];
      //let cptIned = [];

      // boucle pour comptage

      chartData.labels.forEach((label) => {
        // données parcours
        // compteurs labels
        let nbProg = 0;
        //let nbIned = 0;

        // parcours des valeurs
        listeCinemas.value[0].records.forEach((el) => {
          // si cest bon label
          if (label == el.fields.region_administrative) {
            nbProg += el.fields.nombre_de_films_programmes;
            // nbIned += el.fields.nombre_de_films_inedits;
          }
        });

        // mise à jour tableaux
        cptProg.push(nbProg);
        // cptIned.push(nbIned);
      });
      //chargmeent données dans graphique

      chartData.datasets[0].data = cptProg;
      // chartData.datasets[1].data = cptIned;

      //
      //
      // Mise en place densité couleur
      let bgColor = null;
      let bdColor = null;
      baseColor.value = "rgba(220,38,38,#deg#)";
      [bgColor, bdColor] = densite(baseColor.value, chartData.datasets[0].data);

      chartData.datasets[0].backgroundColor = bgColor;
      chartData.datasets[0].borderColor = bdColor;
      chartData.datasets[0].borderWidth = 1;
    })
    .catch((error) => console.log("erreur Ajax", error));
});
</script>

<template>
  <div class="bg-zinc-999 text-white w-full max-w-[300px] m-auto">
    <Pie
      :chart-options="chartOptions"
      :chart-data="chartData"
      :chart-id="chartId"
      :dataset-id-key="datasetIdKey"
      :plugins="plugins"
      :css-classes="cssClasses"
      :styles="styles"
      :width="width"
      :height="height"
    />
  </div>
</template>

<style scoped></style>
