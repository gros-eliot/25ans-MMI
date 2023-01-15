<script setup>
import mouseIcon from "@/components/histoire/components/mouseIcon.vue";
import An1991 from "@/components/histoire/an1991.vue";
import An1997 from "@/components/histoire/an1997.vue";
import An1998 from "../components/histoire/an1998.vue";
import An2000 from "../components/histoire/an2000.vue";
import An2004 from "../components/histoire/an2004.vue";
import An2012 from "../components/histoire/an2012.vue";
import An2015 from "../components/histoire/an2015.vue";
import An2021 from "../components/histoire/an2021.vue";
import FinFrise from "../components/histoire/FinFrise.vue";
import MenuMeat from "../components/icons/MenuMeat.vue";
import { ref } from "vue";

function AnimationsHistoire() {
  let valueScroll = window.pageYOffset;
  let screenWidth = window.screen.width;
  // Black screen
  let blackScreen = document.querySelector(".histoire-blackscreen");
  // Background modifiers
  let backgroundHistoire = document.querySelector(".histoire-background");

  // BLACKSCREEN  // BLACKSCREEN  // BLACKSCREEN  // BLACKSCREEN  // BLACKSCREEN  // BLACKSCREEN  // BLACKSCREEN
  // BLACKSCREEN  // BLACKSCREEN  // BLACKSCREEN  // BLACKSCREEN  // BLACKSCREEN  // BLACKSCREEN  // BLACKSCREEN
  // BLACKSCREEN  // BLACKSCREEN  // BLACKSCREEN  // BLACKSCREEN  // BLACKSCREEN  // BLACKSCREEN  // BLACKSCREEN
  // BLACKSCREEN  // BLACKSCREEN  // BLACKSCREEN  // BLACKSCREEN  // BLACKSCREEN  // BLACKSCREEN  // BLACKSCREEN

  // pas de blackscreen au début
  if (valueScroll >= 0) {
    blackScreen.style.display = "none";
    blackScreen.style.opacity = 0;
  }

  // FONDU IN (histoire-1991)

  if (valueScroll >= 100) {
    if (screenWidth > 600) {
      blackScreen.style.display = "block";
    }
    blackScreen.style.opacity = "20%";
  }
  if (valueScroll >= 200) {
    blackScreen.style.opacity = "40%";
  }
  if (valueScroll >= 300) {
    blackScreen.style.opacity = "60%";
  }
  if (valueScroll >= 400) {
    blackScreen.style.opacity = "80%";
  }
  if (valueScroll >= 500) {
    blackScreen.style.opacity = "100%";
  }

  //00 - FONDU OUT (1991)

  if (valueScroll >= 700) {
    blackScreen.style.opacity = "80%";
  }
  if (valueScroll >= 800) {
    blackScreen.style.opacity = "60%";
  }
  if (valueScroll >= 900) {
    blackScreen.style.display = "40%";
  }
  if (valueScroll >= 1000) {
    blackScreen.style.display = "20%";
  }
  if (valueScroll >= 1100) {
    blackScreen.style.display = "0%";
    blackScreen.style.display = "none";
  }

  // - FONDU IN (1991-1997)

  if (valueScroll >= 1800) {
    if (screenWidth > 600) {
      blackScreen.style.display = "block";
    }
    blackScreen.style.opacity = "20%";
  }
  if (valueScroll >= 1900) {
    blackScreen.style.opacity = "40%";
  }
  if (valueScroll >= 2000) {
    blackScreen.style.opacity = "60%";
  }
  if (valueScroll >= 2100) {
    blackScreen.style.opacity = "80%";
  }
  if (valueScroll >= 2200) {
    blackScreen.style.opacity = "100%";
  }

  // - FONDU OUT (1997)

  if (valueScroll >= 2400) {
    blackScreen.style.opacity = "80%";
  }
  if (valueScroll >= 2500) {
    blackScreen.style.opacity = "60%";
  }
  if (valueScroll >= 2600) {
    blackScreen.style.opacity = "40%";
  }
  if (valueScroll >= 2700) {
    blackScreen.style.opacity = "20%";
  }
  if (valueScroll >= 2800) {
    blackScreen.style.opacity = 0;
    blackScreen.style.display = "none";
  }

  // FONDU IN (1997-1998)

  if (valueScroll >= 6000) {
    if (screenWidth > 600) {
      blackScreen.style.display = "block";
    }
    blackScreen.style.opacity = "20%";
  }
  if (valueScroll >= 6100) {
    blackScreen.style.opacity = "40%";
  }
  if (valueScroll >= 6200) {
    blackScreen.style.opacity = "60%";
  }
  if (valueScroll >= 6300) {
    blackScreen.style.opacity = "100%";
  }

  //FONDU OUT (1998)

  if (valueScroll >= 6500) {
    blackScreen.style.opacity = "80%";
  }
  if (valueScroll >= 6600) {
    blackScreen.style.opacity = "30%";
  }
  if (valueScroll >= 6700) {
    blackScreen.style.opacity = 0;
    blackScreen.style.display = "none";
  }

  // FONDU IN (1998-2000)

  if (valueScroll >= 12800) {
    if (screenWidth > 600) {
      blackScreen.style.display = "block";
    }
    blackScreen.style.opacity = "100%";
  }

  //FONDU OUT (2000)

  if (valueScroll >= 13400) {
    blackScreen.style.opacity = "80%";
  }
  if (valueScroll >= 13500) {
    blackScreen.style.opacity = "60%";
  }
  if (valueScroll >= 13600) {
    blackScreen.style.opacity = "40%";
  }
  if (valueScroll >= 13700) {
    blackScreen.style.opacity = "20%";
  }
  if (valueScroll >= 13800) {
    blackScreen.style.opacity = 0;
    blackScreen.style.display = "none";
  }

  // FONDU IN (2004-2012) ORDI
  if (screenWidth >= 1100) {
    if (valueScroll >= 18000) {
      blackScreen.style.display = "block";

      blackScreen.style.opacity = "20%";
    }
    if (valueScroll >= 18100) {
      blackScreen.style.opacity = "40%";
    }
    if (valueScroll >= 18200) {
      blackScreen.style.opacity = "60%";
    }
    if (valueScroll >= 18300) {
      blackScreen.style.opacity = "100%";
    }

    //FONDU OUT (2012) ORDI

    if (valueScroll >= 18600) {
      blackScreen.style.opacity = "80%";
    }
    if (valueScroll >= 18800) {
      blackScreen.style.opacity = "30%";
    }
    if (valueScroll >= 18900) {
      blackScreen.style.opacity = 0;
      blackScreen.style.display = "none";
    }
  }

  // FONDU IN (2004-2012) PHONE
  if (screenWidth > 600 && screenWidth < 1100) {
    if (valueScroll >= 19500) {
      blackScreen.style.display = "block";

      blackScreen.style.opacity = "20%";
    }
    if (valueScroll >= 19900) {
      blackScreen.style.opacity = "40%";
    }
    if (valueScroll >= 20000) {
      blackScreen.style.opacity = "60%";
    }
    if (valueScroll >= 20100) {
      blackScreen.style.opacity = "100%";
    }

    //FONDU OUT (2012) PHONE

    if (valueScroll >= 20400) {
      blackScreen.style.opacity = "80%";
    }
    if (valueScroll >= 20500) {
      blackScreen.style.opacity = "30%";
    }
    if (valueScroll >= 20600) {
      blackScreen.style.opacity = 0;
      blackScreen.style.display = "none";
    }
  }

  // BACKGROUND IMAGE  // BACKGROUND IMAGE  // BACKGROUND IMAGE  // BACKGROUND IMAGE  // BACKGROUND IMAGE  // BACKGROUND IMAGE
  // BACKGROUND IMAGE  // BACKGROUND IMAGE  // BACKGROUND IMAGE  // BACKGROUND IMAGE  // BACKGROUND IMAGE  // BACKGROUND IMAGE
  // BACKGROUND IMAGE  // BACKGROUND IMAGE  // BACKGROUND IMAGE  // BACKGROUND IMAGE  // BACKGROUND IMAGE  // BACKGROUND IMAGE
  // BACKGROUND IMAGE  // BACKGROUND IMAGE  // BACKGROUND IMAGE  // BACKGROUND IMAGE  // BACKGROUND IMAGE  // BACKGROUND IMAGE
  // BACKGROUND IMAGE  // BACKGROUND IMAGE  // BACKGROUND IMAGE  // BACKGROUND IMAGE  // BACKGROUND IMAGE  // BACKGROUND IMAGE
  //
  if (valueScroll >= 0) {
    backgroundHistoire.style.backgroundImage = "url('')";
    backgroundHistoire.style.backgroundColor = "rgb(255 254 246)";
  }
  //
  if (valueScroll >= 500) {
    backgroundHistoire.style.backgroundImage =
      "linear-gradient(90deg,rgba(0,0,0,1)0%,rgba(0,0,0,0.3)50%,rgba(0,0,0,1)100%),linear-gradient(0deg,rgba(0,0,0,1)0%,rgba(0,0,0,0.3)50%,rgba(0,0,0,1)100%),url('/images/histoire/prehistoric 2.jpg')";

    backgroundHistoire.style.backgroundPosition = "center";
  }
  //
  if (valueScroll >= 2100) {
    backgroundHistoire.style.backgroundImage = "url('')";
    backgroundHistoire.style.backgroundColor = "black";
  }
  //
  if (valueScroll >= 6500) {
    backgroundHistoire.style.backgroundImage =
      "linear-gradient(90deg,rgba(0,0,0,1)0%,rgba(0,0,0,0.3)50%,rgba(0,0,0,1)100%),linear-gradient(0deg,rgba(0,0,0,1)0%,rgba(0,0,0,0.3)50%,rgba(0,0,0,1)100%),url('/images/histoire/bunker-src.jpg')";
    backgroundHistoire.style.backgroundColor = "";
  }

  if (valueScroll >= 10800) {
    backgroundHistoire.style.backgroundImage = "url('')";
    backgroundHistoire.style.backgroundColor = "black";
  }

  if (valueScroll >= 13500) {
    backgroundHistoire.style.backgroundImage = "url('')";
    backgroundHistoire.style.backgroundColor = "rgb(255 254 246)";
  }

  // before 2012
  if (screenWidth < 1100) {
    if (valueScroll >= 20100) {
      backgroundHistoire.style.backgroundImage = "url('')";
      backgroundHistoire.style.backgroundColor = "#ff3636";
    }
  }
  if (screenWidth >= 1100) {
    if (valueScroll >= 18400) {
      backgroundHistoire.style.backgroundImage = "url('')";
      backgroundHistoire.style.backgroundColor = "#ff3636";
    }
  }
  // after 2012 (2013)
  if (screenWidth < 380) {
    if (valueScroll >= 26000) {
      backgroundHistoire.style.backgroundImage = "url('')";
      backgroundHistoire.style.backgroundColor = "#6dd678";
    }
  }
  if (screenWidth >= 380 && screenWidth < 700) {
    if (valueScroll >= 23000) {
      backgroundHistoire.style.backgroundImage = "url('')";
      backgroundHistoire.style.backgroundColor = "#6dd678";
    }
  }
  if (screenWidth >= 700 && screenWidth < 1100) {
    if (valueScroll >= 22000) {
      backgroundHistoire.style.backgroundImage = "url('')";
      backgroundHistoire.style.backgroundColor = "#6dd678";
    }
  }
  if (screenWidth >= 1100) {
    if (valueScroll >= 21000) {
      backgroundHistoire.style.backgroundImage = "url('')";
      backgroundHistoire.style.backgroundColor = "#6dd678";
    }
  }
  if (screenWidth >= 1500) {
    if (valueScroll >= 20000) {
      backgroundHistoire.style.backgroundImage = "url('')";
      backgroundHistoire.style.backgroundColor = "#6dd678";
    }
  }
  //  2015
  if (screenWidth < 380) {
    if (valueScroll >= 28000) {
      backgroundHistoire.style.backgroundImage = "url('')";
      backgroundHistoire.style.backgroundColor = "#ffd600";
    }
  }
  if (screenWidth >= 380 && screenWidth < 700) {
    if (valueScroll >= 25000) {
      backgroundHistoire.style.backgroundImage = "url('')";
      backgroundHistoire.style.backgroundColor = "#ffd600";
    }
  }
  if (screenWidth >= 700 && screenWidth < 1100) {
    if (valueScroll >= 24000) {
      backgroundHistoire.style.backgroundImage = "url('')";
      backgroundHistoire.style.backgroundColor = "#ffd600";
    }
  }
  if (screenWidth >= 1100) {
    if (valueScroll >= 23000) {
      backgroundHistoire.style.backgroundImage = "url('')";
      backgroundHistoire.style.backgroundColor = "#ffd600";
    }
  }
  if (screenWidth >= 1500) {
    if (valueScroll >= 22000) {
      backgroundHistoire.style.backgroundImage = "url('')";
      backgroundHistoire.style.backgroundColor = "#ffd600";
    }
  }
  //  2021
  if (screenWidth < 380) {
    if (valueScroll >= 30000) {
      backgroundHistoire.style.backgroundImage = "url('')";
      backgroundHistoire.style.backgroundColor = "#bba7e7";
    }
  }
  if (screenWidth >= 380 && screenWidth < 700) {
    if (valueScroll >= 27000) {
      backgroundHistoire.style.backgroundImage = "url('')";
      backgroundHistoire.style.backgroundColor = "#bba7e7";
    }
  }
  if (screenWidth >= 700 && screenWidth < 1100) {
    if (valueScroll >= 26000) {
      backgroundHistoire.style.backgroundImage = "url('')";
      backgroundHistoire.style.backgroundColor = "#bba7e7";
    }
  }
  if (screenWidth >= 1100) {
    if (valueScroll >= 25000) {
      backgroundHistoire.style.backgroundImage = "url('')";
      backgroundHistoire.style.backgroundColor = "#bba7e7";
    }
  }
  if (screenWidth >= 1500) {
    if (valueScroll >= 24000) {
      backgroundHistoire.style.backgroundImage = "url('')";
      backgroundHistoire.style.backgroundColor = "#bba7e7";
    }
  }
  // final
  if (screenWidth < 380) {
    if (valueScroll >= 32000) {
      backgroundHistoire.style.backgroundImage = "url('')";
      backgroundHistoire.style.backgroundColor = "black";
    }
  }
  if (screenWidth >= 380 && screenWidth < 700) {
    if (valueScroll >= 29000) {
      backgroundHistoire.style.backgroundImage = "url('')";
      backgroundHistoire.style.backgroundColor = "black";
    }
  }
  if (screenWidth >= 700 && screenWidth < 1100) {
    if (valueScroll >= 28000) {
      backgroundHistoire.style.backgroundImage = "url('')";
      backgroundHistoire.style.backgroundColor = "black";
    }
  }
  if (screenWidth >= 1100) {
    if (valueScroll >= 27000) {
      backgroundHistoire.style.backgroundImage = "url('')";
      backgroundHistoire.style.backgroundColor = "black";
    }
  }
  if (screenWidth >= 1500) {
    if (valueScroll >= 26000) {
      backgroundHistoire.style.backgroundImage = "url('')";
      backgroundHistoire.style.backgroundColor = "black";
    }
  }
}

