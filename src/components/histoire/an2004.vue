<script setup>
import Character from "./components/character.vue";
import CharacterWithQuote from "./components/characterWithQuote.vue";
</script>

<template>
  <section
    class="text-black grid justify-items-center items-center justify-center w-full lg:grid-cols-[65%,35%] grid-cols-1 grid-rows-[70%,30%] lg:grid-rows-1"
  >
    <div class="w-11/12 m-auto flex flex-col p-4">
      <div class="flex flex-col">
        <!--CERCLE FRISE-->
        <div>
          <div
            class="mt-6 w-5 h-5 md:w-9 md:h-9 absolute bg-beige border border-black border-opacity-70 rounded-full inset-x-0 md:inset-x-2 z-[99]"
          ></div>
        </div>
        <!--CERCLE FRISE-->

        <h1 class="mmi-h1">2004</h1>

        <h2 class="text-jaune mmi-h2">Du changement à SRC...</h2>
        <div class="mt-10 flex flex-col gap-4">
          <p>INFOS MMI</p>
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
        :srcImage="'A-Lamboux_Durand.jpg'"
        :altImage="'Alain Lamboux-Durand'"
        :personName="'Alain Lamboux-Durand'"
        :personDescription="'Chef du département | audio-visuel'"
        :textColor="'black'"
      />
      <character
        :srcImage="'X-Senente.jpg'"
        :altImage="'Xavier Senente'"
        :personName="'Xavier Senente'"
        :personDescription="'Enseignant du MMI (design) et ancien chef de département'"
        :textColor="'black'"
      />
    </div>
  </div>
</template>
<style scoped></style>
