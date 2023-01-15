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
            :sourceImage="'oeuvre9.jpg'"
            :auteur="'Moi'"
            :nom="'Testeur'"
            :description="'Cette oeuvre a été réalisée par Y.'"
          />
          <OeuvreComponent
            :sourceImage="'oeuvre10.jpg'"
            :auteur="'Moi'"
            :nom="'Testeur'"
            :description="'Cette oeuvre a été réalisée par Y.'"
          />
          <OeuvreComponent
            :sourceImage="'oeuvre11.jpg'"
            :auteur="'Moi'"
            :nom="'Testeur'"
            :description="'Cette oeuvre a été réalisée par Y.'"
          />
          <OeuvreComponent
            :sourceImage="'oeuvre12.jpg'"
            :auteur="'Moi'"
            :nom="'Testeur'"
            :description="'Cette oeuvre a été réalisée par Y.'"
          />
          <OeuvreComponent
            :sourceImage="'oeuvre13.jpg'"
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
            :sourceImage="'oeuvre1.jpg'"
            :auteur="'Moi'"
            :nom="'Mon oeuvre a un nom hyper long super hahahahaha'"
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
                :sourceImage="'oeuvre9.jpg'"
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
              :sourceImage="'oeuvre10.jpg'"
              :auteur="'Moi'"
              :nom="'Testeur'"
              :description="'Cette oeuvre a été réalisée par Y.'"
            />
          </div>
          <div class="grid grid-rows-2">
            <OeuvreComponent
              :sourceImage="'oeuvre11.jpg'"
              :auteur="'Moi'"
              :nom="'Testeur'"
              :description="'Cette oeuvre a été réalisée par Y.'"
            />
            <OeuvreComponent
              :sourceImage="'oeuvre12.jpg'"
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
            :sourceImage="'oeuvre13.jpg'"
            :auteur="'Moi'"
            :nom="'Mon oeuvre a un nom hyper long super hahahahaha'"
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
        <h2 class="mmi-h2 text-center lg:text-left">La création au MMI...</h2>
        <div class="flex flex-col gap-5">
          <p>
            Le pôle Création est celui qui contient les matières artistiques.
            Design, Graphisme, Motion Design, Audiovisuel, Narration, toutes ces
            matières font partie de ce pôle. Le design est tout aussi important
            que la communication et le développement. Par définition c'est la
            façade du web et souvent c'est ce que l'on retient en premier d'un
            site internet. Mis à part ça, le design est une partie importante de
            notre vie : en effet, les visuels sont importants pour communiquer
            avec les sociétés modernes.
          </p>
          <p>
            Comme nous l'avons dit plus haut, les étudiants étudient en
            choississant le pôle création comment bien filmer, à monter une
            vidéo de A à Z, à créer une identité graphique pour une entreprise :
            du logo en passant par les couleurs significatives de la marque, il
            va également imaginer les maquettes de sites web.
          </p>
          <p>
            Le pôle création va permettre à nos étudiants de mettre en avant
            plusieurs compétences et qualités comme l'imagination, la
            créativité, le sens de la mise en forme, l'écoute et le respect
            vis-à-vis de la demande du commanditaire.
          </p>
          <p>
            De nombreux logiciels sont utilisés dans ce module. Par exemple,
            Figma ou Adobe XD seront utiles pour la création des maquettes de
            site. Pour réaliser des chartes graphiques, les étudiants
            utiliserons davantage Adobe InDesign. Pour créer des logos nos
            étudiants vont se servir du logiciel de la suite Adobe Illustrator,
            et pour la retouche de photos nous utilisons Adobe Photoshop. Nos
            étudiants vont également faire du motion design lors de leur
            parcours en création. Ainsi, ils vont apprendre à se servir du
            logiciel Adobe AfterEffects.
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
  <!--Prof principal : M. SENENTE-->
  <div
    class="flex flex-col lg:flex-row justify-center items-center gap-10 w-full bg-black text-white px-5 py-10"
  >
    <!--IMAGE MONSIEUR SENENTE-->
    <div
      class="bg-senente1 m-auto lg:m-0 mmi-photo bg-center bg-contain bg-no-repeat transition-all"
      :class="{
        'bg-senente2': clickedImage === true,
      }"
      @mouseenter="clickedImage = !clickedImage"
      @mouseleave="clickedImage = !clickedImage"
    ></div>
    <!--IMAGE MONSIEUR SENENTE-->

    <div class="max-w-xl flex flex-col gap-4">
      <h3 class="mmi-h2 text-5xl">Xavier Senente</h3>
      <p>
        Monsieur Xavier Senente est le professeur principal du pôle créatif de
        MMI. Il est chargé de l'apprentissage des logiciels de design et de
        graphisme, mais aussi des logiciels de prototypages pour la composition
        des maquettes de site internet. Il enseigne aussi l'art du branding
        (créer un logo, une identité graphique... ) tout en apportant une
        culture artistique aux élèves.
      </p>
    </div>
  </div>
  <!--Prof principal : M. SENENTE-->

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
        <h2 class="uppercase mmi-h2 text-center">
          Les autres profs de création
        </h2>
        <div class="grid grid-cols-galerie-profs-2 gap-2 w-full">
          <div class="flex flex-col gap-3 items-center">
            <img
              src=" src/assets/images/A-Lamboux_Durand.jpg"
              alt="photo Monsieur Lamboux-Durant"
              class="mmi-photo-2"
            />
            <p class="font-neuemontreal">Alain LAMBOUX-DURAND</p>
          </div>

          <div class="flex flex-col gap-3 items-center">
            <img
              src=" src/assets/images/S-Augier.jpg"
              alt="Photo Monsieur Augier"
              class="mmi-photo-2"
            />
            <p class="font-neuemontreal">Sebastien AUGIER</p>
          </div>

          <div class="flex flex-col gap-3 items-center">
            <img
              src=" src/assets/images/Q-Gianella.jpg"
              alt="Photo Monsieur Gianella"
              class="mmi-photo-2"
            />
            <p class="font-neuemontreal">Quentin Gianella</p>
          </div>
          <div class="flex flex-col gap-3 items-center">
            <img
              src=" src/assets/images/T-Hulin.jpg"
              alt="Photo Monsieur Hulin"
              class="mmi-photo-2 object-cover object-center"
            />
            <p class="font-neuemontreal">Thibaud Hulin</p>
          </div>
          <div class="flex flex-col gap-3 items-center">
            <img
              src=" src/assets/images/PASDEPHOTO.jpg"
              alt="Photo inconnue"
              class="mmi-photo-2 border-2 border-black"
            />
            <p class="font-neuemontreal">Myriam Nicolle</p>
          </div>

          <div class="flex flex-col gap-3 items-center">
            <img
              src=" src/assets/images/PASDEPHOTO.jpg"
              alt="Photo inconnue"
              class="mmi-photo-2 border-2 border-black"
            />
            <p class="font-neuemontreal">Didier Florentz</p>
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
