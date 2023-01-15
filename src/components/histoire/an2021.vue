<script setup>
import Character from "./components/character.vue";
import CharacterWithQuote from "./components/characterWithQuote.vue";
import cercleFrise from "./components/cercleFrise.vue";
import logoMMI from "@/components/icons/logoMMI.vue";
</script>

<template>
  <article
    class="w-full flex flex-col py-10 items-center justify-end bg-[linear-gradient(90deg,rgba(187,167,231,0.9)0%,rgba(187,167,231,0.9)100%),url('/images/histoire/offf-frame.jpg')] bg-cover bg-bottom bg-no-repeat"
  >
    <section class="text-black flex items-center justify-center w-full">
      <div class="w-11/12 m-auto flex flex-col p-4">
        <cercleFrise />
        <h1 class="mmi-h1">2021</h1>
        <div class="flex flex-col gap-5">
          <h2 class="text-black mmi-h2 mt-10">
            Passage du DUT au <span class="text-white">BUT MMI</span> !
          </h2>
          <p class="font-inter font-bold tracking-tighter">
            En 2021, une nouvelle réforme impacte le DUT MMI : en effet,
            celui-ci se transforment en BUT. À partir de la rentrée 2021, le BUT
            Métiers du Multimédia et de l’Internet devient une formation à
            réaliser en <strong>3 ans</strong>.
          </p>
          <p>
            Les élèves ont la possibilité de se spécialiser dans un des trois
            domaines com, créa et dev lors de la troisième année
            particulièrement.
          </p>
          <p>
            Les BOSS, examens qui se déroulaient sur quelques jours, sont
            remplacés par les SAÉ (Situation d’Apprentissage et d’Évaluation)
            sont des petits projets qui durent quelques jours et qui sont
            évalués, dans lesquels les élèves doivent réutiliser les cours
            qu’ils ont suivis les semaines précédentes lors des “Ressources”.
          </p>
          <p>
            D’ailleurs, ils doivent désormais compléter des compétences pour
            réussir leur année.
          </p>
          <p>C'est aussi la disparition de la Licence Pro Webdesign (LPWD) !</p>
        </div>
      </div>
    </section>
  </article>
</template>
