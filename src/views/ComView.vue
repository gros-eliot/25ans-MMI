<script setup></script>

<template>
  <div class="">
    <div class="my-10">
      <img class="m-auto" src="/oeuvres.jpg" />
    </div>

    <div class="flex items-center w-full p-5 gap-10">
      <div class=" ">
        <div class="max-w-5xl">
          <h2
            class="text-center lg:text-left font-inter font-black text-6xl lg:text-7xl"
          >
            Communication au&nbsp;MMI...
          </h2>
          <p class="mmi-texte">
            Le pôle communication de MMI fait partie des trois grandes
            thématiques qu’aborde MMI dans son cursus. La communication est très
            importante dans le milieu du web car elle permet aux différents
            projets de vivre et de se faire une place dans les esprits. De plus,
            la communication régie toutes les parties qui précèdent le lancement
            d’un projet, des analyses concurrentielles et la gestion du budget.
          </p>
        </div>
      </div>
      <div class="m-auto hidden lg:block w-fit mt-96">
        <div>
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
      </div>
    </div>
    <div>
      <!--ligne rouge-->
    </div>
    <div class="lg:flex justify-center items-center">
      <!--<div class="bgmalsot1 max-w-lg mx-auto hover:bgmalsot2">-->
      <img
        src="../../public/images/D-Malsot 1.png"
        alt="Photo de David Malsot"
        class="max-w-lg m-auto hover:invisible"
      />

      <img
        src="../../public/images/DavidMalsotDrole.jpeg"
        alt="Photo de David Malsot"
        class="max-w-lg m-auto hover:visible invisible"
      />

      <!--</div>-->

      <div class="m-auto p-5">
        <h3 class="font-inter text-center font-black text-5xl">M.MALSOT</h3>
        <p class="mmi-texte">
          Monsieur David Malsot est l’un des professeurs principaux de MMI mais
          est aussi en grande partie chargé de l’initiation à la communication
          pour les élèves de première année. Il est un professeur important pour
          le département depuis ses multiples implications que ce soit dans
          l’enseignement ou encore dans les évènements en rapport avec le
          département.
        </p>
      </div>
    </div>

    <div class="flex items-center w-full p-5 gap-10">
      <div>
        <div
          class="flex-col flex text-8xl max-w-3xl w-full boxDefilementText my-10"
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
        <h3 class="font-inter font-black text-4xl xl:text-5xl">
          AUTRES PROFESSEURS DE COM’
        </h3>
        <div class="grid grid-cols-galerie-profs gap-9 w-full">
          <div class="flex flex-col gap-7 items-center">
            <img
              src="../../public/images/JC-Domenget 1.png"
              alt="photo Monsieur Domenget"
              class="image-prof"
            />
            <p class="font-neuemontreal text-2xl">Jean-Claude Domenget</p>
          </div>
          <div class="flex flex-col gap-7 items-center">
            <img
              src="../../public/images/S-Laurent 1.png"
              alt="Photo Monsieur Laurent"
              class="image-prof"
            />
            <p class="font-neuemontreal text-2xl">Stephane Laurent</p>
          </div>
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
