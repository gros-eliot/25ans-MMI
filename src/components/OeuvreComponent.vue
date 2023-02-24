<template>
  <button>
    <section
      :style="{
        backgroundImage: `url('/images/oeuvres/finales/${sourceImage}')`,
      }"
      class="w-full h-full bg-cover bg-center"
      @mouseenter="descriptionVisible = !descriptionVisible"
      @mouseleave="descriptionVisible = !descriptionVisible"
      @click="descriptionTotale = !descriptionTotale"
    >
      <div
        class="text-center opacity-0 text-white font-inter w-full h-full flex flex-col justify-center items-center"
        :class="{
          'opacity-100': descriptionVisible === true,
          'bg-[linear-gradient(180deg,rgba(0,_0,_0,_0.4)_0%,rgba(0,_0,_0,_0.8)_100%)]':
            descriptionVisible === true,
        }"
      >
        <h3 class="text-3xl font-bold">
          {{ nom }}
        </h3>
        <p class="font-light mmi-texte">
          {{ auteur }}
        </p>
      </div>
    </section>
  </button>

  <!--Croix pr fermer description de l'oeuvre-->
  <div
    class="text-white fixed z-[99] inset-x-[80%] md:inset-x-[90%] inset-y-[4%] rounded-full bg-black p-4 w-fit h-fit"
    :class="{
      hidden: descriptionTotale === false,
    }"
    @click="descriptionTotale = !descriptionTotale"
  >
    <Croix class="w-12 h-12" />
  </div>

  <!--Description de l'oeuvre-->
  <section
    v-if="descriptionTotale === true"
    class="fixed font-inter inset-0 w-full h-full z-50 justify-center items-center bg-[linear-gradient(180deg,rgba(0,_0,_0,_0.6)_0%,rgba(0,_0,_0,_0.6)_100%)]"
    :class="{
      flex: descriptionTotale === true,
      over: descriptionTotale === true,
      hidden: descriptionTotale === false,
    }"
  >
    <div
      class="bg-black w-[95%] h-[95%] text-white px-10 pb-5 overflow-y-scroll customizedScrollbar"
    >
      <div class="flex flex-col gap-5 mt-20">
        <RouterLink to="vote" class="m-auto">
          <button
            class="max-w-xl m-auto bg-white text-black font-bold px-4 py-2"
          >
            Voter pour cette oeuvre ♥
          </button>
        </RouterLink>
        <a
          href="https://www.youtube.com/watch?v=09xP8vIVcvM&list=LL&index=2&ab_channel=LorisSaturni"
          target="_blank"
          class="m-auto"
          v-if="nom === 'Niquedouille2'"
        >
          <button
            class="max-w-xl m-auto bg-rouge text-white font-bold px-4 py-2"
          >
            Voir la vidéo
          </button>
        </a>
        <img :src="`/images/oeuvres/finales/${sourceImage}`" class="w-full" />
        <h3 class="mmi-h2">
          {{ nom }}
        </h3>
        <p class="font-thin tracking-tight">De {{ auteur }}</p>
        <p class="font-normal">{{ description }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.customizedScrollbar::-webkit-scrollbar-thumb {
  background: #fff;
  border-radius: 25px;
}
</style>

<script>
import Croix from "../components/icons/croix.vue";

// Fonctions Firestore
import {
  getFirestore,
  collection,
  onSnapshot,
  doc,
  updateDoc,
  query,
  where,
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js";

// Fonction authentification
import { getAuth } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-auth.js";

export default {
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
        // userInfo étant un tableau, onn récupère
        // ses informations dans la 1° cellule du tableau : 0
        this.uiduser = this.userInfo[0].uiduser;
      });
    },

    async voteForArt() {
      const firestore = getFirestore();
      const docRef = doc(firestore, "user", this.userInfo[0].id);
      // Modification du participant à partir de son id
      await updateDoc(docRef, {
        oeuvre_favorite: null,
        oeuvre_favorite: this.idImage,
      });
    },
  },

  components: {
    Croix,
  },
  props: {
    idImage: {
      type: String,
      default: "",
    },
    sourceImage: {
      type: String,
      default: "oeuvre-test.jpg",
    },
    nom: {
      type: String,
      default: "nom",
    },
    auteur: {
      type: String,
      default: "auteur",
    },
    description: {
      type: String,
      default: "description",
    },

    descriptionVisible: {
      type: Boolean,
      default: false,
    },
    descriptionTotale: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
