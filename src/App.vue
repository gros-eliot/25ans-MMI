<script setup>
import { RouterLink, RouterView } from "vue-router";
import BatimentMMI from "@/components/BatimentMMI.vue";
import HeaderView from "@/components/Header.vue";
import FooterView from "@/components/Footer.vue";
import MiniBatimentMMI from "./components/MiniBatimentMMI.vue";
import Arrow from "./components/icons/arrow.vue";

// lignes qui bougent en background
function FunctionLine() {
  let movingLine = document.querySelector(".line");
  let valueScroll = window.pageYOffset;
  movingLine.style.width = valueScroll / 20 + "%";
}
function FunctionLine2() {
  let movingLine = document.querySelector(".line2");
  let valueScroll = window.pageYOffset;
  movingLine.style.width = valueScroll / 20 + "%";
}
function FunctionLine3() {
  let movingLine = document.querySelector(".line3");
  let valueScroll = window.pageYOffset;
  movingLine.style.width = valueScroll / 20 + "%";
}

//
//
//
//
let historyDateDoc;
// function page histoire
function histoire() {
  // date changeante selon scroll
  let historyDate;
  let valueScroll = window.pageYOffset;

  if (valueScroll >= 600) {
    historyDate = 0;
    historyDate = historyDate + 1991;
    historyDateDoc.push(historyDate);
  }

  // modification du bouton retour en haut de page (page histoire)
  let goToTopButton = document.querySelector(".gototop-element");
  if (valueScroll >= 500) {
    goToTopButton.style.opacity = valueScroll / 9 + "%";
    goToTopButton.style.display = "block";
  } else {
    goToTopButton.style.opacity = 0;
  }

  // modification de la timeline + date en haut à droite (page histoire)
  let TimeLine = document.querySelector(".timeline-element");
  let dateHistoire = document.querySelector(".histoire-date-haut-droite");
  if (valueScroll >= 500 && valueScroll < 1000) {
    TimeLine.style.display = "block";
    dateHistoire.style.display = "block";
  }
  if (valueScroll > 0 && valueScroll < 500) {
    TimeLine.style.display = "none";
    dateHistoire.style.display = "none";
  }

  if (valueScroll >= 500) {
    TimeLine.style.opacity = "10%";
    dateHistoire.style.opacity = "10%";
  }
  if (valueScroll >= 800) {
    TimeLine.style.opacity = "20%";
    dateHistoire.style.opacity = "40%";
  }
  if (valueScroll >= 1000) {
    TimeLine.style.opacity = "30%";
    dateHistoire.style.opacity = "70%";
  }
  if (valueScroll >= 1400) {
    TimeLine.style.opacity = "40%";
    dateHistoire.style.opacity = "100%";
  }
  if (valueScroll >= 1800) {
    TimeLine.style.opacity = "50%";
  }
}

//
//
//
//
//
// lignes qui bougent en background
window.addEventListener("scroll", FunctionLine);
window.addEventListener("scroll", FunctionLine2);
window.addEventListener("scroll", FunctionLine3);

// function page histoire
window.addEventListener("scroll", histoire);

function AlertScroll() {
  let valueScroll = window.pageYOffset;
  alert(valueScroll);
}

//
//
//
//
//

// fonction date changeante
</script>

