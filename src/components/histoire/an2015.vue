<script setup>
import Character from "./components/character.vue";
import CharacterWithQuote from "./components/characterWithQuote.vue";
import cercleFrise from "./components/cercleFrise.vue";
import logoMMI from "@/components/icons/logoMMI.vue";
</script>

<template>
  <article
    class="w-full flex flex-col py-10 items-center justify-end bg-[linear-gradient(90deg,rgba(255,214,0,0.9)0%,rgba(255,214,0,0.9)100%),url('/images/histoire/offf-frame.jpg')] bg-cover bg-bottom bg-no-repeat"
  >
    <section class="text-black flex items-center justify-center w-full">
      <div class="w-11/12 m-auto flex flex-col p-4">
        <cercleFrise />
        <h1 class="mmi-h1">2015</h1>
        <div class="flex flex-col gap-0">
          <h2 class="text-black mmi-h2 mt-10">
            Premier partenariat avec le OFFF
          </h2>

          <p class="mt-10">
            <strong>
              C'est au début des années 2000 que l'on découvre les premières
              débouchés pour les métiers du multimédia et de l'internet </strong
            >. SRC va donc bâtir son enseignement autour de ces avancées.
          </p>
        </div>
      </div>
    </section>
    <img
      src="/images/histoire/offf.png"
      alt="OFFF logo"
      class="w-72 h-fit m-auto my-20 animate-bounce"
    />
  </article>
</template>
