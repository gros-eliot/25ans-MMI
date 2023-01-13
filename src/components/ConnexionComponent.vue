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

      <a href="#top" class="m-auto text-center w-fit">
        <button
          @click.prevent="onDcnx()"
          class="m-auto text-center w-fit underline text-base"
        >
          Déconnexion
        </button>
      </a>
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

    <div class="flex flex-col gap-10 w-full mb-5">
      <!--PARTIE 1 DU FORMULAIRE-->
      <div class="flex flex-col">
        <label class="font-black">Adresse mail*</label>
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
        <label class="font-black">Mot de passe*</label>
        <input
          type="password"
          class="bg-white border border-b-4 border-b-black border-white"
          placeholder="Mot de passe"
          name="Password"
          v-model="user.password"
          required
        />
      </div>

      <div class="flex flex-col">
        <label class="font-black">Prénom*</label>
        <input
          type="text"
          class="bg-white border-b-4 border-b-black"
          placeholder="Prénom"
          name="prenom"
          v-model="prenom"
          required
        />
      </div>
      <div class="flex flex-col">
        <label class="font-black">Nom*</label>
        <input
          type="text"
          class="bg-white border-b-4 border-b-black"
          placeholder="Nom"
          name="nom"
          v-model="nom"
          required
        />
      </div>
      <div class="flex flex-col">
        <label class="font-black">Pseudo</label>
        <input
          type="text"
          class="bg-white border-b-4 border-b-black"
          placeholder="Pseudonyme"
          name="pseudo"
          v-model="pseudo"
        />
      </div>
      <!--PARTIE 1 DU FORMULAIRE-->

      <!--Partie 2-->
      <h2 class="text-4xl md:text-5xl font-black text-rouge">Je souhaite...</h2>
      <!--Partie 2-->
      <section class="flex flex-col gap-2">
        <div
          class="grid grid-cols-[2%,98%] justify-items-start p-4 gap-5 items-center w-full"
        >
          <input
            type="checkbox"
            class="w-5 h-5"
            name="soireeanniv"
            v-model="soireeanniv"
          />
          <label class="uppercase">PARTICIPER À LA SOIRÉE DES 25 ANS MMI</label>
        </div>

        <div
          class="grid grid-cols-[2%,98%] justify-items-start p-4 gap-5 items-center w-full"
        >
          <input type="checkbox" class="w-5 h-5" v-model="participationdefi" />
          <label class="uppercase">PARTICIPER AU DÉFI 24H</label>
        </div>

        <div
          class="grid grid-cols-[2%,98%] justify-items-start p-4 gap-5 items-center w-full"
        >
          <input type="checkbox" class="w-5 h-5" v-model="benevoledefi" />
          <label class="uppercase">ÊTRE BÉNÉVOLE LORS DU DÉFI 24H</label>
        </div>

        <div
          class="grid grid-cols-[2%,98%] justify-items-start p-4 gap-5 items-center w-full"
        >
          <input type="checkbox" class="w-5 h-5" v-model="visitedefi" />
          <label class="uppercase">
            Revoir et discuter avec les anciens étudiants et les professeurs
            LORS DU DÉFI 24H</label
          >
        </div>
      </section>

      <!--PARTIE 3-->
      <h2 class="text-4xl md:text-5xl font-black text-bleu">Je suis...</h2>
      <!--PARTIE 3-->
      <section class="flex flex-col gap-2">
        <div
          class="grid grid-cols-[2%,98%] justify-items-start p-4 gap-5 items-center w-full"
        >
          <input type="radio" class="w-5 h-5" v-model="role" value="etudiant" />
          <label>Actuellement étudiant.e (MMI1, MMI2 ou LPWD)</label>
        </div>

        <div
          class="grid grid-cols-[2%,98%] justify-items-start p-4 gap-5 items-center w-full"
        >
          <input
            type="radio"
            class="w-5 h-5"
            v-model="role"
            value="ancien-etudiant"
          />
          <label>Un.e ancien.ne étudiant.e</label>
        </div>

        <div
          class="grid grid-cols-[2%,98%] justify-items-start p-4 gap-5 items-center w-full"
        >
          <input
            type="radio"
            class="w-5 h-5"
            v-model="role"
            value="autre-que-etudiant"
          />
          <label>Autre</label>
        </div>
      </section>

      <!--Finalisation-->
      <div class="w-full flex flex-col gap-5 md:flex-row md:justify-evenly">
        <a href="#top" class="m-auto text-center w-fit">
          <button
            class="mx-auto bg-black border border-black border-1 p-7 text-2xl md:text-xl lg:text-2xl font-inter text-white font-black rounded-md"
            type="submit"
          >
            S'inscrire
          </button>
        </a>
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
      },
      uid: "",
      prenom: null, // PRENOM USER
      nom: null, // NOM USER
      pseudo: null, // PSEUDO USER

      soireeanniv: false, // PARTICIPATION OU NON SOIREE ANNIV 25 ANS
      participationdefi: false, // PARTICIPATION OU PAS DEFI
      benevoledefi: false, // BENEVOLE OU PAS DEFI
      visitedefi: false, // SIMPLE VISITE DU DEFI

      role: "autre", // ROLE DE L'USER

      isAdmin: false, // Si l'utilisateur est ou non administrateur

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
        this.user.password
      )
        .then((response) => {
          this.message = "User créé : " + this.user.email;
          this.uid = response.user.uid;

          const firestore = getFirestore();
          const dbUsers = collection(firestore, "user");
          const docRef = addDoc(dbUsers, {
            nom: this.nom,
            prenom: this.prenom,
            pseudo: this.pseudo,

            soireeanniv: this.soireeanniv,
            participationdefi: this.participationdefi,
            benevoledefi: this.benevoledefi,
            visitedefi: this.visitedefi,

            isAdmin: false,

            role: this.role,
            uiduser: this.uid,
          });

          signInWithEmailAndPassword(
            getAuth(),
            this.user.email,
            this.user.password
          ).then((response) => {
            this.user = response.user;
            this.message =
              "Vous êtes connecté sous : " +
              this.user.email +
              "(votre UID : " +
              this.uid +
              " )";
          });
          this.$router.push("/home");
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
