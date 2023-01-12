<script setup>
import { ref } from "vue";
import OeuvreComponent from "@/components/OeuvreComponent.vue";
let clickedImage = ref(false);
let removeScroll = ref(false);
</script>

<template>
  <article class="m-5 md:m-10">
    <!--OEUVRES MOBILE-->
    <section class="w-11/12 m-auto my-10 md:hidden">
      <div class="h-screen">
        <div class="grid grid-cols-2 grid-rows-4 h-full">
          <OeuvreComponent
            :sourceImage="'oeuvre8.jpg'"
            :auteur="'Moi'"
            :nom="'Testeur'"
            :description="'Cette oeuvre a été réalisée par Y.'"
          />
          <OeuvreComponent
            :sourceImage="'oeuvre1.jpg'"
            :auteur="'Moi'"
            :nom="'Testeur'"
            :description="'Cette oeuvre a été réalisée par Y.'"
          />
          <OeuvreComponent
            :sourceImage="'oeuvre2.jpg'"
            :auteur="'Moi'"
            :nom="'Testeur'"
            :description="'Cette oeuvre a été réalisée par Y.'"
          />
          <OeuvreComponent
            :sourceImage="'oeuvre3.jpg'"
            :auteur="'Moi'"
            :nom="'Testeur'"
            :description="'Cette oeuvre a été réalisée par Y.'"
          />
          <OeuvreComponent
            :sourceImage="'oeuvre4.jpg'"
            :auteur="'Moi'"
            :nom="'Testeur'"
            :description="'Cette oeuvre a été réalisée par Y.'"
          />
          <!--
                SI UNE NEUVIEME OEUVRE EST A AFFICHER !!
              <OeuvreComponent
                :sourceImage="'oeuvre-test.jpg'"
                :auteur="'Moi'"
                :nom="'Testeur'"
                :description="'Cette oeuvre a été réalisée par Y.'"
              />
              -->
          <OeuvreComponent
            :sourceImage="'oeuvre5.jpg'"
            :auteur="'Moi'"
            :nom="'Mon oeuvre a un nom hyper long super hahahahaha'"
            :description="'Cette oeuvre a été réalisée par Y.'"
          />
          <OeuvreComponent
            :sourceImage="'oeuvre6.jpg'"
            :auteur="'Moi'"
            :nom="'Testeur'"
            :description="'Cette oeuvre a été réalisée par Y.'"
          />
          <OeuvreComponent
            :sourceImage="'oeuvre7.jpg'"
            :auteur="'Moi'"
            :nom="'Testeur'"
            :description="'Cette oeuvre a été réalisée par Y.'"
          />
        </div>
      </div>
    </section>

    <!--OEUVRES TAB,ORDI,+-->
    <section class="w-11/12 m-auto my-10 hidden md:block">
      <div class="flex flex-col gap-0 h-screen">
        <div class="grid grid-cols-[60%_40%] h-2/3">
          <div class="grid grid-rows-[55%_45%]">
            <div class="grid grid-cols-2">
              <OeuvreComponent
                :sourceImage="'oeuvre8.jpg'"
                :auteur="'Moi'"
                :nom="'Testeur'"
                :description="'Cette oeuvre a été réalisée par Y.'"
              />
              <OeuvreComponent
                :sourceImage="'oeuvre1.jpg'"
                :auteur="'Moi'"
                :nom="'Testeur'"
                :description="'Cette oeuvre a été réalisée par Y.'"
              />
            </div>
            <OeuvreComponent
              :sourceImage="'oeuvre2.jpg'"
              :auteur="'Moi'"
              :nom="'Testeur'"
              :description="'Cette oeuvre a été réalisée par Y.'"
            />
          </div>
          <div class="grid grid-rows-2">
            <OeuvreComponent
              :sourceImage="'oeuvre3.jpg'"
              :auteur="'Moi'"
              :nom="'Testeur'"
              :description="'Cette oeuvre a été réalisée par Y.'"
            />
            <OeuvreComponent
              :sourceImage="'oeuvre4.jpg'"
              :auteur="'Moi'"
              :nom="'Testeur'"
              :description="'Cette oeuvre a été réalisée par Y.'"
            />
            <!--
              SI UNE NEUVIEME OEUVRE EST A AFFICHER !!
            <OeuvreComponent
              :sourceImage="'oeuvre-test.jpg'"
              :auteur="'Moi'"
              :nom="'Testeur'"
              :description="'Cette oeuvre a été réalisée par Y.'"
            />
            -->
          </div>
        </div>
        <div class="grid grid-cols-3 h-1/3">
          <OeuvreComponent
            :sourceImage="'oeuvre5.jpg'"
            :auteur="'Moi'"
            :nom="'Mon oeuvre a un nom hyper long super hahahahaha'"
            :description="'Cette oeuvre a été réalisée par Y.'"
          />
          <OeuvreComponent
            :sourceImage="'oeuvre6.jpg'"
            :auteur="'Moi'"
            :nom="'Testeur'"
            :description="'Cette oeuvre a été réalisée par Y.'"
          />
          <OeuvreComponent
            :sourceImage="'oeuvre7.jpg'"
            :auteur="'Moi'"
            :nom="'Testeur'"
            :description="'Cette oeuvre a été réalisée par Y.'"
          />
        </div>
      </div>
    </section>
    <!--Partie textuelle-->
    <!--Partie textuelle-->
    <!--Partie textuelle-->
    <!--Partie textuelle-->
    <section
      class="flex flex-col lg:flex-row justify-center items-center gap-0 lg:gap-20"
    >
      <div class="max-w-5xl">
        <h2 class="mmi-h2 text-center lg:text-left">Le dev au MMI</h2>
        <div class="flex flex-col gap-5">
          <p>
            Le pôle développement est aussi important dans le cursus MMI. Au
            cours des trois années de BUT les élèves apprennent à développer le
            web. Ceci grâce à l'apprentissage de différents langages de
            programmation et d'intégration comme l'HTML, le CSS, le Javascript,
            et d'autres. L'apprentissage de librairie comme Tailwind CSS fait
            aussi partie du cursus de MMI. Le développement est la base de tout
            ce qui est présent sur le web, il est donc important de s'y pencher
            pour mieux comprendre ce milieu et être capable d'y évoluer.
          </p>
          <p>
            Les étudiants du web vont apprendre à coder les sites web dans
            différents langages informatiques. Ils vont autant apprendre à coder
            et gérer le front, c'est à dire ce qui est visible sur le site, que
            le back, c'est à dire tout ce qui se fait derrière le site web pour
            faire fonctionner les fonctionnalités du site notamment. Ils vont
            être préparés à des métiers comme intégrateur web, développeur web,
            administrateur de bases de données, Data Visualist...
          </p>
          <p>
            Pour le front, les étudiants vont apprendre à respecter la maquette,
            créer par le designer, dans leur codage, et à s'adapter. Ils vont
            principalement utiliser des langages comme HTML, CSS, et des
            librairies de style comme TailWind CSS. C'est là le métier de
            l'intégrateur web. Les étudiants vont apprendre à utiliser d'autres
            librairies comme ChartJs : elle leur permettra de créer des
            graphiques d'analyse pour les entreprises. C'est le métier de Data
            Visualist.
          </p>
          <p>
            Dans le back, les étudiants vont par exemple gérer des bases de
            données pour créer des fonctionnalités sur les sites web comme la
            création de comptes, les éléments de gestion de site e-commerce,
            etc. Les fonctionnalités d'un site sont infinis c'est pourquoi le
            métier de développeur web demande une bonne capacité d'adaptation et
            de veille.
          </p>
        </div>
      </div>
      <!--2525252525-->
      <div class="ml-auto w-full md:w-fit text-5xl md:text-8xl my-10">
        <div class="flex-col flex max-w-xl w-full boxDefilementText">
          <p class="font-thin object1">
            252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525
          </p>
          <p class="font-thin object2">
            252525252525<strong class="font-bold">25</strong
            >25252525252525252525252525252525252525252525252525252525252525
          </p>
          <p class="font-thin object3">
            252525252525252525252525252525252525252525252525252525252525252525252525
          </p>
        </div>
      </div>
      <!--2525252525-->
    </section>
  </article>
  <!--Prof principal : M. FINO-->
  <div
    class="flex flex-col lg:flex-row justify-center items-center gap-10 w-full bg-black text-white px-5 py-10"
  >
    <!--IMAGE MONSIEUR FINO-->
    <div
      class="m-auto lg:m-0 mmi-photo bg-center bg-contain bg-no-repeat transition-all"
      @mouseenter="clickedImage = !clickedImage"
      @mouseleave="clickedImage = !clickedImage"
    >
      <img
        src="/images/JM-Fino.jpg"
        alt="Photo de Jean Marie Fino"
        class="max-w-lg m-auto mmi-photo-2"
      />
    </div>
    <!--IMAGE MONSIEUR FINO-->

    <div class="max-w-xl flex flex-col gap-4">
      <h3 class="mmi-h2 text-5xl">Jean-Marie Fino</h3>
      <p>
        Monsieur Jean-Marie Fino est un membre important de MMI car il est l'un
        des fondateurs du département, à l'époque MMI s'appelait SRC. Il est un
        bon représentant du pôle développement car il est lui-même développeur
        full stack. Il est chargé de l'apprentissage des langages d'intégration
        et de développement web.
      </p>
    </div>
  </div>
  <!--Prof principal : M. FINO-->

  <article class="m-5 md:m-10">
    <section
      class="flex flex-col-reverse lg:flex-row justify-between items-start md:items-center w-full my-10 md:mt-20"
    >
      <!---25252525 des autres profs-->
      <div class="w-full lg:max-w-sm text-5xl md:text-8xl">
        <div class="flex-col flex w-full boxDefilementText my-10">
          <p class="font-thin object1">
            252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525
          </p>
          <p class="font-thin object2">
            252525252525<strong class="font-bold">25</strong
            >25252525252525252525252525252525252525252525252525252525252525
          </p>
          <p class="font-thin object3">
            252525252525252525252525252525252525252525252525252525252525252525252525
          </p>
        </div>
      </div>
      <!--2525252525-->

      <div class="flex flex-col gap-10 max-w-5xl w-full">
        <h2 class="uppercase mmi-h2 text-center">Les autres profs de dev'</h2>
        <div class="grid grid-cols-galerie-profs-2 gap-10 w-full">
          <div class="flex flex-col gap-3 items-center">
            <img
              src="/images/P-Chatonnay.jpg"
              alt="photo Monsieur Chatonnay"
              class="mmi-photo-2"
            />
            <p class="font-neuemontreal">Pascal Chatonnay</p>
          </div>

          <div class="flex flex-col gap-3 items-center">
            <img
              src="/images/PASDEPHOTO.jpg"
              alt="photo inconnue"
              class="mmi-photo-2"
            />
            <p class="font-neuemontreal">Pierre Pracht</p>
          </div>
          <div class="flex flex-col gap-3 items-center">
            <img
              src="/images/H-Mabed.jpg"
              alt="Photo Monsieur Mabed"
              class="mmi-photo-2"
            />
            <p class="font-neuemontreal">Hakim Mabed</p>
          </div>
          <div class="flex flex-col gap-3 items-center">
            <img
              src="/images/PASDEPHOTO.jpg"
              alt="photo inconnue"
              class="mmi-photo-2"
            />
            <p class="font-neuemontreal">Abdallah Makoul</p>
          </div>
          <div class="flex flex-col gap-3 items-center">
            <img
              src="/images/W-Yvart.jpg"
              alt="photo Monsieur Yvart"
              class="mmi-photo-2"
            />
            <p class="font-neuemontreal">Willy Yvart</p>
          </div>
          <div class="flex flex-col gap-3 items-center">
            <img
              src="/images/PASDEPHOTO.jpg"
              alt="photo inconnue"
              class="mmi-photo-2"
            />
            <p class="font-neuemontreal">Christelle Bloch</p>
          </div>
          <div class="flex flex-col gap-3 items-center">
            <img
              src="/images/PASDEPHOTO.jpg"
              alt="photo inconnue"
              class="mmi-photo-2"
            />
            <p class="font-neuemontreal">Robin Heckenauer</p>
          </div>
          <div class="flex flex-col gap-3 items-center">
            <img
              src="/images/PASDEPHOTO.jpg"
              alt="photo inconnue"
              class="mmi-photo-2"
            />
            <p class="font-neuemontreal">Isabelle Laforgue</p>
          </div>
        </div>
      </div>
    </section>
  </article>
