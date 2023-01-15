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
        <div class="flex flex-col gap-5">
          <h2 class="text-black mmi-h2 mt-10">
            Premier partenariat avec le OFFF
          </h2>

          <p>
            Le OFFF, festival international du design et du digital. Le MMI y
            est désormais convié chaque année, à Barcelone.
          </p>

          <p>
            Le MMI de Montbéliard a réussi avec le OFFF à développer une
            présence internationale ! Mais aussi grâce aux stages à l'étranger,
            et les différentes écoles du digitale (CÉGEP) à Matane ou à Vanier,
            au Canada.
          </p>

          <p>
            Les premiers échanges au Canada auraient d'ailleurs commencé durant
            l'année universitaire de 2007-2008.
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
