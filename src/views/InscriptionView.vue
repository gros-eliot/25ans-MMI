<template>
  <form
    class="flex flex-col gap-5 m-auto w-11/12 md:w-2/3 my-20"
    @submit.prevent="finalizeInscription()"
  >
    <section class="flex flex-col gap-10 w-full mb-5">
      <div class="flex flex-col">
        <label class="font-black">Prénom*</label>
        <input
          type="text"
          class="bg-beige border-b-4 border-b-black"
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
          class="bg-beige border-b-4 border-b-black"
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
          class="bg-beige border-b-4 border-b-black"
          placeholder="Pseudonyme"
          name="pseudo"
          v-model="pseudo"
        />
      </div>
    </section>

    <!--Partie 2-->
    <h2 class="mmi-h2 text-rouge">Je souhaite...</h2>
    <!--Partie 2-->

    <div
      class="grid grid-cols-[2%,98%] justify-items-start p-4 gap-5 items-center w-full"
    >
      <input
        type="checkbox"
        class="w-5 h-5"
        name="soireeAnniversaire"
        v-model="soireeanniversaire"
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
        Revoir et discuter avec les anciens étudiants et les professeurs LORS DU
        DÉFI 24H</label
      >
    </div>

    <!--PARTIE 3-->
    <h2 class="mmi-h2 text-bleu">Je suis...</h2>
    <!--PARTIE 3-->

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

    <button
      class="p-4 md:p-6 bg-black text-beige w-fit m-auto my-5 rounded-md"
      type="submit"
    >
      Finaliser mon inscription
    </button>
  </form>
</template>

<script>
// Bibliothèque Firestore : import des fonctions
// Fonctions Firestore

import {
  getFirestore,
  collection,
  doc,
  addDoc,
  updateDoc,
  onSnapshot,
  query,
  where,
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js";

// Fonction authentification
import { getAuth } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-auth.js";

import { emitter } from "../main.js";

export default {
  name: "InscriptionView",
  data() {
    return {
      uiduser: "",
      prenom: "", // PRENOM USER
      nom: "", // NOM USER
      pseudo: "", // PSEUDO USER

      soireeanniv: false, // PARTICIPATION OU NON SOIREE ANNIV 25 ANS
      participationdefi: false, // PARTICIPATION OU PAS DEFI
      benevoledefi: false, // BENEVOLE OU PAS DEFI
      visitedefi: false, // SIMPLE VISITE DU DEFI

      role: "", // ROLE DE L'USER

      isAdmin: false, // Si l'utilisateur est ou non administrateur

      //
      //
      //
      userInfo: null, // Informations complémentaires user connecté
      user: {
        // User connecté
        email: null,
        password: null,
      },
    };
  },
  mounted() {
    //
    //
    //
    //
    //
    // Vérifier si un user connecté existe déjà
    // Au lancement de la page
    this.getUserConnect();

    // Ecoute de l'évènement de connexion
    emitter.on("connectUser", (e) => {
      // Récupération du user
      this.user = e.user;

      // Recherche infos complémentaires du user
      this.getUserInfo(this.user);
    });

    // Ecoute de l'évènement de deconnexion
    emitter.on("deConnectUser", (e) => {
      // Récupération user
      this.user = e.user;

      // Réinitialisation infos complémentaires user

      this.userInfo = null;
      this.isAdmin = false;
    });
    //
    //
    //
    //
    //
  },
  methods: {
    async getUserConnect() {
      await getAuth().onAuthStateChanged(
        function (user) {
          if (user) {
            // Récupération du user connecté
            this.user = user;
            this.uiduser = user.uid;
            console.log(user.uid);
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
      });
    },

    async finalizeInscription() {
      const firestore = getFirestore();
      const dbUsers = collection(firestore, "user");
      const docRef = await addDoc(dbUsers, {
        uiduser: this.uiduser,
        nom: this.nom,
        prenom: this.prenom,
        pseudo: this.pseudo,

        soireeanniv: this.soireeanniv,
        participationdefi: this.participationdefi,
        benevoledefi: this.benevoledefi,
        visitedefi: this.visitedefi,

        role: this.role,
      });
      console.log("document créé avec le id suivant : ", docRef.id);
      this.$router.push("/home");
    },
  },
};
</script>
<style></style>
