<script setup>
import an1997view from "@/components/histoire/an1997.vue";

function BlackScreen() {
  let valueScroll = window.pageYOffset;
  // Black screen
  let blackScreen = document.querySelector(".histoire-blackscreen");
  // Background modifiers
  let backgroundHistoire = document.querySelector(".histoire-background");

  // SCROLL 100
  if (valueScroll >= 100) {
    blackScreen.style.opacity = valueScroll / 5 + "%";
  } else {
    blackScreen.style.opacity = 0;
  }

  // SCROLL 450

  if (valueScroll >= 450) {
    backgroundHistoire.style.backgroundImage =
      "url('/images/histoire/space.jpg')";
  } else {
    backgroundHistoire.style.backgroundImage = "url('/')";
  }

  // scroll 600

  if (valueScroll >= 600) {
    blackScreen.style.opacity = 100 - valueScroll / 30 + "%";
  }
}

window.addEventListener("scroll", BlackScreen);
</script>

<template>
  <!--BACKGROUND OF PAGE-->
  <div
    class="histoire-background fixed h-screen w-full -z-[11] inset-0 bg-beige bg-contain bg-repeat"
  ></div>

  <!--ECRAN NOIR POUR EFFETS-->
  <div
    class="histoire-blackscreen fixed h-screen w-full bg-black z-[11] inset-0 opacity-0"
  ></div>
  <!--ECRAN NOIR POUR EFFETS-->

  <article class="flex justify-center items-center flex-col gap-[100rem]">
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
          class="font-normal mmi-texte text-center flex flex-col justify-center items-center gap-2"
        >
          <div>
            <div
              class="w-12 h-12 border-2 border-black rounded-full flex justify-center items-center"
            >
              <div class="w-8 h-8 bg-black rounded-full"></div>
            </div>
          </div>
          <p class="text-black">scroll&nbsp;⮟ to&nbsp;begin...</p>
        </section>
        <!--bounce-->
      </div>
    </section>
    <!--SECTION D'INTRO-->
    <!--SECTION 1997-->
    <div>
      <an1997view></an1997view>
    </div>
    <!--SECTION 1997-->
  </article>
</template>
