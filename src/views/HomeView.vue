<script setup>
import Logo from "@/components/icons/logo.vue";

function Function252525() {
  let box25 = document.querySelector(".animationHome");
  let valueScroll = window.pageYOffset;
  box25.style.letterSpacing = valueScroll / 20 + "px";
  box25.style.opacity = 100 - valueScroll / 6 + "%";
}
window.addEventListener("scroll", Function252525);
</script>

<template>
  <!--2525252525-->
  <div
    class="flex-col flex text-8xl max-w-3xl w-full boxDefilementText animationHome my-10 font-thin"
  >
    <p class="object1">
      252525252525252525252525252525252525252525252525252525252525252525252525
      252525252525252525252525252525252525252525252525252525252525252525252525
    </p>

    <p class="object2">
      2525252525252525<strong class="font-bold">25</strong
      >25252525252525252525252525252525252525252525252525252525
    </p>

    <p class="object3">
      252525252525252525252525252525252525252525252525252525252525252525252525
    </p>
  </div>
  <!--2525252525-->
  <div
    class="text-center flex flex-col gap-10 bg-black w-full text-beige py-5 my-20 overflow-x-hidden"
  >
    <section>
      <!--lignes de vitesse-->
      <div
        class="w-1/2 overflow-hidden my-4 bg-white h-1 opacity-20 lines1"
      ></div>
      <!--lignes de vitesse-->
      <div
        class="w-1/2 overflow-hidden my-4 bg-white h-1 opacity-20 lines2"
      ></div>
    </section>

    <h2 class="mmi-h2">L'histoire du MMI</h2>
    <p>
      Découvrez l'histoire du MMI depuis sa fondation grâce à une frise
      interactive.
    </p>
    <RouterLink to="/histoire">
      <button
        class="hover:bg-beige hover:text-black hover:border-black border-t border-l-4 border-b-4 border-r px-5 py-2 font-bold z-10 bg-black border-beige text-beige"
      >
        Découvrir
      </button>
    </RouterLink>

    <section>
      <!--lignes de vitesse-->
      <div
        class="w-1/2 overflow-hidden my-4 bg-white h-1 opacity-20 lines3"
      ></div>
      <!--lignes de vitesse-->
      <div
        class="w-1/2 overflow-hidden my-4 bg-white h-1 opacity-20 lines4"
      ></div>
    </section>
  </div>

  <div class="flex flex-col gap-10 p-6 md:p-10">
    <section
      class="flex flex-row justify-between items-center md:gap-20 lg:gap-32"
    >
      <div class="flex flex-col gap-20">
        <div class="flex flex-col gap-3">
          <h2 class="mmi-h2">25 ANS&nbsp;!</h2>
          <p>
            25 ans ça se fête ! Pour son quart de siècle MMI Montbéliard
            organise un concours d’oeuvre numérique ! Le but ? Laissez une
            trace, car oui l’oeuvre gagnante sera transformer en NFT pour rester
            à jamais dans la Blockchain ! Alors ? Partant ?
          </p>
          <p class="font-semibold">
            Vous pouvez commencer par voter pour votre oeuvre préféré à travers
            les différentes salles de ce musée digital !
          </p>
        </div>
        <div class="flex flex-col gap-3">
          <h2 class="mmi-h2">Qu'est-ce que MMI&nbsp;?</h2>
          <p>
            Le BUT MMI ou Bachelor Universitaire technique Métiers du Multimédia
            et de l’Internet est un curcus universitaire. MMI c’est plus que des
            années d’apprentissage, c’est une expérience personnelle comme
            sociale. Un état d’esprit qui réuni tout les élèves et qui fait
            vivre le département. Du design en passant par la communication et
            le développement web, MMI apprends à tous les prérequis pour
            travailler dans le WEB.
          </p>
        </div>
      </div>

      <div>
        <Logo
          class="p-4 w-72 h-72 stroke-black stroke-2 hidden md:block movingLogo"
        />
      </div>
    </section>
  </div>
  <!--SECTION PROFS-->
  <div class="flex flex-col gap-8 p-6 md:p-10">
    <h2 class="mmi-h2">Les professeurs & co</h2>
    <p>MMI ne serait rien sans les personnes présentées ci-dessous !</p>
    <div
      class="grid grid-cols-galerie-profs gap-10 justify-items-center place-items-start"
    >
      <!--cadre-->
      <div class="prof-homepage">
        <img
          src="/images/A-Lamboux_Durand.jpg"
          alt="Alain Lamboux-Durand"
          class="mmi-photo-2 object-cover"
        />
        <div class="flex flex-col gap-0 items-center">
          <p class="font-black">Alain LAMBOUX-DURAND</p>
          <p>Communication - Audiovisuel</p>
          <p class="text-rouge">Chef du département</p>
        </div>
      </div>
      <!--fin cadre-->
      <!--cadre-->
      <div class="prof-homepage">
        <img
          src="/images/P-Chatonnay.jpg"
          alt="David MALSOT"
          class="mmi-photo-2 object-cover"
        />
        <div class="flex flex-col gap-0 items-center">
          <p class="font-black">Pascal CHATONNAY</p>
          <p>Informatique - Référent Défense et Sécurité Nationale</p>
        </div>
      </div>
      <!--fin cadre-->
      <!--cadre-->
      <div class="prof-homepage">
        <img
          src="/images/E-Chartogne.jpg"
          alt="Élodie CHARTOGNE"
          class="mmi-photo-2 object-cover"
        />
        <div class="flex flex-col gap-0 items-center">
          <p class="font-black">Élodie CHARTOGNE</p>
          <p>Secrétariat</p>
        </div>
      </div>
      <!--fin cadre-->
      <!--cadre-->
      <div class="prof-homepage">
        <img
          src="/images/D-Malsot.jpg"
          alt="David MALSOT"
          class="mmi-photo-2 object-cover"
        />
        <div class="flex flex-col gap-0 items-center">
          <p class="font-black">David MALSOT</p>
          <p>Communication</p>
        </div>
      </div>
      <!--fin cadre-->
      <!--cadre-->
      <div class="prof-homepage">
        <img
          src="/images/X-Senente.jpg"
          alt="Xavier SENENTE"
          class="mmi-photo-2 object-cover"
        />
        <div class="flex flex-col gap-0 items-center">
          <p class="font-black">Xavier SENENTE</p>
          <p>Graphisme & Design</p>
        </div>
      </div>
      <!--fin cadre-->

      <!--cadre-->
      <div class="prof-homepage">
        <img
          src="/images/JM-Fino.jpg"
          alt="Jean-Marie FINO"
          class="mmi-photo-2 object-cover"
        />
        <div class="flex flex-col gap-0 items-center">
          <p class="font-black">Jean-Marie FINO</p>
          <p>Informatique - Développement web</p>
        </div>
      </div>
      <!--fin cadre-->

      <!--cadre-->
      <div class="prof-homepage">
        <img
          src="/images/L-Dubois.jpg"
          alt="Lydia DUBOIS"
          class="mmi-photo-2 object-cover"
        />
        <div class="flex flex-col gap-0 items-center">
          <p class="font-black">Lydia DUBOIS</p>
          <p>Communication - Anglais - Stages</p>
        </div>
      </div>
      <!--fin cadre-->

      <!--cadre-->
      <div class="prof-homepage">
        <img
          src="/images/S-Augier.jpg"
          alt="Sébastien AUGIER"
          class="mmi-photo-2 object-cover"
        />
        <div class="flex flex-col gap-0 items-center">
          <p class="font-black">Sébastien AUGIER</p>
          <p>Graphisme & Design - Audiovisuel</p>
        </div>
      </div>
      <!--fin cadre-->
      <!--cadre-->
      <div class="prof-homepage">
        <img
          src="/images/S-Laurent.jpg"
          alt="Stéphane LAURENT"
          class="mmi-photo-2 object-cover"
        />
        <div class="flex flex-col gap-0 items-center">
          <p class="font-black">Stéphane LAURENT</p>
          <p>Communication - Marketing</p>
        </div>
      </div>
      <!--fin cadre-->
      <!--cadre-->
      <div class="prof-homepage">
        <img
          src="/images/Q-Gianella.jpg"
          alt="Quentin GIANELLA"
          class="mmi-photo-2 object-cover"
        />
        <div class="flex flex-col gap-0 items-center">
          <p class="font-black">Quentin GIANELLA</p>
          <p>Graphisme & Design - Audiovisuel</p>
        </div>
      </div>
      <!--fin cadre-->
      <!--cadre-->
      <div class="prof-homepage">
        <img
          src="/images/JC-Domenget.jpg"
          alt="Jean-Claude DOMENGET"
          class="mmi-photo-2 object-cover"
        />
        <div class="flex flex-col gap-0 items-center">
          <p class="font-black">Jean-Claude DOMENGET</p>
          <p>Communication - Marketing</p>
        </div>
      </div>
      <!--fin cadre-->
      <!--cadre-->
      <div class="prof-homepage">
        <img
          src="/images/H-Mabed.jpg"
          alt="Hakim MABED"
          class="mmi-photo-2 object-cover"
        />
        <div class="flex flex-col gap-0 items-center">
          <p class="font-black">Hakim MABED</p>
          <p>Informatique - Réseau</p>
        </div>
      </div>
      <!--fin cadre-->
      <!--cadre-->
      <div class="prof-homepage">
        <img
          src="/images/W-Yvart.jpg"
          alt="Willy YVART"
          class="mmi-photo-2 object-cover"
        />
        <div class="flex flex-col gap-0 items-center">
          <p class="font-black">Willy YVART</p>
          <p>Informatique</p>
        </div>
      </div>
      <!--fin cadre-->
      <!--cadre-->
      <div class="prof-homepage">
        <img
          src="/images/T-Hulin.jpg"
          alt="Thibaud HULIN"
          class="mmi-photo-2 object-cover"
        />
        <div class="flex flex-col gap-0 items-center">
          <p class="font-black">Thibaud HULIN</p>
          <p>Design - Communication</p>
        </div>
      </div>
      <!--fin cadre-->

      <!--cadre-->
      <div class="prof-homepage">
        <img
          src="/images/PASDEPHOTO.png"
          alt="Christelle BLOCH"
          class="mmi-photo-2 object-cover border-4 border-black"
        />
        <div class="flex flex-col gap-0 items-center">
          <p class="font-black">Christelle BLOCH</p>
          <p>Informatique - Stages</p>
        </div>
      </div>
      <!--fin cadre-->

      <!--cadre-->
      <div class="prof-homepage">
        <img
          src="/images/PASDEPHOTO.png"
          alt="Christelle BLOCH"
          class="mmi-photo-2 object-cover border-4 border-black"
        />
        <div class="flex flex-col gap-0 items-center">
          <p class="font-black">Pierre PRACHT</p>
          <p>Informatique - Développement web</p>
        </div>
      </div>
      <!--fin cadre-->

      <!--cadre-->
      <div class="prof-homepage">
        <img
          src="/images/PASDEPHOTO.png"
          alt="Abdallah MAKHOUL"
          class="mmi-photo-2 object-cover border-4 border-black"
        />
        <div class="flex flex-col gap-0 items-center">
          <p class="font-black">Abdallah MAKHOUL</p>
          <p>Informatique - Développement web</p>
        </div>
      </div>
      <!--fin cadre-->

      <!--cadre-->
      <div class="prof-homepage">
        <img
          src="/images/PASDEPHOTO.png"
          alt="Bruno VIEZZI"
          class="mmi-photo-2 object-cover border-4 border-black"
        />
        <div class="flex flex-col gap-0 items-center">
          <p class="font-black">Bruno VIEZZI</p>
          <p>Communication</p>
        </div>
      </div>
      <!--fin cadre-->

      <!--cadre-->
      <div class="prof-homepage">
        <img
          src="/images/PASDEPHOTO.png"
          alt="Myriam NICOLLE"
          class="mmi-photo-2 object-cover border-4 border-black"
        />
        <div class="flex flex-col gap-0 items-center">
          <p class="font-black">Myriam NICOLLE</p>
          <p>Graphisme & Design</p>
        </div>
      </div>
      <!--fin cadre-->
      <!--cadre-->
      <div class="prof-homepage">
        <img
          src="/images/PASDEPHOTO.png"
          alt="Julie BODET"
          class="mmi-photo-2 object-cover border-4 border-black"
        />
        <div class="flex flex-col gap-0 items-center">
          <p class="font-black">Julie BODET</p>
          <p>Communication</p>
        </div>
      </div>
      <!--fin cadre-->
      <!--cadre-->
      <div class="prof-homepage">
        <img
          src="/images/PASDEPHOTO.png"
          alt="Camille BATAILLE-BARBIER"
          class="mmi-photo-2 object-cover border-4 border-black"
        />
        <div class="flex flex-col gap-0 items-center">
          <p class="font-black">Camille BATAILLE-BARBIER</p>
          <p>Communication</p>
        </div>
      </div>
      <!--fin cadre-->

      <!--cadre-->
      <div class="prof-homepage">
        <img
          src="/images/PASDEPHOTO.png"
          alt="Robin HECKENAUER"
          class="mmi-photo-2 object-cover border-4 border-black"
        />
        <div class="flex flex-col gap-0 items-center">
          <p class="font-black">Robin HECKENAUER</p>
          <p>Informatique</p>
        </div>
      </div>
      <!--fin cadre-->

      <!--cadre-->
      <div class="prof-homepage">
        <img
          src="/images/PASDEPHOTO.png"
          alt="Didier FLORENTZ"
          class="mmi-photo-2 object-cover border-4 border-black"
        />
        <div class="flex flex-col gap-0 items-center">
          <p class="font-black">Didier FLORENTZ</p>
          <p>Graphisme & Design</p>
        </div>
      </div>
      <!--fin cadre-->
      <!--cadre-->
      <div class="prof-homepage">
        <img
          src="/images/PASDEPHOTO.png"
          alt="Isabelle LAFORGUE"
          class="mmi-photo-2 object-cover border-4 border-black"
        />
        <div class="flex flex-col gap-0 items-center">
          <p class="font-black">Isabelle LAFORGUE</p>
          <p>Informatique</p>
        </div>
      </div>
      <!--fin cadre-->

      <!--cadre-->
      <div class="prof-homepage">
        <img
          src="/images/PASDEPHOTO.png"
          alt="Annie STEMPHELET"
          class="mmi-photo-2 object-cover border-4 border-black"
        />
        <div class="flex flex-col gap-0 items-center">
          <p class="font-black">Annie STEMPHELET</p>
          <p>Entretien</p>
        </div>
      </div>
      <!--fin cadre-->

      <!--cadre-->
      <div class="prof-homepage">
        <img
          src="/images/PASDEPHOTO.png"
          alt="Thierry HUFSCHMIDT"
          class="mmi-photo-2 object-cover border-4 border-black"
        />
        <div class="flex flex-col gap-0 items-center">
          <p class="font-black">Thierry HUFSCHMIDT</p>
          <p>Service Technique</p>
        </div>
      </div>
      <!--fin cadre-->
    </div>
  </div>
