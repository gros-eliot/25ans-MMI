<script setup>
import Character from "./components/character.vue";
import CharacterWithQuote from "./components/characterWithQuote.vue";
</script>

<template>
  <section
    class="text-white grid justify-items-center items-center justify-center w-full lg:grid-cols-[65%,35%] grid-cols-1 grid-rows-[70%,30%] lg:grid-rows-1"
  >
    <div class="w-11/12 m-auto flex flex-col gap-20 p-4">
      <div class="flex flex-col gap-0">
        <h1 class="mmi-h1">De 1997 à 1998</h1>
        <h2 class="text-bleu mmi-h2">Le bunker</h2>
        <div class="mt-10 flex flex-col gap-4">
          <p>
            Le bâtiment SRC de l'époque s'agissait d'anciens vestiaires du stade
            de foot. On comptait trois pièces : deux salles de cours, et une
            salle pour l'administration (salle des profs, secrétariat).
          </p>
          <p>
            Il fallait coloniser des salles un peu partout sur le pôle
            universitaire : CTITS, Réseau, l'actuelle salle de la Mémo, le
            laboratoire Femto...
          </p>
        </div>
      </div>
    </div>

    <div>
      <!--Image M. Chatonnay-->
      <img
        src="/images/histoire/bunker-chatonnay.jpg"
        alt="Le bunker, présenté par M. Chatonnay"
        class="w-40 md:w-72 xl:w-96 h-fit m-10 md:m-4"
      />
    </div>
  </section>

  <div class="m-auto my-20 grid grid-cols-1 justify-items-center w-full">
    <!--Personnages débloqués-->
    <p class="uppercase text-sm italic text-gray-400 text-center">
      // New characters unlocked
    </p>
    <!--Personnages débloqués-->
    <character
      :srcImage="'P-Chatonnay.jpg'"
      :altImage="'Pascal Chatonnay'"
      :personName="'Pascal Chatonnay'"
      :personDescription="'Enseignant du MMI et Référent Défense et Sécurité Nationale'"
      :textColor="'white'"
    />
  </div>

  <section
    class="text-white grid justify-items-center items-center justify-center w-full"
  >
    <div class="w-11/12 m-auto flex flex-col gap-0 p-4">
      <h2 class="text-bleu mmi-h2">Soyons optimistes !</h2>

      <div class="mt-10 flex flex-col gap-4">
        <p>
          Il n’y avait qu’une unique salle de TP, avec 24 machines utilisée par
          quatre groupes d’étudiants (2 groupes de deuxième année et 2 groupes
          de première année). Il n’y avait pas de programme près établi. Tous
          les 15 jours, ils décidaient de la suite du programme.
        </p>
        <p>
          Il n'y avait pas encore de programme pédagogique existant. Ce n'était
          pas très interactif, car il n'y avait pas encore de référentiel.
        </p>
        <p>
          Les élèves installaient les logiciels à la file : il y avait des piles
          de disquettes à aller chercher. Très souvent, les cours se passaient
          avec deux profs debout dans une même salle. Pendant que certains
          faisaient cours, d'autres faisaient des TD.
        </p>
      </div>
    </div>
  </section>

  <!--Citation M Chatonnay n2-->
  <section class="histoire-margins-for-section my-20">
    <characterWithQuote
      :srcImage="'P-Chatonnay.jpg'"
      :altImage="'Pascal Chatonnay'"
      :personName="'Pascal Chatonnay'"
      :personDescription="'Enseignant du MMI et Référent Défense et Sécurité Nationale'"
      :personQuote="'Pendant les premières années de MMI, le bâtiment était en libre service pendant les heures de projet. C’est ce qui permettait aux professeurs de retrouver des étudiants endormis dans la salle de TP en arrivant à 8h !'"
      :textColor="'white'"
    />
  </section>

  <!--PARTIE 3-->
  <article class="w-full bg-bleu py-20">
    <section class="histoire-margins-for-section flex flex-col gap-10">
      <h2 class="text-black mmi-h2">Les premiers enseignants</h2>
      <!--Personnages débloqués-->
      <!--Personnages débloqués-->
      <div>
        <p class="uppercase text-sm italic text-gray-900 text-center">
          // New characters unlocked
        </p>
        <div class="flex flex-col md:flex-row justify-evenly">
          <character
            :srcImage="'JM-Fino.jpg'"
            :altImage="'Jean-Marie Fino'"
            :personName="'Jean-Marie Fino'"
            :personDescription="`Vétéran | Enseignant pour le pôle dev'`"
            :textColor="'black'"
          />
          <character
            :srcImage="'PASDEPHOTO.jpg'"
            :altImage="'Bruno Viezzi'"
            :personName="'Bruno Viezzi'"
            :personDescription="'Vétéran | Enseignant pour le pôle communication'"
            :textColor="'black'"
          />
        </div>
      </div>

      <p class="max-w-5xl">
        M. Bruno Viezzi et M. Jean-Marie Fino ont été enseignants dès la
        première année au département SRC. Après 25 ans, ils continuent
        d’enseigner au MMI. De vrais vétérans ! M. Chatonnay lui est arrivé
        quelques années après eux.
      </p>

      <characterWithQuote
        :srcImage="'JM-Fino.jpg'"
        :altImage="'Jean-Marie Fino'"
        :personName="'Jean-Marie Fino'"
        :personDescription="`Vétéran | Enseignant pour le pôle dev'`"
        :personQuote="'SRC, c’était une aventure type Indiana Jones. J’étais vacataire au CNAM à l’UTBM, je bossais à Alstom. On a tenté avec le peu de langage qu’on avait de monter la partie informatique.'"
        :textColor="'black'"
      />

      <p class="max-w-5xl">
        M. Fino a tenu à préciser qu'il connaît le nom de celui qui lui envoyait
        des boules de papier lorsqu'il écrivait au tableau. À bon entendeur...
      </p>
    </section>
  </article>

  <article class="w-full bg-black py-72">
    <section class="histoire-margins-for-section flex flex-col gap-2">
      <h2 class="text-bleu font-inter text-5xl lg:text-7xl tracking-tighter">
        "<strong class="text-decoration text-black"
          >Nos meilleures années ?</strong
        >
      </h2>
      <h2 class="text-bleu font-inter text-5xl lg:text-7xl tracking-tighter">
        Les deux premières années. Car c’était totalement
        <strong class="text-decoration-2 text-black">inorganisé</strong>. Il y
        avait une très bonne
        <strong class="text-decoration-3 text-black">synergie</strong>
        de groupe. Tout le monde faisait ce qu’il avait à faire. "
      </h2>
    </section>
  </article>
