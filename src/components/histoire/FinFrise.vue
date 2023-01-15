<script setup>
import LogoCadeau from "../icons/logoCadeau.vue";

function AnimationFinale() {
  let valueScroll = window.pageYOffset;
  let screenWidth = window.screen.width;
  // Text
  let textFinal = document.querySelector(".textFinal");

  textFinal.style.transform = "translate(0,-" + valueScroll / 10000 + "%)";
}

window.addEventListener("scroll", AnimationFinale);
</script>

<template>
  <h1 class="my-[100rem] text-white w-full text-center">La suite ?</h1>
  <h1 class="my-[100rem] text-white w-full text-center">
    Elle appartient aux prochains...
  </h1>
  <h1
    class="mmi my-[100rem] text-white w-full text-center text-9xl font-inter font-black"
  >
    MMI.
  </h1>
  <p class="text-center my-2 text-gray-600">Merci d'avoir lu et regardé.</p>
  <p class="text-center my-2 text-gray-600">L'équipe des 25 ans</p>
  <LogoCadeau class="fill-gray-600 m-auto w-8 h-8 mb-20" />
</template>

<style scoped>
.mmi {
  filter: drop-shadow(-2px 8px 0px #ffd600) drop-shadow(1px -4px 0px #bba7e7)
    drop-shadow(-8px 4px 0px #6dd678) drop-shadow(5px 4px 0px #e94e1b);
}
</style>
