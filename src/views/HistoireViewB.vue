<script setup>
import An1991 from "@/components/histoire/an1991.vue";
import An1997 from "@/components/histoire/an1997.vue";
import mouseIcon from "@/components/histoire/components/mouseIcon.vue";
import An1998 from "../components/histoire/an1998.vue";

function BlackScreen() {
  let valueScroll = window.pageYOffset;
  // Black screen
  let blackScreen = document.querySelector(".histoire-blackscreen");
  // Background modifiers
  let backgroundHistoire = document.querySelector(".histoire-background");

  // BLACKSCREEN  // BLACKSCREEN  // BLACKSCREEN  // BLACKSCREEN  // BLACKSCREEN  // BLACKSCREEN  // BLACKSCREEN
  // BLACKSCREEN  // BLACKSCREEN  // BLACKSCREEN  // BLACKSCREEN  // BLACKSCREEN  // BLACKSCREEN  // BLACKSCREEN
  // BLACKSCREEN  // BLACKSCREEN  // BLACKSCREEN  // BLACKSCREEN  // BLACKSCREEN  // BLACKSCREEN  // BLACKSCREEN
  // BLACKSCREEN  // BLACKSCREEN  // BLACKSCREEN  // BLACKSCREEN  // BLACKSCREEN  // BLACKSCREEN  // BLACKSCREEN

  // pas de blackscreen au début
  if (valueScroll >= 0) {
    blackScreen.style.display = "none";
    blackScreen.style.opacity = 0;
  }

  // FONDU IN (histoire-1991)

  if (valueScroll >= 100) {
    blackScreen.style.display = "block";
    blackScreen.style.opacity = "20%";
  }
  if (valueScroll >= 200) {
    blackScreen.style.opacity = "40%";
  }
  if (valueScroll >= 300) {
    blackScreen.style.opacity = "60%";
  }
  if (valueScroll >= 400) {
    blackScreen.style.opacity = "80%";
  }
  if (valueScroll >= 500) {
    blackScreen.style.opacity = "100%";
  }

  //00 - FONDU OUT (1991)

  if (valueScroll >= 900) {
    blackScreen.style.opacity = "80%";
  }
  if (valueScroll >= 1000) {
    blackScreen.style.opacity = "60%";
  }
  if (valueScroll >= 1100) {
    blackScreen.style.display = "40%";
  }
  if (valueScroll >= 1100) {
    blackScreen.style.display = "20%";
  }
  if (valueScroll >= 1100) {
    blackScreen.style.display = "0%";
    blackScreen.style.display = "none";
  }

  // - FONDU IN (1991-1997)

  if (valueScroll >= 1800) {
    blackScreen.style.display = "block";
    blackScreen.style.opacity = "20%";
  }
  if (valueScroll >= 1900) {
    blackScreen.style.opacity = "40%";
  }
  if (valueScroll >= 2000) {
    blackScreen.style.opacity = "60%";
  }
  if (valueScroll >= 2100) {
    blackScreen.style.opacity = "80%";
  }
  if (valueScroll >= 2200) {
    blackScreen.style.opacity = "100%";
  }

  // - FONDU OUT (1997)

  if (valueScroll >= 2400) {
    blackScreen.style.opacity = "80%";
  }
  if (valueScroll >= 2500) {
    blackScreen.style.opacity = "60%";
  }
  if (valueScroll >= 2600) {
    blackScreen.style.opacity = 0;
  }
  if (valueScroll >= 2700) {
    blackScreen.style.opacity = 0;
  }
  if (valueScroll >= 2800) {
    blackScreen.style.opacity = 0;
    blackScreen.style.display = "none";
  }

  //000 - FONDU IN

  if (valueScroll >= 5000) {
    blackScreen.style.display = "block";
    blackScreen.style.opacity = "20%";
  }
  if (valueScroll >= 5100) {
    blackScreen.style.opacity = "40%";
  }
  if (valueScroll >= 5200) {
    blackScreen.style.opacity = "60%";
  }
  if (valueScroll >= 5300) {
    blackScreen.style.opacity = "80%";
  }
  if (valueScroll >= 5400) {
    blackScreen.style.opacity = "100%";
  }

  //700 - FONDU OUT

  if (valueScroll >= 5700) {
    blackScreen.style.opacity = "100%";
  }
  if (valueScroll >= 5800) {
    blackScreen.style.opacity = "80%";
  }
  if (valueScroll >= 5900) {
    blackScreen.style.opacity = "60%";
  }
  if (valueScroll >= 6000) {
    blackScreen.style.opacity = "40%";
  }
  if (valueScroll >= 6100) {
    blackScreen.style.opacity = "20%";
  }

  if (valueScroll >= 6200) {
    blackScreen.style.opacity = 0;
    blackScreen.style.display = "none";
  }

  // BACKGROUND IMAGE  // BACKGROUND IMAGE  // BACKGROUND IMAGE  // BACKGROUND IMAGE  // BACKGROUND IMAGE  // BACKGROUND IMAGE
  // BACKGROUND IMAGE  // BACKGROUND IMAGE  // BACKGROUND IMAGE  // BACKGROUND IMAGE  // BACKGROUND IMAGE  // BACKGROUND IMAGE
  // BACKGROUND IMAGE  // BACKGROUND IMAGE  // BACKGROUND IMAGE  // BACKGROUND IMAGE  // BACKGROUND IMAGE  // BACKGROUND IMAGE
  // BACKGROUND IMAGE  // BACKGROUND IMAGE  // BACKGROUND IMAGE  // BACKGROUND IMAGE  // BACKGROUND IMAGE  // BACKGROUND IMAGE
  // BACKGROUND IMAGE  // BACKGROUND IMAGE  // BACKGROUND IMAGE  // BACKGROUND IMAGE  // BACKGROUND IMAGE  // BACKGROUND IMAGE
  //
  if (valueScroll >= 0) {
    backgroundHistoire.style.backgroundImage = "url('')";
    backgroundHistoire.style.backgroundColor = "rgb(255 254 246)";
  }
  //
  if (valueScroll >= 500) {
    backgroundHistoire.style.backgroundImage =
      "url('/images/histoire/prehistoric 2.jpg')";
    backgroundHistoire.style.backgroundPosition = "center";
  }
  //
  if (valueScroll >= 2100) {
    backgroundHistoire.style.backgroundImage = "url('')";
    backgroundHistoire.style.backgroundColor = "black";
  }
  //
  if (valueScroll >= 5800) {
    backgroundHistoire.style.backgroundImage = "url('')";
    backgroundHistoire.style.backgroundColor = "beige";
  }
}

