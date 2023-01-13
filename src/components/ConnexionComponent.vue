<template>
  <!--CONNEXION-->
  <!--CONNEXION-->
  <!--CONNEXION-->
  <!--CONNEXION-->
  <form
    class="border-4 my-5 border-black bg-white py-5 px-5 md:px-10 w-11/12 md:w-2/3 m-auto"
    @submit.prevent="onCnx()"
    v-if="formSwitch === false"
  >
    <!--Images 24h 25 ans mmi-->
    <section class="flex justify-center items-center my-5 gap-5">
      <logoCadeau class="w-8 h-8 fill-black" />
      <p class="font-black">x</p>
      <logo24h class="w-10 h-10 fill-black" />
    </section>
    <!--Images 24h 25 ans mmi-->

    <div class="flex flex-col gap-12">
      <div class="flex flex-col">
        <label class="font-black">Adresse mail</label>
        <input
          type="text"
          class="bg-white border border-b-4 border-b-black border-white"
          placeholder="mail"
          name="mail"
          v-model="user.email"
          required
        />
      </div>
      <div class="flex flex-col">
        <label class="font-black">Mot de passe</label>
        <input
          type="password"
          class="bg-white border border-b-4 border-b-black border-white"
          placeholder="Password"
          name="Password"
          v-model="user.password"
          required
        />
      </div>

      <div class="w-full flex flex-col gap-5 md:flex-row md:justify-evenly">
        <button
          class="mx-auto bg-black border border-black border-1 p-7 text-2xl md:text-xl lg:text-2xl font-inter text-white font-black rounded-md"
          type="submit"
        >
          Se connecter
        </button>
        <button
          class="mx-auto bg-white border border-black border-1 p-7 text-2xl md:text-xl lg:text-2xl font-inter text-black font-black rounded-md"
          @click="formSwitch = !formSwitch"
        >
          Inscription
        </button>
      </div>

      <div class="flex place-content-center">
        <div class="alert alert-warning w-fit text-base text-vert" role="alert">
          {{ message }}
        </div>
      </div>

      <button
        class="m-auto text-center w-fit underline text-base"
        @click.prevent="onDcnx()"
      >
        Déconnexion
      </button>
    </div>
  </form>

  <!--INSCRIPTION-->
  <!--INSCRIPTION-->
  <!--INSCRIPTION-->
  <!--INSCRIPTION-->
  <form
    class="border-4 my-5 md:my-20 border-black bg-white py-10 px-5 md:px-20 w-11/12 md:w-2/3 m-auto"
    @submit.prevent="createAccount()"
    v-if="formSwitch === true"
  >
    <!--Images 24h 25 ans mmi-->
    <section class="flex justify-center items-center my-5 gap-5">
      <logoCadeau class="w-8 h-8 fill-black" />
      <p class="font-black">x</p>
      <logo24h class="w-10 h-10 fill-black" />
    </section>
    <!--Images 24h 25 ans mmi-->

    <div class="flex flex-col gap-12">
      <div class="flex flex-col">
        <label class="font-black">Adresse mail</label>
        <input
          type="text"
          class="bg-white border border-b-4 border-b-black border-white"
          placeholder="Mail"
          name="mail"
          v-model="user.email"
          required
        />
      </div>

      <div class="flex flex-col">
        <label class="font-black">Mot de passe</label>
        <input
          type="password"
          class="bg-white border border-b-4 border-b-black border-white"
          placeholder="Mot de passe"
          name="Password"
          v-model="user.password"
          required
        />
      </div>

      <div class="w-full flex flex-col gap-5 md:flex-row md:justify-evenly">
        <button
          class="mx-auto bg-black border border-black border-1 p-7 text-2xl md:text-xl lg:text-2xl font-inter text-white font-black rounded-md"
          type="submit"
        >
          S'inscrire
        </button>
        <button
          class="mx-auto bg-white border-black border p-7 text-2xl md:text-xl lg:text-2xl font-inter text-black font-black rounded-md"
          @click="formSwitch = !formSwitch"
        >
          Déjà un compte ?
        </button>
      </div>

      <div class="flex place-content-center">
        <div class="alert alert-warning w-fit text-base text-vert" role="alert">
          {{ message }}
        </div>
      </div>
    </div>
  </form>
</template>

<script>
import {
  getAuth, // Fonction générale d'authentification
  signInWithEmailAndPassword, // Se connecter avec un email + mot de passe
  createUserWithEmailAndPassword, // créer un user
  signOut, // Se deconnecter
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-auth.js";

// Fonctions Firestore
import {
  getFirestore,
  collection,
  addDoc,
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js";

import logoCadeau from "./icons/logoCadeau.vue";
import logo24h from "./icons/logo24h.vue";

export default {
  components: { logoCadeau, logo24h },
  props: {
    formSwitch: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      user: {
        email: null,
        password: null,
        nom: null,
        prenom: null,
      },
      message: null,
    };
  },
  mounted() {
    let user = getAuth().currentUser;
    if (user) {
      this.user = user;
      this.message = "Vous êtes connecté sous : " + this.user.email;
    } else {
      this.message = "Connectez-vous.";
    }
  },
  methods: {
    onCnx() {
      //se connecter avec un mots de pass
      signInWithEmailAndPassword(getAuth(), this.user.email, this.user.password)
        .then((response) => {
          this.user = response.user;
          this.message = "Vous êtes connecté sous : " + this.user.email;
          this.$router.push("/home");
        })
        .catch((error) => {
          //erreur co
          this.message = "Erreur connexion :" + error;
        });
    },

    createAccount() {
      // Se connecter avec user et mot de passe
      createUserWithEmailAndPassword(
        getAuth(),
        this.user.email,
        this.user.password,
        this.user.nom,
        this.user.prenom
      )
        .then(() => {
          this.message = "User créé : " + this.user.email;

          signInWithEmailAndPassword(
            getAuth(),
            this.user.email,
            this.user.password
          ).then((response) => {
            this.user = response.user;
            this.message = "Vous êtes connecté sous : " + this.user.email;

            this.$router.push("inscription");
          });

          /*
          const firestore = getFirestore();
          // Base de données (collection)  document users
          const dbUsers = collection(firestore, "user");
          const docRef = addDoc(dbUsers, {
            nom: this.nom,
            prenom: this.prenom,
            email: this.email,
          });
          */
        })
        .catch((error) => {
          // Erreur de connexion
          this.message = "Erreur pour la création du compte : " + error;
        });
    },

    onDcnx() {
      //se deco
      signOut(getAuth())
        .then((response) => {
          this.user = getAuth().currentUser;
          this.user = {
            email: null,
            password: null,
          };
          this.message = "Vous êtes déconnecté !";
        })
        .catch((error) => {
          console.log("erreur  déconnection : ", error);
        });
    },
  },
};
</script>
