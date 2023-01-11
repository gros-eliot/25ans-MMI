<script setup>
import Character from "./components/character.vue";
import CharacterWithQuote from "./components/characterWithQuote.vue";
</script>

<template>
  <section
    class="grid justify-items-center items-center justify-center w-full lg:grid-cols-[70%,30%] grid-cols-1 grid-rows-[70%,30%] lg:grid-rows-1 bg-[linear-gradient(90deg,rgba(0,0,0,1)0%,rgba(0,0,0,0.1)50%,rgba(0,0,0,1)100%),linear-gradient(0deg,rgba(0,0,0,1)0%,rgba(0,0,0,0.1)50%,rgba(0,0,0,1)100%),url('/images/histoire/space.jpg')] bg-cover bg-center"
  >
    <div class="w-11/12 m-auto flex flex-col gap-20 p-4 text-white">
      <div class="flex flex-col gap-0">
        <h1 class="mmi-h1">1997</h1>
        <h2 class="text-vert mmi-h2">
          A long time ago in a galaxy far, far away...
        </h2>
        <p class="mt-10">
          C'est en 1997 que le département du MMI est créé. C'est le 3e
          département du campus de Belfort-Montbéliard ! Il y a eu juste avant
          la création du département RT (Réseaux & Télécommunications). Cela
          montre l'importance de la technologie au sein du campus.
        </p>
        <p>
          On le doit à plusieurs personnes, dont Jean-François Klopfenstein ou
          encore Daniel Mercier.
        </p>
        <p>
          Ensuite, d'autres départements se sont installés au sein du campus
          (LEA, UFR STGI, etc.)
        </p>
      </div>
    </div>

    <div>
      <!--Ordinateur MMI-->
      <img
        src="/images/histoire/mmi-green-screen.png"
        alt="Ordinateur MMI"
        class="w-64 h-fit animated-computer m-4"
      />
    </div>
  </section>

  <section
    class="histoire-margins-for-section text-white mt-20 lg:my-10 bg-[linear-gradient(90deg,rgba(0,0,0,1)0%,rgba(0,0,0,0.1)50%,rgba(0,0,0,1)100%),linear-gradient(0deg,rgba(0,0,0,1)0%,rgba(0,0,0,0.1)50%,rgba(0,0,0,1)100%),url('/images/histoire/space.jpg')] bg-cover bg-left-bottom"
  >
    <!--Personnages débloqués-->
    <p class="uppercase text-sm italic text-gray-400 text-center">
      // New characters unlocked
    </p>
    <!--Personnages débloqués-->

    <div class="grid grid-cols-2 justify-items-center">
      <Character
        :srcImage="'Daniel-Mercier.jpg'"
        :altImage="'Daniel Mercier'"
        :personName="'Daniel Mercier'"
        :personDescription="'Fondateur du MMI'"
      ></Character>
      <Character
        :srcImage="'JF-Klopfenstein.jpg'"
        :altImage="'Jean-François Klopfenstein'"
        :personName="'Jean-François Klopfenstein'"
        :personDescription="'Fondateur du MMI'"
      ></Character>
    </div>

    <characterWithQuote
      :srcImage="'JF-Klopfenstein.jpg'"
      :altImage="'Jean-François Klopfenstein'"
      :personName="'Jean-François Klopfenstein'"
      :personDescription="'Fondateur du MMI'"
      :personQuote="'Je suis un des premiers fondateurs du MMI.'"
    />
  </section>
</template>
<style>
.animated-computer {
  animation: rotation-computer 20s linear infinite;
}

@keyframes rotation-computer {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
