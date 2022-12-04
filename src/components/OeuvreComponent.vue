<template>
  <div
    :style="{
      backgroundImage: `url('public/images/oeuvres/${sourceImage}')`,
    }"
    class="w-full h-full bg-cover bg-center"
    @mouseenter="descriptionVisible = !descriptionVisible"
    @mouseleave="descriptionVisible = !descriptionVisible"
  >
    <div
      class="text-center opacity-0 text-white font-inter w-full h-full flex flex-col justify-center items-center"
      :class="{
        'opacity-100': descriptionVisible === true,
        'bg-[linear-gradient(180deg,rgba(0,_0,_0,_0.4)_0%,rgba(0,_0,_0,_0.8)_100%)]':
          descriptionVisible === true,
      }"
    >
      <h3 class="text-xl font-bold">
        {{ nom }}
      </h3>
      <p class="font-light">
        {{ auteur }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    sourceImage: {
      type: String,
      required: true,
    },
    nom: {
      type: String,
      required: false,
    },
    auteur: {
      type: String,
      required: false,
    },

    descriptionVisible: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
