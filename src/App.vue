<script setup>
import { RouterLink, RouterView } from "vue-router";
import BatimentMMI from "@/components/BatimentMMI.vue";
import HeaderView from "@/components/Header.vue";
import FooterView from "@/components/Footer.vue";
import MiniBatimentMMI from "./components/MiniBatimentMMI.vue";
import Arrow from "./components/icons/arrow.vue";

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

function goToTopAppears() {
  let goToTopButton = document.querySelector(".gototop-element");
  let valueScroll = window.pageYOffset;
  if (valueScroll >= 500) {
    goToTopButton.style.opacity = valueScroll / 10 + "%";
    goToTopButton.style.display = "block";
  } else {
    goToTopButton.style.opacity = 0;
  }
}

window.addEventListener("scroll", FunctionLine);
window.addEventListener("scroll", FunctionLine2);
window.addEventListener("scroll", FunctionLine3);
window.addEventListener("scroll", goToTopAppears);
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

  <a href="#top" class="gototop-element opacity-0 hidden">
    <button
      class="fixed z-50 w-fit h-fit inset-y-[85%] inset-x-[85%] text-black bg-beige border border-black rounded-full md:p-4 p-2"
      v-if="$route.name === 'histoire-b'"
    >
      <Arrow class="fill-black w-4 h-4 md:w-8 md:h-8" />
    </button>
  </a>
</template>