</template>

<style scoped>
.lines1 {
  overflow: hidden;
  animation: movinglines1 3s linear infinite;
}
.lines2 {
  overflow: hidden;
  animation: movinglines1 1s linear infinite;
}
.lines3 {
  overflow: hidden;
  animation: movinglines1 2s linear infinite;
}
.lines4 {
  overflow: hidden;
  animation: movinglines1 4s linear infinite;
}

@keyframes movinglines1 {
  0% {
    overflow: hidden;
    translate: -100% 0%;
  }

  100% {
    overflow: hidden;
    overflow-x: hidden;
    translate: 200% 0%;
  }
}

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

.movingLogo {
  animation: animation-logo-mmi 4s infinite ease-in-out;
}

@keyframes animation-logo-mmi {
  0% {
    transform: translate3d(0, 0, 0); /* position initiale à droite */
    stroke: rgb(109 214 120);
  }
  25% {
    transform: translate3d(0, 10%, 0); /* position finale à gauche */
    stroke: rgb(187 167 231);
  }
  50% {
    transform: translate3d(0, 0, 0); /* position finale à gauche */
    stroke: rgb(255 54 54);
  }
  75% {
    transform: translate3d(0, 10%, 0); /* position finale à gauche */
    stroke: rgb(187 167 231);
  }
  100% {
    transform: translate3d(0, 0, 0); /* position finale à gauche */
    stroke: rgb(109 214 120);
  }
}
</style>
