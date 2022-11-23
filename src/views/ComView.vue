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
        <p class="text-7xl xl:text-8xl my-10 font-normal">
          2525252525 <br />
          2525252525 <br />
          2525252525
        </p>
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
        class="max-w-lg m-auto hover:invisible "
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
        <p class="text-7xl hidden lg:block xl:text-8xl my-10 font-normal">
          2525252525 <br />
          2525252525 <br />
          2525252525
        </p>
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
            />
            <p class="font-neuemontreal text-2xl">Jean-Claude Domenget</p>
          </div>
          <div class="flex flex-col gap-7 items-center">
            <img
              src="../../public/images/S-Laurent 1.png"
              alt="Photo Monsieur Laurent"
            />
            <p class="font-neuemontreal text-2xl">Stephane Laurent</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<!--<style>
.bgmalsot1 {
  background-image: url("../../public/images/D-Malsot\ 1.png");
  background-repeat: no-repeat;
  height: 550px;
}

.hover\ :bgmaslot2:hover {
  background-image: url("../../public/images/DavidMalsotDrole.jpeg");
  background-repeat: no-repeat;
  height: 550px;
}
</style>
-->
