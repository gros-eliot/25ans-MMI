<script setup>
import Character from "./components/character.vue";
import CharacterWithQuote from "./components/characterWithQuote.vue";
import cercleFrise from "./components/cercleFrise.vue";
</script>

<template>
  <section
    class="grid justify-items-center items-center justify-center w-full lg:grid-cols-[65%,35%] grid-cols-1 grid-rows-[70%,30%] lg:grid-rows-1 bg-[linear-gradient(90deg,rgba(0,0,0,1)0%,rgba(0,0,0,0.1)50%,rgba(0,0,0,1)100%),linear-gradient(0deg,rgba(0,0,0,1)0%,rgba(0,0,0,0.1)50%,rgba(0,0,0,1)100%),url('src/images/histoire/space.jpg')] bg-cover bg-center"
  >
    <div class="w-11/12 m-auto flex flex-col gap-20 p-4 text-beige">
      <div class="flex flex-col gap-0">
        <cercleFrise />
        <h1 class="mmi-h1">1997</h1>
        <h2 class="text-vert mmi-h2">
          A long time ago in a galaxy far, far away...
        </h2>
        <div class="mt-10 flex flex-col gap-4">
          <p>
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
    </div>

    <div>
      <!--Ordinateur MMI-->
      <img
        src="src/images/histoire/mmi-green-screen.png"
        alt="Ordinateur MMI"
        class="w-32 md:w-64 h-fit animated-computer m-10 md:m-4"
      />
    </div>
  </section>

  <section
    class="histoire-margins-for-section text-beige mt-20 lg:my-10 bg-[linear-gradient(90deg,rgba(0,0,0,1)0%,rgba(0,0,0,0.1)50%,rgba(0,0,0,1)100%),linear-gradient(0deg,rgba(0,0,0,1)0%,rgba(0,0,0,0.1)50%,rgba(0,0,0,1)100%),url('src/images/histoire/space.jpg')] bg-cover bg-left-bottom"
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
        :textColor="'white'"
      ></Character>
      <Character
        :srcImage="'JF-Klopfenstein.jpg'"
        :altImage="'Jean-François Klopfenstein'"
        :personName="'Jean-François Klopfenstein'"
        :personDescription="'Fondateur du MMI'"
        :textColor="'white'"
      ></Character>
    </div>
  </section>

  <!--PARTIE 2-->
  <section
    class="histoire-margins-for-section mt-20 grid justify-items-center items-center justify-center w-full lg:grid-cols-[20%,80%] grid-cols-1 grid-rows-[10%,90%] lg:grid-rows-1 bg-[linear-gradient(90deg,rgba(0,0,0,1)0%,rgba(0,0,0,0.3)50%,rgba(0,0,0,1)100%),linear-gradient(0deg,rgba(0,0,0,1)0%,rgba(0,0,0,0.3)50%,rgba(0,0,0,1)100%),url('src/images/histoire/old-cinema.gif')] bg-cover bg-center border-2 border-black"
  >
    <div>
      <!--SRC experience-->
      <img
        src="src/images/histoire/src-media.jpg"
        alt="SRC Media"
        class="w-40 h-fit m-4"
      />
    </div>

    <div class="w-11/12 m-auto flex flex-col gap-0 py-5 lg:py-20 text-beige">
      <h2 class="text-vert mmi-h2">Avant MMI, c'était SRC !</h2>
      <div class="mt-10 flex flex-col gap-4">
        <p>
          Effectivement. Au tout départ, le département que l'on connaît
          aujourd'hui sous le nom de "MMI" était auparavant nommé
          <strong> "SRC" (Service Réseaux et Communication). </strong>
        </p>
        <p>
          La première promo était de 30 élèves. Leur provenance était très
          hétéroclite : ils étaient de toute origine, et de tout âge.
        </p>
        <p>
          Nous étions en plein dans l'émergence du multimédia, du CD-ROM, de
          l'utilisation des réseaux. Nos fondateurs nous ont confié que lors des
          premières années à SRC, ils ne savaient pas dans quelle direction
          s'orienter : il fallait s'organiser autour du contenu numérique.
        </p>
        <p>
          C'est ainsi que les premières matières à SRC ont fait surface :
          développement, culture graphique, connaissance du réseau,
          communication, création de contenus, etc.
        </p>
      </div>
    </div>
  </section>
  <section class="histoire-margins-for-section my-40 bg-black">
    <characterWithQuote
      :srcImage="'Daniel-Mercier.jpg'"
      :altImage="'Daniel Mercier'"
      :personName="'Daniel Mercier'"
      :personDescription="'Fondateur du MMI'"
      :personQuote="'Nous avions des processeurs 160 mégahertz MMX. Avec ça, on ne pouvait pas animer quelque chose sur l`écran et passer du son en même temps !'"
      :textColor="'white'"
    />
  </section>
</template>
<style scoped>
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
