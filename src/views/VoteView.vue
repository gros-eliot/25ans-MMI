<template>
  <!--fond noir-->
  <div class="inset-0 fixed w-full h-screen -z-50 bg-black"></div>
  <!--chargement-->
  <!--
  <div
    class="opacity-0 inset-0 fixed w-full h-screen z-[99] bg-black blackscreen-of-loading justify-center items-center"
  >
    <LogoCadeau class="w-1/2 h-1/2 fill-jaune animate-bounce" />
  </div>
.blackscreen-of-loading {
  animation: beginning-vote 1.5s 1 linear;
}

@keyframes beginning-vote {
  from {
    display: flex;
    opacity: 100%;
  }

  50% {
    opacity: 100%;
  }

  to {
    opacity: 0%;
    display: none;
  }
}


  -->

  <article class="text-white">
    <div class="text-center px-5 text-jaune">
      <p>
        Choisissez votre œuvre préférée en cliquant sur le bouton radio ! Celle
        qui comptera le plus de votes aura des chances d'être nommée
      </p>
      <p>
        <strong class="font-inter tracking-tighter"
          >"Œuvre des 25 ans de MMI"</strong
        >
        !
      </p>
    </div>
  </article>
  <form @submit.prevent="VoteForArt()" class="my-10">
    <!--OEUVRE 1-->
    <div
      class="flex flex-col justify-center items-start gap-5 w-full h-fit py-10 bg-cover bg-center p-5"
      :style="{
        backgroundImage: `linear-gradient(90deg, rgba(0, 0, 0, 0.9) 0%,  rgba(0, 0, 0, 0.4) 100%),url('/images/oeuvres/finales/exodia-lilian-chesneau.jpg')`,
      }"
    >
      <div
        class="grid justify-items-center items-center grid-cols-[2%,98%] gap-5"
      >
        <input
          type="radio"
          class="w-6 h-6"
          value="Exodia"
          v-model="oeuvre_favorite"
        />
        <label
          class="text-2xl md:text-4xl font-bold font-inter tracking-tighter text-white drop-shadow-lg"
        >
          Exodia
        </label>
      </div>
      <p class="text-white drop-shadow-xl">Lilian Chesneau</p>
    </div>
    <!--OEUVRE 1-->

    <!--OEUVRE 2-->
    <div
      class="flex flex-col justify-center items-start gap-5 w-full h-fit py-10 bg-cover bg-center p-5"
      :style="{
        backgroundImage: `linear-gradient(90deg, rgba(0, 0, 0, 0.9) 0%,  rgba(0, 0, 0, 0.4) 100%),url('/images/oeuvres/finales/open_ur_mind-justine-emond.jpg')`,
      }"
    >
      <div
        class="grid justify-items-center items-center grid-cols-[2%,98%] gap-5"
      >
        <input
          type="radio"
          class="w-6 h-6"
          value="Open Ur Mind"
          v-model="oeuvre_favorite"
        />
        <label
          class="text-2xl md:text-4xl font-bold font-inter tracking-tighter text-white drop-shadow-lg"
        >
          Open Ur Mind
        </label>
      </div>
      <p class="text-white drop-shadow-xl">Justine Emond</p>
    </div>
    <!--OEUVRE 2-->

    <!--OEUVRE 3-->
    <div
      class="flex flex-col justify-center items-start gap-5 w-full h-fit py-10 bg-cover bg-center p-5"
      :style="{
        backgroundImage: `linear-gradient(90deg, rgba(0, 0, 0, 0.9) 0%,  rgba(0, 0, 0, 0.4) 100%),url('/images/oeuvres/finales/reussir-sami-ghorzi.jpg')`,
      }"
    >
      <div
        class="grid justify-items-center items-center grid-cols-[2%,98%] gap-5"
      >
        <input
          type="radio"
          class="w-6 h-6"
          value="Reussir"
          v-model="oeuvre_favorite"
        />
        <label
          class="text-2xl md:text-4xl font-bold font-inter tracking-tighter text-white drop-shadow-lg"
        >
          Réussir
        </label>
      </div>
      <p class="text-white drop-shadow-xl">Sami Ghorzi</p>
    </div>
    <!--OEUVRE 3-->
    <!--OEUVRE 4-->
    <div
      class="flex flex-col justify-center items-start gap-5 w-full h-fit py-10 bg-cover bg-center p-5"
      :style="{
        backgroundImage: `linear-gradient(90deg, rgba(0, 0, 0, 0.9) 0%,  rgba(0, 0, 0, 0.4) 100%),url('/images/oeuvres/finales/heart_shape-mathilde-vauquieres.png')`,
      }"
    >
      <div
        class="grid justify-items-center items-center grid-cols-[2%,98%] gap-5"
      >
        <input
          type="radio"
          class="w-6 h-6"
          value="Heart Shape"
          v-model="oeuvre_favorite"
        />
        <label
          class="text-2xl md:text-4xl font-bold font-inter tracking-tighter text-white drop-shadow-lg"
        >
          Heart Shape
        </label>
      </div>
      <p class="text-white drop-shadow-xl">Mathilde Vauquieres</p>
    </div>
    <!--OEUVRE 4-->
    <!--OEUVRE 5-->
    <div
      class="flex flex-col justify-center items-start gap-5 w-full h-fit py-10 bg-cover bg-center p-5"
      :style="{
        backgroundImage: `linear-gradient(90deg, rgba(0, 0, 0, 0.9) 0%,  rgba(0, 0, 0, 0.4) 100%),url('/images/oeuvres/finales/summer-sacha-wicky.jpg')`,
      }"
    >
      <div
        class="grid justify-items-center items-center grid-cols-[2%,98%] gap-5"
      >
        <input
          type="radio"
          class="w-6 h-6"
          value="Summer"
          v-model="oeuvre_favorite"
        />
        <label
          class="text-2xl md:text-4xl font-bold font-inter tracking-tighter text-white drop-shadow-lg"
        >
          Summer
        </label>
      </div>
      <p class="text-white drop-shadow-xl">Sacha Wicky</p>
    </div>
    <!--OEUVRE 5-->

    <div class="m-auto w-fit">
      <button
        class="rounded-lg bg-jaune hover:bg-opacity-70 text-black hover:text-white text-4xl tracking-tighter font-inter font-black w-fit h-fit p-5 px-10 m-auto my-10"
        type="submit"
        v-if="user.email != null"
      >
        Voter !
      </button>
      <RouterLink to="/connexion" v-else>
        <button
          class="rounded-lg bg-zinc-600 text-black text-4xl tracking-tighter font-inter font-black w-fit h-fit p-5 px-10 m-auto my-10"
        >
          Se connecter pour voter
        </button>
      </RouterLink>
    </div>
  </form>
</template>
<script>
import LogoCadeau from "../components/icons/logoCadeau.vue";
import {
  getFirestore,
  collection,
  doc,
  updateDoc,
  onSnapshot,
  query,
  where,
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js";

import {
  getAuth, // Fonction générale d'authentification
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-auth.js";

export default {
  components: {
    LogoCadeau,
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
      oeuvre_favorite: null,
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
        this.oeuvre_favorite = this.userInfo[0].oeuvre_favorite;
      });
    },
    async VoteForArt() {
      const firestore = getFirestore();
      const docRef = doc(firestore, "user", this.userInfo[0].id);
      // Modification du participant à partir de son id
      await updateDoc(docRef, {
        oeuvre_favorite: null,
        oeuvre_favorite: this.oeuvre_favorite,
      });
      alert(
        "Vous avez bien choisi '" +
          this.oeuvre_favorite +
          "' comme œuvre préférée !"
      );
      this.$router.push("home");
    },
  },
};
</script>
<style scoped></style>