<template>
  <!--LINES DU FOND-->
  <!--LINES DU FOND-->
  <!--LINES DU FOND-->
  <section v-if="$route.name != 'cadeau'">
    <div
      class="h-[2px] -z-50 line fixed rotate-45 origin-[0] inset-y-10 w-0"
      :class="{
        'bg-rouge': $route.name === 'com',
        'bg-vert': $route.name === 'dev',
        'bg-bleu': $route.name === 'crea',
        'bg-black':
          ($route.name === 'home')
          | ($route.name === 'connexion')
          | ($route.name === 'contact')
          | ($route.name === 'mentionslegales'),
        'opacity-10':
          ($route.name === 'home')
          | ($route.name === 'connexion')
          | ($route.name === 'contact')
          | ($route.name === 'mentionslegales'),
        'opacity-30': $route.name != 'home',
      }"
    ></div>
    <div
      class="h-[2px] -z-50 line2 fixed rotate-[145deg] origin-[0] w-0 inset-y-0 inset-x-1/4"
      :class="{
        'bg-rouge': $route.name === 'com',
        'bg-vert': $route.name === 'dev',
        'bg-bleu': $route.name === 'crea',
        'bg-black':
          ($route.name === 'home')
          | ($route.name === 'connexion')
          | ($route.name === 'contact')
          | ($route.name === 'mentionslegales'),
        'opacity-10':
          ($route.name === 'home')
          | ($route.name === 'connexion')
          | ($route.name === 'contact')
          | ($route.name === 'mentionslegales'),
        'opacity-30': $route.name != 'home',
      }"
    ></div>
    <div
      class="h-[2px] -z-50 line3 fixed rotate-[145deg] origin-[0] w-0 inset-y-1/2 inset-x-full"
      :class="{
        'bg-rouge': $route.name === 'com',
        'bg-vert': $route.name === 'dev',
        'bg-bleu': $route.name === 'crea',
        'bg-black':
          ($route.name === 'home')
          | ($route.name === 'connexion')
          | ($route.name === 'contact')
          | ($route.name === 'mentionslegales'),
        'opacity-10':
          ($route.name === 'home')
          | ($route.name === 'connexion')
          | ($route.name === 'contact')
          | ($route.name === 'mentionslegales'),
        'opacity-30': $route.name != 'home',
      }"
    ></div>
  </section>
  <!--LINES DU FOND-->
  <!--LINES DU FOND-->
  <!--LINES DU FOND-->

  <!--Header-->
  <header v-if="$route.name != 'cadeau'" class="z-[80]" id="top">
    <HeaderView />
  </header>

  <!--TITRES AU DESSUS DU BATIMENT-->
  <div class="mmi-h1 flex justify-center text-center">
    <h1
      class="uppercase text-center py-2 mmi-h1"
      :class="{
        hidden: $route.name != 'home',
      }"
    >
      Le plan
    </h1>
    <h1
      class="uppercase text-center py-2 mmi-h1"
      :class="{
        hidden: $route.name != 'com',
      }"
    >
      La salle com'
    </h1>
    <h1
      class="uppercase text-center py-2 mmi-h1"
      :class="{
        hidden: $route.name != 'dev',
      }"
    >
      La salle dev'
    </h1>
    <h1
      class="uppercase text-center py-2 mmi-h1"
      :class="{
        hidden: $route.name != 'crea',
      }"
    >
      La salle créa'
    </h1>
    <h1
      class="uppercase text-center py-2 mmi-h1"
      :class="{
        hidden: $route.name != 'secret',
      }"
    >
      La salle secrète
    </h1>
    <h1
      class="uppercase text-center py-2 mmi-h1"
      :class="{
        hidden: $route.name != 'event',
      }"
    >
      Évènement 25 ans MMI
    </h1>
    <h1
      class="uppercase text-center py-2 mmi-h1"
      :class="{
        hidden: $route.name != 'mentionslegales',
      }"
    >
      Mentions légales
    </h1>
  </div>

  <!--Batiment MMI : ordi-->
  <BatimentMMI
    class="my-10 m-auto w-fit md:block hidden"
    v-if="
      ($route.name === 'home') |
        ($route.name === 'event') |
        ($route.name === 'com') |
        ($route.name === 'dev') |
        ($route.name === 'crea') |
        ($route.name === 'secret')
    "
  />

  <MiniBatimentMMI
    class="my-10 m-auto w-fit block md:hidden"
    v-if="
      ($route.name === 'home') |
        ($route.name === 'event') |
        ($route.name === 'com') |
        ($route.name === 'dev') |
        ($route.name === 'crea') |
        ($route.name === 'secret')
    "
  />

  <router-view></router-view>
  <footer
    v-if="
      $route.name != 'cadeau' &&
      $route.name != 'histoire' &&
      $route.name != 'histoire-b'
    "
  >
    <FooterView />
  </footer>

  <!--HISTOIRE - bouton pr remonter en haut de la page histoire-->
  <a
    href="#top"
    class="gototop-element opacity-0 hidden"
    v-if="$route.name === 'histoire-b'"
  >
    <button
      class="fixed z-50 w-fit h-fit inset-y-[85%] inset-x-[85%] text-black bg-beige border border-black rounded-full md:p-4 p-2"
    >
      <Arrow class="fill-black w-4 h-4 md:w-8 md:h-8" />
    </button>
  </a>
  <!--HISTOIRE - bouton pr remonter en haut de la page histoire-->

  <!--HISTOIRE - texte indiquant l'année-->
  <p
    class="fixed inset-y-[5%] inset-x-[90%] text-white z-[99] text-sm histoire-date-haut-droite"
    v-if="$route.name === 'histoire-b'"
  >
    {{ historyDateDoc }}
  </p>
  <!--HISTOIRE - texte indiquant l'année-->

  <!--Frise line (pour page histoire)-->
  <div
    class="timeline-element opacity-50 hidden fixed w-3 h-screen inset-x-1 md:inset-x-5 inset-y-0 bg-beige border-black border-x z-[11]"
    v-if="$route.name === 'histoire-b'"
  ></div>

  <!--DEBOGAGE BUTTON === used to know the scroll(Y) value.-->
  <!--DEBOGAGE BUTTON === used to know the scroll(Y) value.-->
  <button
    class="bg-red-500 text-black fixed w-fit h-fit p-1 inset-0 z-50 text-[3px]"
    @click="AlertScroll"
  >
    Scroll
  </button>
</template>
