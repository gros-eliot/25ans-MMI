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
  },
};
</script>

<template>
  <section class="my-10">
    <div class="grid grid-rows-[2%,96%,2%] items-center w-fit">
      <Topcorner class="w-8 h-fit z-[5] stroke-beige stroke-[10px]"></Topcorner>
      <div class="flex justify-center items-center">
        <img
          :src="'/images/' + srcImage"
          :alt="altImage"
          class="object-cover mmi-photo-3 md:mmi-photo-2 mx-4 animated-img"
        />
      </div>
      <Bottomcorner
        class="w-8 h-fit ml-auto z-[5] stroke-beige stroke-[10px]"
      ></Bottomcorner>
    </div>
    <div class="flex flex-col gap-0 mt-10 md:mt-0">
      <p class="text-base font-bold">{{ personName }}</p>
      <p class="text-[10px]">{{ personDescription }}</p>
    </div>
  </section>
</template>

<style>
.animated-img {
  animation: translate-img 4s ease-in-out infinite;
}

.animated-quote {
  animation: color-quote 10s ease-in-out infinite;
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

@keyframes animated-quote {
  0% {
    color: #bba7e7;
  }
  25% {
    color: hsl(241, 72%, 76%);
  }
  50% {
    color: #fffef6;
  }
  75% {
    color: #4d3f6a;
  }
  100% {
    color: #bba7e7;
  }
}
</style>
