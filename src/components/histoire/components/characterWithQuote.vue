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
    textColor: {
      type: String,
      required: true,
    },
  },
};
</script>

<template>
  <section
    class="flex flex-col lg:flex-row justify-start lg:justify-center items-center w-full"
    :class="{
      'text-beige': textColor === 'white',
      'text-black': textColor === 'black',
      'text-black': textColor === 'black-simple',
    }"
  >
    <div class="flex justify-center items-center">
      <img
        :src="'src/images/' + srcImage"
        :alt="altImage"
        class="object-cover object-center mmi-photo-3 md:mmi-photo-2 mx-4 animated-img"
      />
    </div>

    <div class="flex flex-col gap-0 mt-10 md:px-10 p-3 md:mt-0 w-full">
      <!--Quote débloquée-->
      <p
        class="uppercase text-sm italic"
        :class="{
          'text-gray-400': textColor === 'white',
          'text-gray-900': textColor === 'black',
          'text-gray-900': textColor === 'black-simple',
        }"
      >
        // New quote unlocked
      </p>
      <!--Quote débloquée-->

      <p class="font-bold">{{ personName }}</p>
      <p class="text-[10px]">{{ personDescription }}</p>
      <div class="grid grid-rows-[2%,96%,2%] items-center w-full my-5">
        <Topcorner
          class="w-8 h-fit z-[5] stroke-[10px]"
          :class="{
            'stroke-beige': textColor === 'white',
            'stroke-black': textColor === 'black',
            'stroke-black': textColor === 'black-simple',
          }"
        ></Topcorner>

        <!--QUOTE-->
        <div class="flex justify-center items-center p-2 lg:p-4">
          <p
            class="text-center italic text-2xl md:text-4xl lg:text-5xl normal-case font-normal w-full"
            :class="{
              'animated-quote': textColor === 'white',
              'animated-quote-dark': textColor === 'black',
              'text-black': textColor === 'black-simple',
            }"
          >
            {{ personQuote }}
          </p>
        </div>
        <!--QUOTE-->

        <Bottomcorner
          class="w-8 h-fit ml-auto z-[5] stroke-[10px]"
          :class="{
            'stroke-beige': textColor === 'white',
            'stroke-black': textColor === 'black',
            'stroke-black': textColor === 'black-simple',
          }"
        ></Bottomcorner>
      </div>
    </div>
  </section>
</template>

<style scoped>
.animated-quote {
  animation: color-quote 2s ease-in-out infinite;
}

.animated-quote-dark {
  animation: color-quote-dark 2s ease-in-out infinite;
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
@keyframes color-quote-dark {
  0% {
    color: #183b78;
  }
  25% {
    color: hsl(279, 64%, 41%);
  }
  50% {
    color: #322341;
  }
  75% {
    color: #604aa2;
  }
  100% {
    color: #183b78;
  }
}

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