window.addEventListener("scroll", BlackScreen);
</script>

<template>
  <!--BACKGROUND OF PAGE-->
  <div
    class="histoire-background fixed h-screen w-full -z-[20] inset-0 bg-beige bg-cover bg-origin-padding"
  ></div>

  <!--ECRAN NOIR POUR EFFETS-->
  <div
    class="histoire-blackscreen fixed h-screen w-full bg-black z-[4] inset-0 opacity-0"
  ></div>
  <!--ECRAN NOIR POUR EFFETS-->

  <article class="flex justify-center items-center flex-col gap-[50rem]">
    <!--SECTION D'INTRO-->
    <section
      class="histoire-defilement w-full h-screen flex justify-center items-center"
    >
      <div
        class="flex flex-col text-white md:flex-row gap-5 md:gap-20 text-center md:text-start justify-center items-center p-2"
      >
        <div class="flex flex-col uppercase invert">
          <h1 class="mmi-h1">L'histoire</h1>
          <p>Du département MMI</p>
        </div>
        <!--bounce-->
        <section
          class="font-normal mmi-texte text-center flex flex-col justify-center items-center gap-2 animate-bounce"
        >
          <mouseIcon class="w-12 h-12 stroke-black"></mouseIcon>

          <!--
            ANCIEN ICON (DOUBLE CERCLE)
          <div>
            <div
              class="w-12 h-12 border-2 border-black rounded-full flex justify-center items-center"
            >
              <div class="w-8 h-8 bg-black rounded-full"></div>
            </div>
          </div>-->

          <p class="text-black">scroll to&nbsp;begin...</p>
        </section>
        <!--bounce-->
      </div>
    </section>
    <!--SECTION D'INTRO-->

    <!--SECTION 1991-->
    <!--SECTION 1991-->
    <!--SECTION 1991-->
    <div class="w-full bg-beige flex justify-center items-center py-10">
      <An1991></An1991>
    </div>
    <!--SECTION 1991-->

    <!--SECTION 1997-->
    <!--SECTION 1997-->
    <!--SECTION 1997-->
    <div class="mt-[40rem]">
      <An1997 class="pt-20"></An1997>
    </div>
    <!--SECTION 1997-->

    <!--SECTION 97-98-->
    <!--SECTION 97-98-->
    <!--SECTION 97-98-->
    <div class="mt-80">
      <An1998 class="pt-20" />
    </div>
  </article>
</template>
<style></style>
