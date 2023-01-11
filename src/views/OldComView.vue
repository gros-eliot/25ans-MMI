<script setup>
import { ref } from "vue";
let clickedImage = ref(false);
</script>

<template>
  <div class="my-10">
    <!--
    <section class="p-10 m-auto">
      <div class="grid grid-rows-[80%_20%]">
        <div class="grid grid-cols-[70%_30%]">
          <div class="grid grid-rows-[70%_30%]">
            <div class="grid grid-cols-2">
              <img
                src="/images/D-Malsot.jpg"
                class="w-full h-full object-cover object-center"
              />
              <img
                src="/images/D-Malsot.jpg"
                class="w-full h-full object-cover object-center"
              />
            </div>
            <img
              src="/images/D-Malsot.jpg"
              class="w-full h-full object-cover object-center"
            />
          </div>
          <div class="grid grid-rows-2">
            <img
              src="/images/D-Malsot.jpg"
              class="w-full h-full object-cover object-center"
            />
            <img
              src="/images/D-Malsot.jpg"
              class="w-full h-full object-cover object-center"
            />
          </div>
        </div>
        <div class="grid grid-cols-3">
          <img
            src="/images/D-Malsot.jpg"
            class="w-full h-full object-cover object-center"
          />
          <img
            src="/images/D-Malsot.jpg"
            class="w-full h-full object-cover object-center"
          />
          <img
            src="/images/D-Malsot.jpg"
            class="w-full h-full object-cover object-center"
          />
        </div>
      </div>
    </section>
-->
    <img class="m-auto" src="/oeuvres.jpg" />
  </div>

  <!--Intro-->
  <div class="flex items-center w-full p-5 md:p-10 gap-10">
    <div class="max-w-5xl">
      <h2 class="text-center lg:text-left mmi-h2">La com' au&nbsp;MMI...</h2>
      <p class="mmi-texte">
        Le pôle communication de MMI fait partie des trois grandes thématiques
        qu’aborde MMI dans son cursus. La communication est très importante dans
        le milieu du web car elle permet aux différents projets de vivre et de
        se faire une place dans les esprits. De plus, la communication régie
        toutes les parties qui précèdent le lancement d’un projet, des analyses
        concurrentielles et la gestion du budget.
      </p>
    </div>

    <!--2525252525-->
    <div class="m-auto hidden xl:block w-fit">
      <div
        class="flex-col flex text-8xl max-w-xl w-full boxDefilementText my-10"
      >
        <p class="font-thin object1">
          252525252525252525252525252525252525252525252525252525252525252525252525
          252525252525252525252525252525252525252525252525252525252525252525252525
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
    <!---->
  </div>

  <!--Prof principal : M. MALSOT-->
  <div class="flex flex-col lg:flex-row justify-start items-start p-5 md:p-10">
    <!--IMAGE
    MONSIEUR
    MALSOT-->
    <div
      class="bg-malsot1 mmi-photo bg-center bg-contain bg-no-repeat transition-all"
      :class="{
        'bg-malsot2': clickedImage === true,
      }"
      @click="clickedImage = !clickedImage"
    ></div>
    <!--IMAGE 
      MONSIEUR 
       MALSOT-->
    <div class="p-5 max-w-3xl">
      <h3 class="mmi-h2 text-5xl">M.MALSOT</h3>
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

  <!--AUTRES PROFS-->
  <h3 class="mmi-h2">AUTRES PROFS DE COM’</h3>

  <div class="flex items-center flex-col md:flex-row w-full p-5 gap-10">
    <div>
      <div
        class="flex-col text-8xl max-w-3xl w-full boxDefilementText my-10 hidden xl:flex"
      >
        <p class="font-thin object1">
          252525252525252525252525252525252525252525252525252525252525252525252525
          252525252525252525252525252525252525252525252525252525252525252525252525
        </p>

        <p class="font-thin object2">
          252525252525<strong class="font-bold">25</strong
          >2525252525252525252525252525252525252525252525252525252525252525
        </p>

        <p class="font-thin object3">
          252525252525252525252525252525252525252525252525252525252525252525252525
        </p>
      </div>
    </div>
    <div class="flex flex-col m-auto items-center gap-6">
      <div class="grid grid-cols-galerie-profs gap-10 w-full">
        <div class="flex flex-col gap-3 items-center">
          <img
            src="../../public/images/JC-Domenget.jpg"
            alt="photo Monsieur Domenget"
            class="mmi-photo"
          />
          <p class="font-neuemontreal">Jean-Claude Domenget</p>
        </div>
        <div class="flex flex-col gap-3 items-center">
          <img
            src="../../public/images/S-Laurent.jpg"
            alt="Photo Monsieur Laurent"
            class="mmi-photo"
          />
          <p class="font-neuemontreal">Stephane Laurent</p>
        </div>
        <div class="flex flex-col gap-3 items-center">
          <img
            src="../../public/images/L-Dubois.jpg"
            alt="Photo Madame Dubois"
            class="mmi-photo"
          />
          <p class="font-neuemontreal">Lydia Dubois</p>
        </div>
      </div>
    </div>
  </div>
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

/* animation avec couleurs (hover)
/*
.boxDefilementText:hover {
  animation: defilement-colors 2s infinite linear;
}

@keyframes defilement-colors {
  0% {
    @apply text-vert;
  }
  25% {
    @apply text-bleu;
  }
  50% {
    @apply text-rouge;
  }
  75% {
    @apply text-bleu;
  }
  100% {
    @apply text-vert;
  }
}
*/

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