</template>
<style>
.animated-computer {
  animation: rotation-computer 20s linear infinite;
}

@keyframes rotation-computer {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.text-decoration {
  filter: drop-shadow(5px -5px 0px #ffd600) drop-shadow(-5px 5px 0px #bba7e7);
  animation: glitched-text 2s infinite linear;
}

.text-decoration-2 {
  filter: drop-shadow(5px -5px 0px #bba7e7) drop-shadow(-5px 5px 0px #ffd600);
}

.text-decoration-3 {
  filter: drop-shadow(5px -5px 0px #bba7e7) drop-shadow(-5px 5px 0px #ffd600);
}

@keyframes glitched-text {
  0% {
    text-transform: none;
    text-decoration: none;
    font-style: normal;
    font-weight: 900;
  }

  52% {
    text-transform: none;
    text-decoration: none;
    font-style: normal;
    font-weight: 900;
    color: black;
  }

  53% {
    text-transform: none;
    text-decoration: dotted;
    color: white;
  }
  54% {
    text-decoration: none;
    font-style: italic;
  }
  56% {
    font-style: none;
    font-weight: 100;
    text-transform: uppercase;
  }
  58% {
    text-transform: none;
    text-decoration: line-through;
    text-transform: lowercase;
    color: white;
  }
  60% {
    text-transform: none;
    text-decoration: none;
    font-style: normal;
    font-weight: 900;
    color: black;
  }
  100% {
    text-transform: none;
    text-decoration: none;
    font-style: normal;
    font-weight: 900;
  }
}
</style>
