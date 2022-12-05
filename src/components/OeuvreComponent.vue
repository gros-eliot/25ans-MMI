<template>
  <button>
    <section
      :style="{
        backgroundImage: `url('public/images/oeuvres/${sourceImage}')`,
      }"
      class="w-full h-full bg-cover bg-center"
      @mouseenter="descriptionVisible = !descriptionVisible"
      @mouseleave="descriptionVisible = !descriptionVisible"
      @click="descriptionTotale = !descriptionTotale"
    >
      <div
        class="text-center opacity-0 text-white font-inter w-full h-full flex flex-col justify-center items-center"
        :class="{
          'opacity-100': descriptionVisible === true,
          'bg-[linear-gradient(180deg,rgba(0,_0,_0,_0.4)_0%,rgba(0,_0,_0,_0.8)_100%)]':
            descriptionVisible === true,
        }"
      >
        <h3 class="text-3xl font-bold">
          {{ nom }}
        </h3>
        <p class="font-light mmi-texte">
          {{ auteur }}
        </p>
      </div>
    </section>
  </button>

  <section
    v-if="descriptionTotale === true"
    class="fixed font-inter inset-0 w-full h-full z-50 justify-center items-center bg-[linear-gradient(180deg,rgba(0,_0,_0,_0.6)_0%,rgba(0,_0,_0,_0.6)_100%)]"
    :class="{
      flex: descriptionTotale === true,
      over: descriptionTotale === true,
      hidden: descriptionTotale === false,
    }"
  >
    <div
      class="bg-black w-[95%] h-[95%] text-white px-10 pb-5 overflow-y-scroll customizedScrollbar"
    >
      <Croix
        @click="descriptionTotale = !descriptionTotale"
        class="ml-auto w-12 h-12 m-4"
      />
      <div class="flex flex-col gap-5">
        <img :src="`public/images/oeuvres/${sourceImage}`" class="w-full" />
        <h3 class="mmi-h2">
          {{ nom }}
        </h3>
        <p class="font-thin tracking-tight">De {{ auteur }}</p>
        <p class="font-normal">{{ description }}</p>
      </div>
    </div>
  </section>
</template>

<style>
.customizedScrollbar::-webkit-scrollbar-thumb {
  background: #fff;
  border-radius: 25px;
}
</style>

<script>
import Croix from "../components/icons/croix.vue";

export default {
  components: {
    Croix,
  },
  props: {
    sourceImage: {
      type: String,
      default: "oeuvre-test.jpg",
    },
    nom: {
      type: String,
      default: "nom",
    },
    auteur: {
      type: String,
      default: "auteur",
    },
    description: {
      type: String,
      default: "description",
    },

    descriptionVisible: {
      type: Boolean,
      default: false,
    },
    descriptionTotale: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
