<script setup>
import Character from "./components/character.vue";
import CharacterWithQuote from "./components/characterWithQuote.vue";
import cercleFrise from "./components/cercleFrise.vue";
import logoMMI from "@/components/icons/logoMMI.vue";
</script>

<template>
  <article class="w-full">
    <section
      class="text-black flex justify-items-center items-center justify-center w-full"
    >
      <div class="w-11/12 m-auto flex flex-col p-4">
        <cercleFrise />
        <h1 class="mmi-h1">2012</h1>
        <div class="flex flex-col gap-0 mt-10 mb-10">
          <h2 class="text-beige mmi-h2">
            Danier Mercier n'est plus chef de département
          </h2>
          <div class="mt-5 flex flex-col gap-4">
            <p>
              Daniel Mercier cède sa place de directeur du département à Bruno
              Viezzi. Il aura marqué les premières générations SRC à travers ses
              enseignements et sa volonté de transformer le département pour le
              bien-être des étudiants.
            </p>
            <p>
              Les chefs de département se succéderont rapidement : après Bruno
              Viezzi, viendra Pascal Chatonnay, puis Xavier Senente, et enfin
              Alain Lamboux-Durand.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="histoire-margins-for-section my-10">
      <characterWithQuote
        :srcImage="'Daniel-Mercier.jpg'"
        :altImage="'Daniel Mercier'"
        :personName="'Daniel Mercier'"
        :personDescription="'Fondateur du MMI'"
        :personQuote="`Je remercie les étudiants d'avoir vécu la même chose que nous. L'aventure a bien tourné.`"
        :textColor="'black-simple'"
      />
    </section>
  </article>
  <article
    class="w-full mt-[50rem] flex flex-col gap-10 items-center lg:flex-row"
  >
    <section
      class="text-black flex justify-items-center items-center justify-center w-full"
    >
      <div class="w-11/12 m-auto flex flex-col p-4">
        <cercleFrise />
        <h1 class="mmi-h1">2013</h1>
        <div class="flex flex-col gap-0 mt-10 mb-10">
          <h2 class="text-beige mmi-h2">"SRC" devient "MMI"</h2>
          <div class="mt-5 flex flex-col gap-4">
            <p>
              Le département change de nom : il ne s’appelle désormais plus
              “Services et réseaux de communication” mais “Métiers du Multimédia
              et de l’Internet”. Ce nom vient alors davantage souligner la
              polyvalence du département qui ne s’intéresse pas seulement au
              domaine de la communication mais également à celui du design et de
              développement web.
            </p>
          </div>
        </div>
      </div>
    </section>

    <logoMMI class="w-32 h-32 stroke-black m-10 lg:w-60 lg:h-52" />
  </article>
</template>
