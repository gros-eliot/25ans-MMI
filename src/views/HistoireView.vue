<script setup>
import an1997View from "@/components/histoire/an1997.vue";
import VagueAnimation from "@/components/visuel/VagueAnimation.vue";

function defilementArticle() {
  let valueScroll = window.pageYOffset;

  // ARTICLE SUIT LE SCROLL
  let defilerArticle = document.querySelector(".histoire-defilement");
  defilerArticle.style.transform = `translate(-${valueScroll * 2}px,0)`;

  // Background modifiers
  let backgroundHistoire = document.querySelector(".histoire-background");

  // Black screen
  let blackScreen = document.querySelector(".histoire-blackscreen");

  // VUES POUR CHAQUE ANNEE
  let an1997View = document.querySelector(".an1997view");

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

  // SCROLL 900

  if (valueScroll >= 900) {
    blackScreen.style.opacity = 100 - valueScroll / 30 + "%";
  } else {
    backgroundHistoire.style.backgroundImage = "url('/')";
  }

  // scroll 1000
  if (valueScroll > 1500 && valueScroll < 10000) {
    an1997View.style.opacity = valueScroll / 30 + "%";
  } else {
    an1997View.style.opacity = 0;
  }
}

window.addEventListener("scroll", defilementArticle);
</script>

<template>
  <!--ELEMENT QUI PERMET LE SCROLL Y-->
  <div class="histoire-scrolling -z-50 bg-transparent h-[10000px] w-1"></div>

  <!--BACKGROUND OF PAGE-->
  <div
    class="histoire-background fixed h-screen w-full -z-[11] inset-0 bg-beige bg-contain bg-repeat"
  ></div>

  <!--ECRAN NOIR POUR EFFETS-->
  <div
    class="histoire-blackscreen fixed h-screen w-full bg-black z-[11] inset-0 opacity-0"
  ></div>

  <!--BALISE "article" == balise ultime de la frise (qui controle l'affichage, parametres de la fenetre)-->
  <article
    class="histoire-defilement inset-0 fixed w-fit h-screen flex justify-start items-center -z-10"
  >
    <!--SECTION D'INTRO-->

    <div
      class="z-50 flex flex-col text-white md:flex-row gap-5 md:gap-20 text-center md:text-start justify-center items-center p-2 md:p-8 md:mr-20"
    >
      <div class="flex flex-col uppercase invert">
        <h1 class="mmi-h1">L'histoire</h1>
        <p>Du département MMI</p>
      </div>
      <div
        class="font-normal mmi-texte text-center flex flex-col justify-center items-center gap-2"
      >
        <div>
          <div
            class="w-12 h-12 border-2 border-black rounded-full flex justify-center items-center"
          >
            <div class="w-8 h-8 bg-black rounded-full"></div>
          </div>
        </div>
        <p class="invert">scroll&nbsp;➤ to&nbsp;begin...</p>
      </div>
    </div>
    <!--SECTION D'INTRO-->
  </article>
  <an1997View
    class="an1997view fixed inset-x-1/2 inset-y-0 opacity-0 z-20 w-full"
  ></an1997View>
</template>

<style scoped>
/* width */
::-webkit-scrollbar {
  height: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: rgb(255 254 246);
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: black;
  border-radius: 2px;
}
</style>
