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
    personQuote: {
      type: String,
      required: true,
    },
  },
};
</script>

<template>
  <section
    class="flex flex-col lg:flex-row justify-start lg:justify-center items-center w-full"
  >
    <div class="flex justify-center items-center">
      <img
        :src="'/images/' + srcImage"
        :alt="altImage"
        class="object-cover mmi-photo-3 md:mmi-photo-2 mx-4"
      />
    </div>

    <div class="flex flex-col gap-0 mt-10 p-3 md:mt-0 w-full">
      <!--Quote débloquée-->
      <p class="uppercase text-sm italic text-gray-400">
        // New quote unlocked
      </p>
      <!--Quote débloquée-->

      <p class="font-bold">{{ personName }}</p>
      <p class="text-[10px]">{{ personDescription }}</p>
      <div class="grid grid-rows-[2%,96%,2%] items-center w-full my-5">
        <Topcorner
          class="w-8 h-fit z-[5] stroke-white stroke-[10px]"
        ></Topcorner>

        <!--QUOTE-->
        <div class="flex justify-center items-center p-2 lg:p-4">
          <p
            class="text-center italic text-5xl normal-case font-normal animated-quote w-full"
          >
            {{ personQuote }}
          </p>
        </div>
        <!--QUOTE-->

        <Bottomcorner
          class="w-8 h-fit ml-auto z-[5] stroke-white stroke-[10px]"
        ></Bottomcorner>
      </div>
    </div>
  </section>
</template>

<style>
.animated-quote {
  animation: color-quote 2s ease-in-out infinite;
}

@keyframes color-quote {
  0% {
    color: #bba7e7;
  }
  25% {
    color: hsl(241, 72%, 76%);
  }
  50% {
    color: #657fda;
  }
  75% {
    color: #ccb3ff;
  }
  100% {
    color: #bba7e7;
  }
}
</style>
