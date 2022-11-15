<script setup>
import { RouterLink, RouterView } from "vue-router";

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
        'bg-vert': $route.name === 'dev',
        'bg-bleu': $route.name === 'design',
        'bg-black': $route.name === 'home',
      }"
    ></div>
    <div
      class="h-[2px] -z-50 line2 fixed rotate-[145deg] origin-[0] inset-y-0 inset-x-1/2"
      :class="{
        'bg-rouge': $route.name === 'com',
        'bg-vert': $route.name === 'dev',
        'bg-bleu': $route.name === 'design',
        'bg-black': $route.name === 'home',
      }"
    ></div>
    <div
      class="h-[2px] -z-50 line3 fixed rotate-[145deg] origin-[0] inset-y-1/2 inset-x-full"
      :class="{
        'bg-rouge': $route.name === 'com',
        'bg-vert': $route.name === 'dev',
        'bg-bleu': $route.name === 'design',
        'bg-black': $route.name === 'home',
      }"
    ></div>
  </section>
  <!--LINES DU FOND-->
  <!--LINES DU FOND-->
  <!--LINES DU FOND-->

  <div>
    <header>
      <HeaderView />
    </header>
    <router-view></router-view>
    <footer>
      <FooterView />
    </footer>
  </div>
</template>

<script>
import HeaderView from "../src/assets/components/Header.vue";
import FooterView from "../src/assets/components/Footer.vue";
</script>