window.addEventListener("scroll", AnimationsHistoire);

const DateNav = ref(true);
</script>

<template>
  <!--NAVIGATION PAR MEATBALL-->
  <div
    class="w-fit top-0 right-0 flex lg:flex-row-reverse flex-col items-center justify-center p-10 gap-3 fixed z-40"
  >
    <button @click="DateNav = !DateNav">
      <MenuMeat class="w-5 md:w-8 h-5 md:h-8" />
    </button>
    <ul
      class="flex justify-center text-gray-200 drop-shadow-md gap-5"
      :class="{ hidden: DateNav === true }"
    >
      <li>
        <a href="#an1991">1991</a>
      </li>
      <li>
        <a href="#an1997">1997</a>
      </li>
      <li>
        <a href="#an1998">1998</a>
      </li>
      <li>
        <a href="#an2000">2000</a>
      </li>
      <li>
        <a href="#an2004">2004</a>
      </li>
      <li>
        <a href="#an2012">2012</a>
      </li>
      <li>
        <a href="#an2021">2021</a>
      </li>
    </ul>
  </div>

  <!--BACKGROUND OF PAGE-->
  <div
    class="histoire-background fixed h-screen w-full -z-[20] inset-0 bg-beige bg-cover bg-origin-padding"
  ></div>

  <!--ECRAN NOIR POUR EFFETS-->
  <div
    class="histoire-blackscreen hidden md:block fixed h-screen w-full bg-black z-[4] inset-0 opacity-0"
  ></div>
  <!--ECRAN NOIR POUR EFFETS-->

  <article class="flex justify-center items-center flex-col gap-[50rem] w-full">
    <!--SECTION D'INTRO-->
    <section
      class="histoire-defilement w-full h-screen flex justify-center items-center"
    >
      <div
        class="flex flex-col text-white md:flex-row gap-5 md:gap-20 text-center md:text-start justify-end md:justify-center items-center md:items-end p-2"
      >
        <div class="flex flex-col uppercase invert">
          <h1 class="mmi-h1">L'histoire</h1>
          <p>Du département MMI</p>
        </div>
        <!--bounce-->
        <section
          class="font-normal mmi-texte text-center flex flex-col justify-center items-center gap-2 animate-bounce"
        >
          <mouseIcon class="w-12 h-12 stroke-black"></mouseIcon>

          <!--
            ANCIEN ICON (DOUBLE CERCLE)
          <div>
            <div
              class="w-12 h-12 border-2 border-black rounded-full flex justify-center items-center"
            >
              <div class="w-8 h-8 bg-black rounded-full"></div>
            </div>
          </div>-->

          <p class="text-black">scroll to&nbsp;begin...</p>
        </section>
        <!--bounce-->
      </div>
    </section>
    <!--SECTION D'INTRO-->

    <!--SECTION 1991-->
    <!--SECTION 1991-->
    <!--SECTION 1991-->
    <div
      class="w-full bg-beige bg-opacity-30 flex justify-center items-center py-10"
    >
      <An1991 id="an1991"></An1991>
    </div>
    <!--SECTION 1991-->

    <!--SECTION 1997-->
    <!--SECTION 1997-->
    <!--SECTION 1997-->
    <div class="mt-[35rem]" id="an1997">
      <An1997 />
    </div>
    <!--SECTION 1997-->

    <!--SECTION 97-98-->
    <!--SECTION 97-98-->
    <!--SECTION 97-98-->
    <div class="mt-[20rem]" id="an1998">
      <An1998 />
    </div>

    <!--SECTION 2000-->
    <!--SECTION 2000-->
    <!--SECTION 2000-->
    <div class="mt-[100rem]" id="an2000">
      <An2000 />
    </div>

    <!--SECTION 2004-->
    <!--SECTION 2004-->
    <!--SECTION 2004-->
    <div id="an2004">
      <An2004 />
    </div>
    <!--SECTION 2012 & 2013-->
    <!--SECTION 2012 & 2013-->
    <!--SECTION 2012 & 2013-->
    <div id="an2012">
      <An2012 class="mt-[60rem]" />
    </div>
    <!--SECTION 2015-->
    <!--SECTION 2015-->
    <!--SECTION 2015-->
    <div id="an2015">
      <An2015 class="mt-[60rem] w-full mx-0" />
    </div>
    <!--SECTION 2021-->
    <!--SECTION 2021-->
    <!--SECTION 2021-->
    <div id="an2021">
      <An2021 class="mt-[30rem] w-full mx-0" />
    </div>
    <!--SECTION FINALE-->
    <!--SECTION FINALE-->
    <!--SECTION FINALE-->
    <div>
      <FinFrise class="mt-[30rem] w-full mx-0" />
    </div>
  </article>
</template>
<style scoped></style>
