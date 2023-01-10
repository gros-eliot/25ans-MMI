<script setup>
import an1991view from "@/components/histoire/an1991.vue";
import an1997view from "@/components/histoire/an1997.vue";

function BlackScreen() {
  let valueScroll = window.pageYOffset;
  // Black screen
  let blackScreen = document.querySelector(".histoire-blackscreen");
  // Background modifiers
  let backgroundHistoire = document.querySelector(".histoire-background");

  //
  // BLACKSCREEN
  //
  // SCROLL 0
  if (valueScroll >= 0) {
    blackScreen.style.opacity = 0;
  }

  // SCROLL 100 - FONDU IN
  if (valueScroll >= 100) {
    blackScreen.style.opacity = valueScroll / 5 + "%";
  }

  // scroll 600 - FONDU OUT

  if (valueScroll >= 600) {
    blackScreen.style.opacity = 100 - valueScroll / 10 + "%";
  }

  // scroll 1800 - FONDU IN

  if (valueScroll >= 1600) {
    blackScreen.style.opacity = 10 + valueScroll / 25 + "%";
  }

  // scroll 1800 - FONDU OUT

  if (valueScroll >= 2300) {
    blackScreen.style.opacity = 100 - valueScroll / 25 + "%";
  }

  //
  // BACKGROUND IMAGE
  //

  if (valueScroll >= 0) {
    backgroundHistoire.style.backgroundImage = "url('')";
  }

  // SCROLL 450

  if (valueScroll >= 450) {
    backgroundHistoire.style.backgroundImage =
      "linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.1) 50%, rgba(0, 0, 0, 0.4) 100%),url('/images/histoire/prehistoric.jpg')";
    backgroundHistoire.style.backgroundPosition = "bottom";
  }

  // SCROLL 2400

  if (valueScroll >= 2000) {
    backgroundHistoire.style.backgroundImage =
      "linear-gradient(0deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.2) 50%, rgba(0, 0, 0, 0.7) 100%),url('/images/histoire/space.jpg')";
    backgroundHistoire.style.filter = "blur(0px)";
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
    <!--SECTION 1991-->
    <div class="w-full bg-white flex justify-center items-center py-10">
      <an1991view></an1991view>
    </div>
    <!--SECTION 1991-->

    <!--SECTION 1997-->
    <div>
      <an1997view></an1997view>
    </div>
    <!--SECTION 1997-->
  </article>
</template>
