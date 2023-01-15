<script>
import { RouterLink, RouterView } from "vue-router";
import BatimentMMI from "@/components/BatimentMMI.vue";
import HeaderView from "@/components/Header.vue";
import FooterView from "@/components/Footer.vue";
import MiniBatimentMMI from "./components/MiniBatimentMMI.vue";
import Arrow from "./components/icons/arrow.vue";
import ProfilIcon from "./components/icons/profil.vue";

// Fonctions Firestore
import {
  getFirestore,
  collection,
  onSnapshot,
  query,
  where,
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js";

// Fonction authentification
import { getAuth } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-auth.js";

export default {
  components: {
    BatimentMMI,
    HeaderView,
    FooterView,
    MiniBatimentMMI,
    Arrow,
    ProfilIcon,
  },

  data() {
    return {
      user: {
        // User connecté
        email: null,
        password: null,
      },
      uiduser: null,
      userInfo: null, // import données firebase (firestore)
    };
  },
  mounted() {
    //
    // Vérifier si un user connecté existe déjà
    // Au lancement de l'application
    this.getUserConnect();
  },

  methods: {
    // Obtenir les informations du user connecté
    async getUserConnect() {
      await getAuth().onAuthStateChanged(
        function (user) {
          if (user) {
            // Récupération du user connecté
            this.user = user;
            // Recherche de ses infos complémentaires
            this.getUserInfo(this.user);
          }
        }.bind(this)
      );
    },

    async getUserInfo(user) {
      // Rechercher les informations complémentaires de l'utilisateur
      // Obtenir Firestore
      const firestore = getFirestore();
      // Base de données (collection)  document participant
      const dbUsers = collection(firestore, "user");
      // Recherche du user par son uid
      const q = query(dbUsers, where("uiduser", "==", user.uid));
      await onSnapshot(q, (snapshot) => {
        this.userInfo = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        console.log("userInfo", this.userInfo);
        // userInfo étant un tableau, onn récupère
        // ses informations dans la 1° cellule du tableau : 0
        this.uiduser = this.userInfo[0].uiduser;
      });
    },
  },
};

// lignes qui bougent en background
function FunctionLine() {
  let movingLine = document.querySelector(".line");
  let valueScroll = window.pageYOffset;
  movingLine.style.width = valueScroll / 20 + "%";
}
function FunctionLine2() {
  let movingLine = document.querySelector(".line2");
  let valueScroll = window.pageYOffset;
  movingLine.style.width = valueScroll / 20 + "%";
}
function FunctionLine3() {
  let movingLine = document.querySelector(".line3");
  let valueScroll = window.pageYOffset;
  movingLine.style.width = valueScroll / 20 + "%";
}

//
//
//
//

// function page histoire
function histoire() {
  let valueScroll = window.pageYOffset;

  // modification du bouton retour en haut de page (page histoire)
  let goToTopButton = document.querySelector(".gototop-element");
  let TimeLine = document.querySelector(".timeline-element");
  if (TimeLine != null) {
    if (valueScroll >= 500) {
      TimeLine.style.opacity = "100%";
      TimeLine.style.display = "block";
    } else {
      TimeLine.style.opacity = 0;
    }
    if (valueScroll >= 600) {
      TimeLine.style.opacity = "10%";
    }
    if (valueScroll >= 700) {
      TimeLine.style.opacity = "20%";
    }
    if (valueScroll >= 800) {
      TimeLine.style.opacity = "30%";
    }
    if (valueScroll >= 900) {
      TimeLine.style.opacity = "50%";
    }
    if (valueScroll >= 1000) {
      TimeLine.style.opacity = "70%";
    }
  } else {
  }

  if (valueScroll < 500) {
    goToTopButton.style.display = "none";
    goToTopButton.style.opacity = 0;
  }
  if (valueScroll >= 500) {
    goToTopButton.style.display = "block";
    goToTopButton.style.opacity = 0;
  }
  if (valueScroll >= 600) {
    goToTopButton.style.opacity = "10%";
  }
  if (valueScroll >= 700) {
    goToTopButton.style.opacity = "20%";
  }
  if (valueScroll >= 800) {
    goToTopButton.style.opacity = "30%";
  }
  if (valueScroll >= 900) {
    goToTopButton.style.opacity = "50%";
  }
  if (valueScroll >= 1000) {
    goToTopButton.style.opacity = "100%";
  }
}

//
//
// lignes qui bougent en background
window.addEventListener("scroll", FunctionLine);
window.addEventListener("scroll", FunctionLine2);
window.addEventListener("scroll", FunctionLine3);

// function page histoire
window.addEventListener("scroll", histoire);

function AlertScroll() {
  let valueScroll = window.pageYOffset;
  alert(valueScroll);
}
</script>

<template>
  <!--LINES DU FOND-->
  <section v-if="$route.name != ('cadeau', 'connexion')">
    <div
      class="h-[2px] -z-50 line fixed rotate-45 origin-[0] inset-y-10 w-0"
      :class="{
        'bg-rouge': $route.name === 'com',
        'bg-vert': $route.name === 'dev',
        'bg-bleu': $route.name === 'crea',
        'bg-black':
          ($route.name === 'home')
          | ($route.name === 'connexion')
          | ($route.name === 'contact')
          | ($route.name === 'mentionslegales'),
        'opacity-10':
          ($route.name === 'home')
          | ($route.name === 'connexion')
          | ($route.name === 'contact')
          | ($route.name === 'mentionslegales'),
        'opacity-30': $route.name != 'home',
      }"
    ></div>
    <div
      class="h-[2px] -z-50 line2 fixed rotate-[145deg] origin-[0] w-0 inset-y-0 inset-x-1/4"
      :class="{
        'bg-rouge': $route.name === 'com',
        'bg-vert': $route.name === 'dev',
        'bg-bleu': $route.name === 'crea',
        'bg-black':
          ($route.name === 'home')
          | ($route.name === 'connexion')
          | ($route.name === 'contact')
          | ($route.name === 'mentionslegales'),
        'opacity-10':
          ($route.name === 'home')
          | ($route.name === 'connexion')
          | ($route.name === 'contact')
          | ($route.name === 'mentionslegales'),
        'opacity-30': $route.name != 'home',
      }"
    ></div>
    <div
      class="h-[2px] -z-50 line3 fixed rotate-[145deg] origin-[0] w-0 inset-y-1/2 inset-x-full"
      :class="{
        'bg-rouge': $route.name === 'com',
        'bg-vert': $route.name === 'dev',
        'bg-bleu': $route.name === 'crea',
        'bg-black':
          ($route.name === 'home')
          | ($route.name === 'connexion')
          | ($route.name === 'contact')
          | ($route.name === 'mentionslegales'),
        'opacity-10':
          ($route.name === 'home')
          | ($route.name === 'connexion')
          | ($route.name === 'contact')
          | ($route.name === 'mentionslegales'),
        'opacity-30': $route.name != 'home',
      }"
    ></div>
  </section>
  <!--LINES DU FOND-->

  <!--Header-->
  <header v-if="$route.name != 'cadeau'" class="z-[80]" id="top">
    <HeaderView />
  </header>

  <!--TITRES AU DESSUS DU BATIMENT-->
  <div class="mmi-h1 flex justify-center text-center">
    <h1
      class="uppercase text-center py-2 mmi-h1"
      :class="{
        hidden: $route.name != 'home',
      }"
    >
      Le plan
    </h1>
    <h1
      class="uppercase text-center py-2 mmi-h1"
      :class="{
        hidden: $route.name != 'com',
      }"
    >
      La salle com'
    </h1>
    <h1
      class="uppercase text-center py-2 mmi-h1"
      :class="{
        hidden: $route.name != 'dev',
      }"
    >
      La salle dev'
    </h1>
    <h1
      class="uppercase text-center py-2 mmi-h1"
      :class="{
        hidden: $route.name != 'crea',
      }"
    >
      La salle créa'
    </h1>
    <h1
      class="uppercase text-center py-2 mmi-h1"
      :class="{
        hidden: $route.name != 'secret',
      }"
    >
      La salle secrète
    </h1>
    <h1
      class="uppercase text-center py-2 mmi-h1"
      :class="{
        hidden: $route.name != 'event',
      }"
    >
      Évènement 25 ans MMI
    </h1>
    <h1
      class="uppercase text-center py-2 mmi-h1"
      :class="{
        hidden: $route.name != 'mentionslegales',
      }"
    >
      Mentions légales
    </h1>
    <h1
      class="uppercase text-center py-2 mmi-h1"
      :class="{
        hidden: $route.name != 'contact',
      }"
    >
      Contact
    </h1>
    <h1
      class="uppercase text-center py-2 mmi-h1"
      :class="{
        hidden: $route.name != 'connexion',
      }"
    >
      Connexion
    </h1>
    <h1
      class="uppercase text-center py-2 px-5 mmi-h1 text-beige"
      :class="{
        hidden: $route.name != 'vote',
      }"
    >
      VOTER POUR UNE œUVRE
    </h1>
    <h1
      class="uppercase text-center py-2 px-5 mmi-h1 text-rouge"
      :class="{
        hidden: $route.name != 'admin',
      }"
    >
      ADMINISTRATION
    </h1>

    <h1
      class="uppercase text-center py-2 mmi-h1 px-5"
      :class="{
        hidden: $route.name != 'notfound',
      }"
    >
      Erreur 404 - Page non trouvée
    </h1>
  </div>

  <!--Batiment MMI : ordi & mobile (navigation)-->
  <BatimentMMI
    class="my-10 m-auto w-fit md:block hidden"
    v-if="
      ($route.name === 'home') |
        ($route.name === 'event') |
        ($route.name === 'com') |
        ($route.name === 'dev') |
        ($route.name === 'crea') |
        ($route.name === 'secret') |
        ($route.name === 'contact') |
        ($route.name === 'notfound')
    "
  />
  <MiniBatimentMMI
    class="my-10 m-auto w-fit block md:hidden"
    v-if="
      ($route.name === 'home') |
        ($route.name === 'event') |
        ($route.name === 'com') |
        ($route.name === 'dev') |
        ($route.name === 'crea') |
        ($route.name === 'secret') |
        ($route.name === 'contact') |
        ($route.name === 'notfound')
    "
  />

  <!--Router content (pages)-->
  <router-view></router-view>

  <!--Footer-->
  <footer v-if="$route.name != 'cadeau' && $route.name != 'histoire'">
    <FooterView />
  </footer>

  <div
    class="w-fit bottom-0 right-0 flex flex-row-reverse justify-center p-10 items-center gap-3 fixed z-40"
    v-if="$route.name != 'cadeau'"
  >
    <RouterLink
      :to="{ name: 'profil', params: { id: userInfo[0].uiduser } }"
      class="bg-beige border border-black w-fit rounded-xl p-4 flex justify-center items-center gap-2"
      :class="{ hidden: $route.name === 'profil' }"
      v-if="user.email != null"
    >
      <p class="text-sm">Profil</p>
      <ProfilIcon class="w-4 h-4 md:w-6 md:h-6 fill-black" />
      <span class="sr-only">Icône pour la page du profil</span>
    </RouterLink>
    <RouterLink
      to="/connexion"
      class="bg-beige border border-black w-fit rounded-xl p-4 flex justify-center items-center gap-2"
      :class="{ hidden: $route.name === 'connexion' }"
      v-else
    >
      <p class="text-sm">Connexion</p>
      <ProfilIcon class="w-4 h-4 md:w-6 md:h-6 fill-black" />
      <span class="sr-only">Icône pour la page connexion</span>
    </RouterLink>

    <!--bouton pr remonter en haut de la page -->
    <a href="#top" class="gototop-element opacity-0 hidden">
      <button class="text-black bg-beige border border-black rounded-xl p-4">
        <Arrow class="fill-black w-4 h-4 md:w-6 md:h-6" />
        <span class="sr-only"
          >Flèche pour remonter vers le haut de la page</span
        >
      </button>
    </a>
  </div>

  <!--ELEMENTS POUR LA PAGE HISTOIRE // ELEMENTS POUR LA PAGE HISTOIRE // ELEMENTS POUR LA PAGE HISTOIRE // ELEMENTS POUR LA PAGE HISTOIRE-->
  <!--ELEMENTS POUR LA PAGE HISTOIRE // ELEMENTS POUR LA PAGE HISTOIRE // ELEMENTS POUR LA PAGE HISTOIRE // ELEMENTS POUR LA PAGE HISTOIRE-->
  <!--ELEMENTS POUR LA PAGE HISTOIRE // ELEMENTS POUR LA PAGE HISTOIRE // ELEMENTS POUR LA PAGE HISTOIRE // ELEMENTS POUR LA PAGE HISTOIRE-->

  <!--Frise line (pour page histoire)-->
  <div
    class="timeline-element opacity-50 hidden fixed w-3 h-screen inset-x-1 md:inset-x-5 inset-y-0 bg-beige border-black border-x z-[11]"
    v-if="$route.name === 'histoire'"
  ></div>

  <!--DEBOGAGE BUTTON === used to know the scroll(Y) value.-->
  <button
    class="bg-red-500 text-black fixed w-fit h-fit p-1 inset-0 z-50 text-[3px]"
    @click="AlertScroll"
  >
    Scroll
  </button>
</template>
