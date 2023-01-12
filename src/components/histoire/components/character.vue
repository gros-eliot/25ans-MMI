<script>
import Bottomcorner from "./bottomcorner.vue";
import Topcorner from "./topcorner.vue";

export default {
  components: { Bottomcorner, Topcorner },
  props: {
    srcImage: {
      type: String,
      required: true,
    },
    altImage: {
      type: String,
      required: true,
    },
    personName: {
      type: String,
      required: true,
    },
    personDescription: {
      type: String,
      required: true,
    },
    personDescription: {
      type: String,
      required: true,
    },
    textColor: {
      type: String,
      required: true,
    },
  },
};
</script>

<template>
  <section
    class="my-10"
    :class="{
      'text-beige': textColor === 'white',
      'text-black': textColor === 'black',
    }"
  >
    <div class="grid grid-rows-[2%,96%,2%] items-center w-fit m-auto">
      <Topcorner
        class="w-8 h-fit z-[5] stroke-[10px]"
        :class="{
          'stroke-beige': textColor === 'white',
          'stroke-black': textColor === 'black',
        }"
      ></Topcorner>
      <div class="flex justify-center items-center">
        <img
          :src="'/images/' + srcImage"
          :alt="altImage"
          class="object-cover mmi-photo-3 md:mmi-photo-2 mx-4 animated-img"
        />
      </div>
      <Bottomcorner
        class="w-8 h-fit ml-auto z-[5] stroke-[10px]"
        :class="{
          'stroke-beige': textColor === 'white',
          'stroke-black': textColor === 'black',
        }"
      ></Bottomcorner>
    </div>
    <div class="flex flex-col gap-0 mt-10 md:mt-0 w-10/12 m-auto">
      <p class="text-base font-bold">{{ personName }}</p>
      <p class="text-[10px]">{{ personDescription }}</p>
    </div>
  </section>
</template>

<style scoped>
.animated-img {
  animation: translate-img 4s ease-in-out infinite;
}

@keyframes translate-img {
  0% {
    transform: translate(0%, 3%);
  }
  50% {
    transform: translate(0%, -3%);
  }
  100% {
    transform: translate(0%, 3%);
  }
}
</style>
