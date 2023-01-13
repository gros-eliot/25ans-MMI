<template>
  <form
    class="flex flex-col gap-5 m-auto w-11/12 md:w-2/3 my-20"
    @submit.prevent="finalizeInscription()"
    enctype="multipart/form-data"
  >
    <section class="flex flex-col gap-10 w-full mb-5">
      <div class="flex flex-col">
        <label class="font-black">Prénom*</label>
        <input
          type="text"
          class="bg-beige border-b-4 border-b-black"
          placeholder="Prénom"
          name="prenom"
          v-model="user.prenom"
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
          v-model="user.nom"
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
          v-model="user.pseudo"
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
        v-model="user.soireeanniversaire"
      />
      <label class="uppercase">PARTICIPER À LA SOIRÉE DES 25 ANS MMI</label>
    </div>

    <div
      class="grid grid-cols-[2%,98%] justify-items-start p-4 gap-5 items-center w-full"
    >
      <input type="checkbox" class="w-5 h-5" v-model="user.participationdefi" />
      <label class="uppercase">PARTICIPER AU DÉFI 24H</label>
    </div>

    <div
      class="grid grid-cols-[2%,98%] justify-items-start p-4 gap-5 items-center w-full"
    >
      <input type="checkbox" class="w-5 h-5" v-model="user.benevoledefi" />
      <label class="uppercase">ÊTRE BÉNÉVOLE LORS DU DÉFI 24H</label>
    </div>

    <div
      class="grid grid-cols-[2%,98%] justify-items-start p-4 gap-5 items-center w-full"
    >
      <input type="checkbox" class="w-5 h-5" v-model="user.visitedefi" />
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
      <input
        type="radio"
        class="w-5 h-5"
        v-model="user.role"
        value="etudiant"
      />
      <label>Actuellement étudiant.e (MMI1, MMI2 ou LPWD)</label>
    </div>

    <div
      class="grid grid-cols-[2%,98%] justify-items-start p-4 gap-5 items-center w-full"
    >
      <input
        type="radio"
        class="w-5 h-5"
        v-model="user.role"
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
        v-model="user.role"
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
      refUser: null, // Référence de l'user à modifier
      user: {
        prenom: "", // PRENOM USER
        nom: "", // NOM USER
        pseudo: "", // PSEUDO USER
        soireeanniv: false, // PARTICIPATION OU NON SOIREE ANNIV 25 ANS
        participationdefi: false, // PARTICIPATION OU PAS DEFI
        benevoledefi: false, // BENEVOLE OU PAS DEFI
        visitedefi: false, // SIMPLE VISITE DU DEFI
        role: "", // ROLE DE L'USER
        isAdmin: false, // Si l'utilisateur est ou non administrateur
      },
    };
  },
  mounted() {
    // console.log("id quête en cours de modification : ", this.$route.params.id);
    // Recherche participant concerné
    this.getUser(this.$route.params.id);
    // Montage de la vue
  },
  methods: {
    async getUser(uiduser) {
      const firestore = getFirestore();

      const docRef = doc(firestore, "user", uiduser);

      this.refUser = await getDoc(docRef);
      // Test si le participant demandé existe
      if (this.refUser.exists()) {
        // Si oui on récupère ses données
        this.user = this.refUser.data();
      } else {
        // Sinon simple message d'erreur
        this.console.log("Quête inexistant");
      }
    },

    async updateUser() {
      // Dans tous les cas on met à jour la quête dans Firestore
      const firestore = getFirestore();
      // Modification de la quête à partir de son id
      await updateDoc(doc(firestore, "user", this.$route.params.id), this.user);
      // redirection sur la liste des quêtes
      this.$router.push("/home");

      // console.log("User " + this.$route.params.id + " modifié !");
    },
  },
};
</script>
<style></style>
