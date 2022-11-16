<script setup>
import { RouterLink, RouterView } from "vue-router";
import BatimentMMI from "@/components/BatimentMMI.vue";

function FunctionLine() {
  let movingLine = document.querySelector(".line");
  let valueScroll = window.pageYOffset;
  movingLine.style.width = valueScroll / 6 + "%";
}
function FunctionLine2() {
  let movingLine = document.querySelector(".line2");
  let valueScroll = window.pageYOffset;
  movingLine.style.width = valueScroll / 6 + "%";
}
function FunctionLine3() {
  let movingLine = document.querySelector(".line3");
  let valueScroll = window.pageYOffset;
  movingLine.style.width = valueScroll / 6 + "%";
}

window.addEventListener("scroll", FunctionLine);
window.addEventListener("scroll", FunctionLine2);
window.addEventListener("scroll", FunctionLine3);
</script>

<template>
  <!--LINES DU FOND-->
  <!--LINES DU FOND-->
  <!--LINES DU FOND-->
  <section>
    <div
      class="h-[2px] -z-50 line fixed rotate-45 origin-[0] inset-y-10"
      :class="{
        'bg-rouge': $route.name === 'com',
        'opacity-40': $route.name === 'com',
        'bg-vert': $route.name === 'dev',
        'opacity-10': $route.name === 'dev',
        'bg-bleu': $route.name === 'design',
        'opacity-10': $route.name === 'design',
        'bg-black': $route.name === 'home',
        'opacity-10': $route.name === 'home',
      }"
    ></div>
    <div
      class="h-[2px] -z-50 line2 fixed rotate-[145deg] origin-[0] inset-y-0 inset-x-1/2"
      :class="{
        'bg-rouge': $route.name === 'com',
        'opacity-40': $route.name === 'com',
        'bg-vert': $route.name === 'dev',
        'opacity-10': $route.name === 'dev',
        'bg-bleu': $route.name === 'design',
        'opacity-10': $route.name === 'design',
        'bg-black': $route.name === 'home',
        'opacity-10': $route.name === 'home',
      }"
    ></div>
    <div
      class="h-[2px] -z-50 line3 fixed rotate-[145deg] origin-[0] inset-y-1/2 inset-x-full"
      :class="{
        'bg-rouge': $route.name === 'com',
        'bg-vert': $route.name === 'dev',
        'bg-bleu': $route.name === 'design',
        'bg-black': $route.name === 'home',
        'opacity-10': $route.name === 'home',
        'opacity-40': $route.name != 'home',
      }"
    ></div>
  </section>
  <!--LINES DU FOND-->
  <!--LINES DU FOND-->
  <!--LINES DU FOND-->

  <header>
    <HeaderView />
  </header>

  <h1
    class="uppercase ml-auto py-2 flex"
    :class="{
      hidden:
        ($route.name === 'com')
        | ($route.name === 'crea')
        | ($route.name === 'dev')
        | ($route.name === 'design')
        | ($route.name === 'histoire')
        | ($route.name === 'secret')
        | ($route.name === 'contact')
        | ($route.name === 'connexion')
        | ($route.name === 'event')
        | ($route.name === '')
        | ($route.name === 'mentionslegales'),
    }"
  >
    Le plan
  </h1>
  <h1
    class="uppercase ml-auto py-2 hidden"
    :class="{ flex: $route.name === 'com' }"
  >
    La salle com'
  </h1>
  <h1
    class="uppercase ml-auto py-2 hidden"
    :class="{ flex: $route.name === 'dev' }"
  >
    La salle dev'
  </h1>
  <h1
    class="uppercase ml-auto py-2 hidden"
    :class="{ flex: $route.name === 'crea' }"
  >
    La salle créa'
  </h1>
  <h1
    class="uppercase ml-auto py-2 hidden"
    :class="{ flex: $route.name === 'secrete' }"
  >
    La salle secrète
  </h1>

  <BatimentMMI class="m-auto" />

  <router-view></router-view>
  <footer>
    <FooterView />
  </footer>
</template>

<script>
import HeaderView from "@/components/Header.vue";
import FooterView from "@/components/Footer.vue";
</script>
