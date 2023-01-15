<script setup>
import Character from "./components/character.vue";
import CharacterWithQuote from "./components/characterWithQuote.vue";
import cercleFrise from "./components/cercleFrise.vue";
</script>

<template>
  <article
    class="w-full pt-20 bg-[linear-gradient(90deg,rgba(0,0,0,0.6)0%,rgba(0,0,0,0.9)100%),url('src/images/histoire/projet.jpg')] bg-cover bg-center"
  >
    <section
      class="text-white flex justify-items-center items-center justify-center w-full"
    >
      <div class="w-11/12 m-auto flex flex-col p-4">
        <cercleFrise />
        <h1 class="mmi-h1">2004</h1>
        <div class="flex flex-col gap-0 mt-10 mb-10">
          <h2 class="text-jaune mmi-h2">Les nouveautés à SRC</h2>
          <div class="mt-5 flex flex-col gap-4">
            <p>
              Certains d'entre vous se rappelleront sûrement de Ioan Roxin. Avec
              plus d'une trentaine d'années d'enseignement universitaire, M.
              Roxin a permis la mise en place des
              <strong>évaluations par projet</strong> au département SRC.
            </p>
            <p class="font-inter font-bold tracking-tighter">
              Ioan Roxin se séparera du département en 2004, après sept années
              passées à celui-ci. Il se dirigera vers PSM (à Montbéliard) par la
              suite.
            </p>
            <p>
              La pédagogie basée sur des projets sera maintenue par différents
              professeurs apportant de la vie au département : M. Malsot, Mme.
              Dubois, M. Senente, M. Fino...
            </p>
          </div>
        </div>
      </div>
    </section>
    <div class="m-auto grid grid-cols-1 justify-items-center w-full">
      <!--Personnages débloqués-->
      <p class="uppercase text-sm italic text-gray-400 text-center">
        // New characters unlocked
      </p>
      <!--Personnages débloqués-->
      <div
        class="grid grid-cols-1 justify-items-center md:grid-cols-galerie-profs-2 w-full"
      >
        <!--
        ALD
        <character
          :srcImage="'A-Lamboux_Durand.jpg'"
          :altImage="'Alain Lamboux-Durand'"
          :personName="'Alain Lamboux-Durand'"
          :personDescription="'Chef du département | audio-visuel'"
          :textColor="'black'"
        />
      -->
        <character
          :srcImage="'I-Roxin.jpeg'"
          :altImage="'Ioan Roxin'"
          :personName="'Ioan Roxin'"
          :personDescription="'A instauré les projets au MMI'"
          :textColor="'white'"
        />
        <character
          :srcImage="'D-Malsot.jpg'"
          :altImage="'David Malsot'"
          :personName="'David Malsot'"
          :personDescription="'Enseignant en communication'"
          :textColor="'white'"
        />
        <character
          :srcImage="'L-Dubois.jpg'"
          :altImage="'Lydia Dubois'"
          :personName="'Lydia Dubois'"
          :personDescription="'Enseignante en anglais'"
          :textColor="'white'"
        />
      </div>
    </div>
  </article>
</template>
<style scoped>
h2 {
  text-shadow: 6px 4px 0px #000000;
}

.shadowed-text {
  text-shadow: 1px 1px 1px #000000;
}
</style>
