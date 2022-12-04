<script setup>
import { RouterLink, RouterView } from "vue-router";

import { ref } from "vue";

import CadeauIllustrationTop from "../components/CadeauIllustrationTop.vue";
import CadeauIllustrationBot from "../components/CadeauIllustrationBot.vue";

import { useRouter } from "vue-router";
const router = useRouter();

let openedGift = ref(false);

function RouterPush() {
  router.push("/home");
}
function GiftFunction() {
  let Clicked = document.querySelector(".testeurRouteName");
  if ((Clicked.style.width = 1)) {
    openedGift.value = true;
    setTimeout(RouterPush, 1000);
  } else {
    console.log("");
  }
}
window.addEventListener("click", GiftFunction);
</script>

<template>
  <p class="w-0 testeurRouteName" :class="{ 'w-1': $route.name === 'cadeau' }">
    <!--TEST-->
  </p>

  <section
    class="w-full h-screen absolute bg-beige opacity-0"
    :class="{
      transitionFinale: openedGift === true,
    }"
  ></section>
  <section
    class="w-full h-screen flex justify-center items-center text-4xl md:text-6xl font-bold"
  >
    <div class="w-fit flex flex-col items-center justify-center gap-10">
      <div class="w-40 flex flex-col items-center justify-center gap-0">
        <CadeauIllustrationTop
          class="z-20"
          :class="{
            openedGiftClass: openedGift === true,
            closedGiftClass: openedGift === false,
          }"
        />
        <CadeauIllustrationBot class="-mt-4 bg-beige z-10" />
      </div>
      <div
        class="opacity-0 h-2 w-10 bg-vert rounded-lg absolute"
        :class="{
          confetti1: openedGift === true,
        }"
      ></div>
      <div
        class="opacity-0 h-2 w-8 bg-bleu rounded-lg absolute"
        :class="{
          confetti2: openedGift === true,
        }"
      ></div>
      <div
        class="opacity-0 h-4 w-12 bg-jaune rounded-lg absolute"
        :class="{
          confetti3: openedGift === true,
        }"
      ></div>
      <div
        class="opacity-0 h-2 w-14 bg-rouge rounded-lg absolute"
        :class="{
          confetti4: openedGift === true,
        }"
      ></div>
      <div
        class="opacity-0 h-3 w-14 mt-36 bg-bleu rounded-lg absolute"
        :class="{
          confetti3: openedGift === true,
        }"
      ></div>
      <div
        class="opacity-0 h-2 w-5 mt-32 bg-vert rounded-lg absolute"
        :class="{
          confetti2: openedGift === true,
        }"
      ></div>
      <div
        class="opacity-0 h-4 w-12 mt-96 bg-jaune rounded-lg absolute"
        :class="{
          confetti4: openedGift === true,
        }"
      ></div>
      <div
        class="opacity-0 h-2 w-14 mt-56 bg-bleu rounded-lg absolute"
        :class="{
          confetti5: openedGift === true,
        }"
      ></div>
      <p :class="{ hidden: openedGift === true }">- Cliquer -</p>
    </div>
  </section>
</template>
<style scoped>
.openedGiftClass {
  rotate: 145deg;
  transform: translate(-80%, -140%);
  transform-origin: center;
  transition: 0.2s ease-in-out;
}

.closedGiftClass {
  rotate: 0deg;
  transform: translate(0, 0);
  transform-origin: center;
  transition: 0.2s ease-in-out;
}

.confetti1 {
  rotate: 60deg;
  transform: translate(-220px, 0);
  opacity: 100%;
  transition: 0.2s ease-in-out;
}

.confetti2 {
  rotate: 45deg;
  transform: translate(-180px, 0);
  opacity: 100%;
  transition: 0.2s ease-in-out;
}

.confetti3 {
  rotate: 130deg;
  transform: translate(-180px, 0);
  opacity: 100%;
  transition: 0.2s ease-in-out;
}

.confetti4 {
  rotate: 100deg;
  transform: translate(-220px, 0);
  opacity: 100%;
  transition: 0.2s ease-in-out;
}
.confetti5 {
  rotate: 80deg;
  transform: translate(-220px, 0);
  opacity: 100%;
  transition: 0.2s ease-in-out;
}

.transitionFinale {
  z-index: 50;
  opacity: 100%;
  transition: 1s ease;
}
</style>
