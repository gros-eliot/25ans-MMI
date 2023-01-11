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
          :sourceImage="'oeuvre8.png'"
                :auteur="'Moi'"
                :nom="'Testeur'"
                :description="'Cette oeuvre a été réalisée par Y.'"/>
          <OeuvreComponent
            :sourceImage="'oeuvre1.png'"
            :auteur="'Moi'"
            :nom="'Testeur'"
            :description="'Cette oeuvre a été réalisée par Y.'"
          />
          <OeuvreComponent
            :sourceImage="'oeuvre2.png'"
            :auteur="'Moi'"
            :nom="'Testeur'"
            :description="'Cette oeuvre a été réalisée par Y.'"
          />
          <OeuvreComponent
            :sourceImage="'oeuvre3.png'"
            :auteur="'Moi'"
            :nom="'Testeur'"
            :description="'Cette oeuvre a été réalisée par Y.'"
          />
          <OeuvreComponent
            :sourceImage="'oeuvre4.png'"
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
            :sourceImage="'oeuvre5.png'"
            :auteur="'Moi'"
            :nom="'Mon oeuvre a un nom hyper long super hahahahaha'"
            :description="'Cette oeuvre a été réalisée par Y.'"
          />
          <OeuvreComponent
            :sourceImage="'oeuvre6.png'"
            :auteur="'Moi'"
            :nom="'Testeur'"
            :description="'Cette oeuvre a été réalisée par Y.'"
          />
          <OeuvreComponent
            :sourceImage="'oeuvre7.png'"
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
              :sourceImage="'oeuvre8.png'"
                :auteur="'Moi'"
                :nom="'Testeur'"
                :description="'Cette oeuvre a été réalisée par Y.'"/>
              <OeuvreComponent
                :sourceImage="'oeuvre1.png'"
                :auteur="'Moi'"
                :nom="'Testeur'"
                :description="'Cette oeuvre a été réalisée par Y.'"
              />
            </div>
            <OeuvreComponent
              :sourceImage="'oeuvre2.png'"
              :auteur="'Moi'"
              :nom="'Testeur'"
              :description="'Cette oeuvre a été réalisée par Y.'"
            />
          </div>
          <div class="grid grid-rows-2">
            <OeuvreComponent
              :sourceImage="'oeuvre3.png'"
              :auteur="'Moi'"
              :nom="'Testeur'"
              :description="'Cette oeuvre a été réalisée par Y.'"
            />
            <OeuvreComponent
              :sourceImage="'oeuvre4.png'"
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
            :sourceImage="'oeuvre5.png'"
            :auteur="'Moi'"
            :nom="'Mon oeuvre a un nom hyper long super hahahahaha'"
            :description="'Cette oeuvre a été réalisée par Y.'"
          />
          <OeuvreComponent
            :sourceImage="'oeuvre6.png'"
            :auteur="'Moi'"
            :nom="'Testeur'"
            :description="'Cette oeuvre a été réalisée par Y.'"
          />
          <OeuvreComponent
            :sourceImage="'oeuvre7.png'"
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
        <h2 class="mmi-h2 text-center lg:text-left">La com' au MMI</h2>
        <div class="flex flex-col gap-5">
        <p>
          Le pôle communication de MMI fait partie des trois grandes thématiques
          qu’aborde MMI dans son cursus. La communication est très importante
          dans le milieu du web car elle permet aux différents projets de vivre
          et de se faire une place dans les esprits. De plus, la communication
          régie toutes les parties qui précèdent le lancement d’un projet comme
          des analyses concurrentielles ou la gestion du budget.
        </p>
        <p>En BUT MMI, les élèves apprennent différentes formes de communication.
          Ils apprennent par exemple les lois qui s'impliquent à Internet, à réaliser 
          un dossier de communication entier pour présenter un projet, à estimer un 
          budget et faire les demandes de subventions, à monter une identité sur les 
          réseaux sociaux, à créer un calendrier de publications, à entretenir les 
          comptes et l'image de marque ou encore à rédiger et imaginer des posts pour 
          les réseaux sociaux avec le contenu en fonction des cibles.
        </p>
        <p>Les étudiants étudient également la communication dans la langue anglaise avec leur
          professeur Lydia Dubois, afin d'acquérir un vocabulaire riche et complet dans leur 
          branche professionnel. Ils sont ainsi capables de réaliser des publications, des contenus
          et des dossiers complets bilingues.
        </p>
        <p>Dans le cadre de leurs projets, les étudiants vont réaliser de la communication 
          plus concrète avec des dossiers, gestion d'un budget, réelle création de comptes
          et de gestion des réseaux sociaux. Ils peuvent également toucher au domaine de
          l'événementiel, avec la création de l'événement et de la communcation liée.
          Les élèves qui se spécialisent ensuite dans la communication auront accès à des métiers
          comme référenceur web, communicaty manager, chef de projet, chargé de communication,
          rédacteur web,...
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
  <!--Prof principal : M. MALSOT-->
  <div
    class="flex flex-col lg:flex-row justify-center items-center gap-10 w-full bg-black text-white px-5 py-10"
  >
    <!--IMAGE MONSIEUR MALSOT-->
    <div
      class="bg-malsot1 m-auto lg:m-0 image-prof bg-center bg-contain bg-no-repeat transition-all"
      :class="{
        'bg-malsot2': clickedImage === true,
      }"
      @mouseenter="clickedImage = !clickedImage"
      @mouseleave="clickedImage = !clickedImage"
    ></div>
    <!--IMAGE MONSIEUR MALSOT-->

    <div class="max-w-xl flex flex-col gap-4">
      <h3 class="mmi-h2 text-5xl">David Malsot</h3>
      <p>
        Monsieur David Malsot est l’un des professeurs principaux de MMI mais
        est aussi en grande partie chargé de l’initiation à la communication
        pour les élèves de première année. Il est un professeur important pour
        le département depuis ses multiples implications que ce soit dans
        l’enseignement ou encore dans les évènements en rapport avec le
        département.
      </p>
    </div>
  </div>
  <!--Prof principal : M. MALSOT-->

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
        <h2 class="uppercase mmi-h2 text-center">Les autres profs de com'</h2>
        <div class="grid grid-cols-galerie-profs-2 gap-10 w-full">
          <div class="flex flex-col gap-3 items-center">
            <img
              src="../../public/images/L-Dubois.jpg"
              alt="Photo Madame Dubois"
              class="image-prof-2"
            />
            <p class="font-neuemontreal">Lydia Dubois</p>
          </div>

          <div class="flex flex-col gap-3 items-center">
            <img
              src="../../public/images/JC-Domenget.jpg"
              alt="photo Monsieur Domenget"
              class="image-prof-2"
            />
            <p class="font-neuemontreal">Jean-Claude Domenget</p>
          </div>
          <div class="flex flex-col gap-3 items-center">
            <img
              src="../../public/images/S-Laurent.jpg"
              alt="Photo Monsieur Laurent"
              class="image-prof-2"
            />
            <p class="font-neuemontreal">Stephane Laurent</p>
          </div>
        </div>
      </div>
    </section>
  </article>
</template>

<style>
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
