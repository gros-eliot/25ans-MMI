<template>
  <form class="flex flex-col gap-5 m-auto w-11/12 md:w-2/3 my-20">
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

    <div class="flex flex-row justify-start gap-5 items-center w-full">
      <input
        type="checkbox"
        class="w-20"
        name="soireeAnniversaire"
        v-model="soireeanniversaire"
        required
      />
      <label class="uppercase">PARTICIPER À LA SOIRÉE DES 25 ANS MMI</label>
    </div>

    <div class="flex flex-row justify-start gap-5 items-center w-full">
      <input
        type="checkbox"
        class="w-20"
        v-model="participationdefi"
        required
      />
      <label class="uppercase">PARTICIPER AU DÉFI 24H</label>
    </div>

    <div class="flex flex-row justify-start gap-5 items-center w-full">
      <input type="checkbox" class="w-20" v-model="benevoledefi" required />
      <label class="uppercase">ÊTRE BÉNÉVOLE LORS DU DÉFI 24H</label>
    </div>

    <div class="flex flex-row justify-start gap-5 items-center w-full">
      <input type="checkbox" class="w-20" v-model="visitedefi" required />
      <label class="uppercase">
        Revoir et discuter avec les anciens étudiants et les professeurs LORS DU
        DÉFI 24H</label
      >
    </div>

    <!--PARTIE 3-->
    <h2 class="mmi-h2 text-bleu">Je suis...</h2>
    <!--PARTIE 3-->

    <div class="flex flex-row justify-start gap-5 items-center w-full">
      <input type="radio" class="w-20" v-model="etudiant" required />
      <label>Actuellement étudiant.e (MMI1, MMI2 ou LPWD)</label>
    </div>

    <div class="flex flex-row justify-start gap-5 items-center w-full">
      <input type="radio" class="w-20" v-model="ancienetudiant" required />
      <label>Un.e ancien.ne étudiant.e</label>
    </div>

    <div class="flex flex-row justify-start gap-5 items-center w-full">
      <input type="radio" class="w-20" v-model="autretypepersonne" required />
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
  name: "QuestCreateView",
  data() {
    return {
      nom: "", // Pour la création d'un nouvelle quête (nom de la quête)
      cat: "", // Pour la création d'un nouvelle quête (cat de la catégorie de la quête)
      difficulty: "", // DIFFICULTE DE LA QUÊTE
      desc: "", // Pour la description de la quête
      date: "", // date de la quête

      listeQueteSynchro: [], // Liste des quêtes synchronisée - collection quêtes de Firebase
      listeCategorie: [], // Liste des CATEGORIES DE QUÊTES synchronisée - collection cat de Firebase
      listeDifficulte: [], // Liste des DIFFICULTES synchronisée - collection cat de Firebase

      //
      //
      //
      user: {
        // User connecté
        email: null,
        password: null,
      },
      userInfo: null, // Informations complémentaires user connecté (sorte de listeCatégorie, listePays)
      name: "", // Titre de l'application ou nom du user
      avatar: null, // Avatar / image du user connecté
      isAdmin: false, // Si l'utilisateur est ou non administrateur
    };
  },
  mounted() {
    // Montage de la vue
    this.getQueteSynchro();
    this.getCategorie();
    this.getDifficulte();

    //
    //
    //
    //
    //
    // Vérifier si un user connecté existe déjà
    // Au lancement de l'application
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
      this.name = "";
      this.avatar = null;
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
      const dbUsers = collection(firestore, "users");
      // Recherche du user par son uid
      const q = query(dbUsers, where("uid", "==", user.uid));
      await onSnapshot(q, (snapshot) => {
        this.userInfo = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        // console.log("userInfo", this.userInfo);
        // userInfo étant un tableau, onn récupère
        // ses informations dans la 1° cellule du tableau : 0
        this.name = this.userInfo[0].login;
        this.isAdmin = this.userInfo[0].admin;
        // Recherche de l'image du user sur le Storage

        const storage = getStorage();
        // Référence du fichier avec son nom
        const spaceRef = ref(storage, "users/" + this.userInfo[0].avatar);
        getDownloadURL(spaceRef)
          .then((url) => {
            this.avatar = url;
          })
          .catch((error) => {
            console.log("erreur downloadUrl", error);
          });
      });
    },

    async getQueteSynchro() {
      const firestore = getFirestore();
      const dbQuete = collection(firestore, "quete");
      const query = await onSnapshot(dbQuete, (snapshot) => {
        this.listeQueteSynchro = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
      });
    },

    async getCategorie() {
      const firestore = getFirestore();
      const dbCat = collection(firestore, "categorie");
      const query = await onSnapshot(dbCat, (snapshot) => {
        this.listeCategorie = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
      });
    },

    async getDifficulte() {
      const firestore = getFirestore();
      const dbDiff = collection(firestore, "difficulte");
      const query = await onSnapshot(dbDiff, (snapshot) => {
        this.listeDifficulte = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
      });
    },

    async createQuete() {
      const firestore = getFirestore();
      const dbQuete = collection(firestore, "quete");
      const docRef = await addDoc(dbQuete, {
        uid: this.userInfo[0].uid,
        nom: this.nom,
        date: this.date,
        cat: this.cat,
        difficulty: this.difficulty,
        desc: this.desc,
      });
      // console.log("document créé avec le id suivant : ", docRef.id);
      this.$router.push("/home");
    },

    async deleteQuete(quete) {
      const firestore = getFirestore();
      const docRef = doc(firestore, "quete", quete.id);
      await deleteDoc(docRef);
    },
  },
};
</script>
<style></style>