</template>

<style scoped>
.boxDefilementText {
  overflow: hidden;
}

.boxDefilementText > .object1 {
  display: inline-block; /* modèle de boîte en ligne */
  padding-left: 50%;
  white-space: nowrap; /* pas de passage à la ligne */
  animation: defilement-rtl 20s infinite ease-in-out;
}

/** */
/** */
/** */
/*ELEMENT REVERSE*/
.boxDefilementText > .object2 {
  display: inline-block; /* modèle de boîte en ligne */
  margin-left: -50%;
  white-space: nowrap; /* pas de passage à la ligne */

  animation: defilement-rtl-reverse 40s infinite ease-in-out;
}
/*ELEMENT REVERSE*/
/** */
/** */
/** */

.boxDefilementText > .object3 {
  display: inline-block; /* modèle de boîte en ligne */
  padding-left: 50%;
  white-space: nowrap; /* pas de passage à la ligne */
  animation: defilement-rtl 30s infinite ease-in-out;
}

@keyframes defilement-rtl {
  0% {
    transform: translate3d(-50%, 0, 0); /* position initiale à droite */
  }
  50% {
    transform: translate3d(-200%, 0, 0); /* position finale à gauche */
  }
  100% {
    transform: translate3d(-50%, 0, 0); /* position finale à gauche */
  }
}

@keyframes defilement-rtl-reverse {
  0% {
    transform: translate3d(-15%, 0, 0); /* position initiale à droite */
  }
  50% {
    transform: translate3d(30%, 0, 0); /* position finale à gauche */
  }
  100% {
    transform: translate3d(-15%, 0, 0); /* position finale à gauche */
  }
}
</style>
