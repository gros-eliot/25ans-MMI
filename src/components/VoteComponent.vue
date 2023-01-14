<template>
  <div
    class="flex flex-col justify-center items-start gap-5 w-full h-fit py-10 bg-cover bg-center p-5"
    :style="{
      backgroundImage: `linear-gradient(90deg, rgba(0, 0, 0, 0.4) 0%,  rgba(0, 0, 0, 0.8) 100%),url('/images/oeuvres/${imageOeuvre}')`,
    }"
  >
    <div
      class="grid justify-items-center items-center grid-cols-[2%,98%] gap-5"
    >
      <input type="radio" class="w-6 h-6" :value="id_oeuvre" />
      <label class="mmi-h2 text-white drop-shadow-lg">{{ nom_oeuvre }}</label>
    </div>
    <p class="text-white drop-shadow-xl">{{ nom_createur }}</p>
  </div>
</template>

<script>
export default {
  props: {
    id_oeuvre: {
      type: Number,
      required: true,
    },
    nom_oeuvre: {
      type: String,
      required: true,
    },
    nom_createur: {
      type: String,
      required: true,
    },
    imageOeuvre: {
      type: String,
      required: true,
    },
  },
};
</script>
