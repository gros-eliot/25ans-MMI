<template>
  <section
    class="grid grid-rows-2 grid-cols-1 md:grid-rows-1 md:grid-cols-2 w-full h-screen gap-0"
  >
    <div
      class="bg-jaune flex justify-center items-center flex-col p-10 gap-5 text-center"
    >
      <a href="https://www.instagram.com/mmi25ans/" class="w-fit h-fit">
        <div
          class="flex justify-center items-center flex-col p-10 gap-5 text-center"
        >
          <h3 class="mmi-h3 text-center">Rejoignez nous sur Instagram</h3>
          <p>
            Sous forme de story et de post, nous vous partagerons des
            informations à propos du concours, de l'évènement. N'hésitez pas à
            nous contacter en message privé !
          </p>
          <Instagram class="w-20 h-20 stroke-black m-auto" />
        </div>
      </a>
    </div>
    <div
      class="bg-bleu flex justify-center items-center flex-col p-10 gap-5 text-center"
    >
      <a href="https://discord.com/invite/nvNsDkZERR" class="w-fit h-fit">
        <div
          class="flex justify-center items-center flex-col p-10 gap-5 text-center"
        >
          <h3 class="mmi-h3 text-center">Rejoignez nous sur Discord</h3>
          <p>
            Discutez à travers les différents salons de notre serveur Discord,
            et soyez notifié.es des nouveautés concernant les 25 ans de MMI.
            Certains enseignants et MMI s'y retrouvent déjà !
          </p>
          <Discord class="w-20 h-20 stroke-black m-auto" />
        </div>
      </a>
    </div>
  </section>
</template>

<script setup>
import Instagram from "@/components/icons/instagram.vue";
import Discord from "../components/icons/Discord.vue";
</script>
