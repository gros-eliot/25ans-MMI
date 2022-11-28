<script setup></script>

<template>
  <div class="flex-col flex text-8xl w-full boxDefilementText my-10">
    <p class="font-thin object1">
      252525252525252525252525252525252525252525252525252525252525252525252525
    </p>

    <p class="font-thin object2">
      2525252525252525252525252525<strong class="font-bold">25</strong
      >25252525252525252525252525252525252525252525
    </p>

    <p class="font-thin object3">
      252525252525252525252525252525252525252525252525252525252525252525252525
    </p>
  </div>
  <div class="max-w-5xl mx-2 md:ml-28">
    <div class="">
      <h2 class="font-inter font-black text-7xl">25 ANS</h2>
      <p class="text-4xl">
        25 ans ça se fête ! Pour son quart de siècle MMI Montbéliard organise un
        concours d’oeuvre numérique ! Le but ? Laissez une trace, car oui
        l’oeuvre gagnante sera transformer en NFT pour rester à jamais dans la
        Blockchain ! Alors ? Partant ?
      </p>

      <p class="text-4xl font-semibold">
        Vous pouvez commencer par voter pour votre oeuvre préféré à travers les
        différentes salles de ce musée digital !
      </p>
    </div>
  </div>

  <div class="max-w-5xl mx-2 md:ml-28 my-10">
    <div class="">
      <h2 class="font-inter font-black text-7xl">MMI</h2>
      <p class="text-4xl">
        Le BUT MMI ou Bachelor Universitaire technique Métiers du Multimédia et
        de l’Internet est un curcus universitaire. MMI c’est plus que des années
        d’apprentissage, c’est une expérience personnelle comme sociale. Un état
        d’esprit qui réuni tout les élèves et qui fait vivre le département. Du
        design en passant par la communication et le développement web, MMI
        apprends à tous les prérequis pour travailler dans le WEB.
      </p>
    </div>
  </div>
</template>

<style scoped>
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
