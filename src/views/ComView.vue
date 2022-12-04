<script setup>
import { ref } from "vue";
let clickedImage = ref(false);
</script>

<template>
  <article class="m-5 md:m-10">
    <!--OEUVRES-->
    <section></section>
    <!--Partie textuelle-->
    <!--Partie textuelle-->
    <!--Partie textuelle-->
    <!--Partie textuelle-->
    <section class="max-w-5xl">
      <h2 class="mmi-h2 text-center lg:text-left">La com' au MMI</h2>
      <p>
        Le pôle communication de MMI fait partie des trois grandes thématiques
        qu’aborde MMI dans son cursus. La communication est très importante dans
        le milieu du web car elle permet aux différents projets de vivre et de
        se faire une place dans les esprits. De plus, la communication régie
        toutes les parties qui précèdent le lancement d’un projet comme des
        analyses concurrentielles ou la gestion du budget.
      </p>
    </section>

    <!--2525252525-->
    <div class="ml-auto w-full md:w-fit text-5xl md:text-8xl my-10">
      <div class="flex-col flex max-w-xl w-full boxDefilementText">
        <p class="font-thin object1">
          252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525
        </p>
        <p class="font-thin object2">
          252525252525<strong class="font-bold">25</strong
          >25252525252525252525252525252525252525252525252525252525252525
        </p>
        <p class="font-thin object3">
          252525252525252525252525252525252525252525252525252525252525252525252525
        </p>
      </div>
    </div>
    <!--2525252525-->
  </article>
  <!--Prof principal : M. MALSOT-->
  <div
    class="flex flex-col lg:flex-row justify-center items-center gap-10 w-full bg-black text-white px-5 py-10"
  >
    <!--IMAGE MONSIEUR MALSOT-->
    <div
      class="bg-malsot1 m-auto lg:m-0 image-prof bg-center bg-contain bg-no-repeat transition-all"
      :class="{
        'bg-malsot2': clickedImage === true,
      }"
      @mouseenter="clickedImage = !clickedImage"
      @mouseleave="clickedImage = !clickedImage"
    ></div>
    <!--IMAGE MONSIEUR MALSOT-->

    <div class="max-w-3xl flex flex-col gap-4">
      <h3 class="mmi-h2 text-5xl">David Malsot</h3>
      <p>
        Monsieur David Malsot est l’un des professeurs principaux de MMI mais
        est aussi en grande partie chargé de l’initiation à la communication
        pour les élèves de première année. Il est un professeur important pour
        le département depuis ses multiples implications que ce soit dans
        l’enseignement ou encore dans les évènements en rapport avec le
        département.
      </p>
    </div>
  </div>
  <!--Prof principal : M. MALSOT-->

  <article class="m-5 md:m-10">
    <section
      class="flex flex-col lg:flex-row justify-between items-start md:items-center w-full my-10 md:mt-20"
    >
      <!---25252525 des autres profs-->
      <div class="w-full lg:max-w-sm text-5xl md:text-8xl">
        <div class="flex-col flex w-full boxDefilementText my-10">
          <p class="font-thin object1">
            252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525
          </p>
          <p class="font-thin object2">
            252525252525<strong class="font-bold">25</strong
            >25252525252525252525252525252525252525252525252525252525252525
          </p>
          <p class="font-thin object3">
            252525252525252525252525252525252525252525252525252525252525252525252525
          </p>
        </div>
      </div>
      <!--2525252525-->

      <div class="flex flex-col gap-10 max-w-5xl w-full">
        <h2 class="uppercase mmi-h2 text-center">Les autres profs de com'</h2>
        <div class="grid grid-cols-galerie-profs-2 gap-10 w-full">
          <div class="flex flex-col gap-3 items-center">
            <img
              src="../../public/images/L-Dubois.jpg"
              alt="Photo Madame Dubois"
              class="image-prof-2"
            />
            <p class="font-neuemontreal">Lydia Dubois</p>
          </div>

          <div class="flex flex-col gap-3 items-center">
            <img
              src="../../public/images/JC-Domenget.jpg"
              alt="photo Monsieur Domenget"
              class="image-prof-2"
            />
            <p class="font-neuemontreal">Jean-Claude Domenget</p>
          </div>
          <div class="flex flex-col gap-3 items-center">
            <img
              src="../../public/images/S-Laurent.jpg"
              alt="Photo Monsieur Laurent"
              class="image-prof-2"
            />
            <p class="font-neuemontreal">Stephane Laurent</p>
          </div>
        </div>
      </div>
    </section>
  </article>
</template>

<style>
.boxDefilementText {
  overflow: hidden;
}

.boxDefilementText > .object1 {
  display: inline-block; /* modèle de boîte en ligne */
  padding-left: 50%;
  white-space: nowrap; /* pas de passage à la ligne */
  animation: defilement-rtl 20s infinite ease-in-out;
}

/** */
/** */
/** */
/*ELEMENT REVERSE*/
.boxDefilementText > .object2 {
  display: inline-block; /* modèle de boîte en ligne */
  margin-left: -50%;
  white-space: nowrap; /* pas de passage à la ligne */

  animation: defilement-rtl-reverse 40s infinite ease-in-out;
}
/*ELEMENT REVERSE*/
/** */
/** */
/** */

.boxDefilementText > .object3 {
  display: inline-block; /* modèle de boîte en ligne */
  padding-left: 50%;
  white-space: nowrap; /* pas de passage à la ligne */
  animation: defilement-rtl 30s infinite ease-in-out;
}

@keyframes defilement-rtl {
  0% {
    transform: translate3d(-50%, 0, 0); /* position initiale à droite */
  }
  50% {
    transform: translate3d(-200%, 0, 0); /* position finale à gauche */
  }
  100% {
    transform: translate3d(-50%, 0, 0); /* position finale à gauche */
  }
}

@keyframes defilement-rtl-reverse {
  0% {
    transform: translate3d(-15%, 0, 0); /* position initiale à droite */
  }
  50% {
    transform: translate3d(30%, 0, 0); /* position finale à gauche */
  }
  100% {
    transform: translate3d(-15%, 0, 0); /* position finale à gauche */
  }
}
</style>
