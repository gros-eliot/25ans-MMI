<template>
  <section class="w-11/12 m-auto flex flex-col gap-20 p-2 text-beige">
    <div
      class="flex flex-col md:flex-row lg:flex-col gap-10 md:gap-5 lg:gap-10"
    >
      <div class="flex flex-col gap-5">
        <cercleFrise />
        <h1 class="mmi-h1">1991</h1>
        <p class="mmi-h2 italic">Avant même les fondations du MMI...</p>
        <p>
          En 1991, le département <strong>Mesures Physiques</strong> est créé.
          C'est le premier département dans le campus de Belfort-Montbéliard.
        </p>
      </div>
      <img
        src="src/images/histoire/mesures-physiques.png"
        alt="Logo mesure physique"
        class="w-32 m-auto"
      />
    </div>
  </section>
</template>

<script setup>
import cercleFrise from "./components/cercleFrise.vue";
</script>
