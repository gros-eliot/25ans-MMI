<script setup>
import VagueAnimation from "@/components/visuel/VagueAnimation.vue";

function ScreenBlack() {
  let backgroundChange = document.querySelector(".backgroundChange");
  let valueScroll = window.pageXOffset;
  backgroundChange.style.backgroundColor = rgb(
    255 - valueScroll / 10,
    255 - valueScroll / 10,
    255 - valueScroll / 10
  );
}
</script>

<template onscroll="ScreenBlack()">
  <!--BALISE "article" == balise ultime de la frise (qui controle l'affichage, parametres de la fenetre)-->
  <article
    class="maskscrollbar backgroundChange inset-0 absolute w-full h-screen flex justify-start items-center overflow-y-hidden overflow-x-scroll overflow-visible -z-10"
  >
    <!--SECTION D'INTRO-->

    <div
      class="z-50 flex flex-col text-white md:flex-row gap-5 md:gap-20 justify-center items-center p-2 md:p-8 md:mr-20"
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
    <div class="m-0">
      <VagueAnimation class="h-screen min-w-full" />
    </div>
    <div class="m-0 bg-black min-w-full w-[1000%] h-screen"></div>

    <!--SECTION D'INTRO-->
    <div class="h-2 w-full fixed bg-beige z-10"></div>

    <!--SECTION 1997-->
    <div>Salut</div>
    <!--SECTION 1997-->
  </article>

  <!--ECRAN NOIR POUR EFFETS-->
  <div class="fixed h-screen w-full bg-black -z-[11] inset-0 opacity-0"></div>
  <!--ECRAN NOIR POUR EFFETS-->
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
