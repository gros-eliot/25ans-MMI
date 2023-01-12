<script setup>
import Character from "./components/character.vue";
import CharacterWithQuote from "./components/characterWithQuote.vue";
</script>

<template>
  <section
    class="text-black flex justify-items-center items-center justify-center w-full"
  >
    <div class="w-11/12 m-auto flex flex-col p-4">
      <!--CERCLE FRISE-->
      <div>
        <div
          class="mt-6 w-5 h-5 md:w-9 md:h-9 absolute bg-beige border border-black border-opacity-70 rounded-full inset-x-0 md:inset-x-2 z-[99]"
        ></div>
      </div>
      <!--CERCLE FRISE-->
      <h1 class="mmi-h1">De 1999 à 2000</h1>
      <div class="flex flex-col gap-0 mb-20 mt-10">
        <h2 class="text-jaune mmi-h2">Un nouveau départ...</h2>
        <div class="mt-5 flex flex-col gap-4">
          <p>
            <strong>
              C'est au début des années 2000 que l'on découvre les premières
              débouchés pour les métiers du multimédia et de l'internet </strong
            >. SRC va donc bâtir son enseignement autour de ces avancées.
          </p>
          <p>
            C'est donc les départements qui étaient répartis selon différentes
            bases (communication, développement, design, etc.) qui se sont
            regroupés pour ne former qu'un cursus.
          </p>
          <p>
            Les étudiants ne savaient même pas encore à l'époque ce qu'était les
            services et réseaux de télécommunication. Les personnes ayant été
            intégrées à SRC correspondent à
            <strong>tout type de profil</strong>. On accueillait d'ailleurs
            surtout ceux en reconversion, en recherches de nouveaux horizons. La
            sélection était large : elle se faisait du Bac pro, à la licence.
          </p>
          <p>
            Le but était de faire correspondre les enseignements le plus
            possible aux élèves de SRC : ainsi, on retrouvait des littéraires
            pour le pôle de communication, des artistes pour l'apprentissage du
            graphisme, et des techniciens pour le dev.
          </p>
        </div>
      </div>
    </div>
  </section>

  <section
    class="text-black grid justify-items-center items-center justify-center w-full lg:grid-cols-[65%,35%] grid-cols-1 grid-rows-[70%,30%] lg:grid-rows-1"
  >
    <div class="w-11/12 m-auto flex flex-col p-4">
      <div class="flex flex-col">
        <h2 class="text-jaune mmi-h2">... et un nouveau bâtiment !</h2>
        <div class="mt-10 flex flex-col gap-4">
          <p>
            Le MMI a ensuite acquis un nouveau bâtiment. On peut dire (ou
            redire) un merci extraordinaire à l'agglomération de Montbéliard qui
            a donné son accord pour la construction du bâtiment, et
            l'approvisionnement du matériel. Le bunker devenait insupportable
            avec la chaleur en été.
          </p>
          <p>
            L'ouverture du nouveau département est accordée par le ministère fin
            mai ou début juin&nbsp;: il est donc impossible de recruter des
            enseignants pour la rentrée à venir !
          </p>
          <p>
            Ce qui a fait que M. Viezzi changeait d’emploi du temps 4 fois par
            jour.
          </p>
        </div>
      </div>
    </div>

    <div>
      <!--Image Nouveau bâtiment-->
      <img
        src="/images/histoire/batiment-mmi.jpg"
        alt="Le bunker, présenté par M. Chatonnay"
        class="w-60 md:w-72 h-fit m-10 md:m-2"
      />
    </div>
  </section>

  <div class="m-auto my-20 grid grid-cols-1 justify-items-center w-full">
    <!--Personnages débloqués-->
    <p class="uppercase text-sm italic text-gray-400 text-center">
      // New characters unlocked
    </p>
    <!--Personnages débloqués-->
    <div class="grid grid-cols-1 justify-items-center md:grid-cols-2 w-full">
      <character
        :srcImage="'X-Senente.jpg'"
        :altImage="'Xavier Senente'"
        :personName="'Xavier Senente'"
        :personDescription="'Enseignant du MMI (design) et ancien chef de département'"
        :textColor="'black'"
      />
      <character
        :srcImage="'E-Chartogne.jpg'"
        :altImage="'Elodie Chartogne'"
        :personName="'Elodie Chartogne'"
        :personDescription="'Secrétaire du MMI de Montbéliard'"
        :textColor="'black'"
      />
    </div>
  </div>
</template>
<style scoped>
h2 {
  text-shadow: 6px 4px 0px #000000;
}
</style>
