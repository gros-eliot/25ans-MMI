<template>
  <div class="m-5">
    <h2 class="mmi-h2">Nombre de votes par oeuvre</h2>
    <p>
      Oeuvre n1 :
      <span class="font-inter font-bold text-rouge">{{ nb1 }}</span> vote(s)
    </p>
    <p>
      Oeuvre n2 :
      <span class="font-inter font-bold text-rouge">{{ nb2 }}</span> vote(s)
    </p>
    <p>
      Oeuvre n3 :
      <span class="font-inter font-bold text-rouge">{{ nb3 }}</span> vote(s)
    </p>
  </div>
</template>

<script>
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
  name: "AdminView",
  data() {
    return {
      user: {
        // User connecté
        email: null,
        password: null,
      },
      uidUserExport: null,
      oeuvreFavoriteExport: null,
      usersInfo: [],

      idUser: null,
      nb1: 0,
      nb2: 0,
      nb3: 0,
    };
  },
  mounted() {
    //
    // Vérifier si un user connecté existe déjà
    // Au lancement de l'application
    this.getUserVotes();
  },
  methods: {
    async getUserVotes() {
      // Rechercher les informations complémentaires de l'utilisateur
      // Obtenir Firestore
      const firestore = getFirestore();
      // Base de données (collection)  document participant
      const dbUsers = collection(firestore, "user");
      // Recherche du user par son uid
      const q = query(dbUsers);
      await onSnapshot(q, (snapshot) => {
        this.usersInfo = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        this.oeuvreFavoriteExport = this.usersInfo[0].oeuvre_favorite;
        this.uidUserExport = this.usersInfo[0].uiduser;

        if (this.oeuvreFavoriteExport === "oeuvre1") {
          this.nb1++;
        }
        if (this.oeuvreFavoriteExport === "oeuvre2") {
          this.nb2++;
        }
        if (this.oeuvreFavoriteExport === "oeuvre3") {
          this.nb3++;
        }
      });
    },
  },
};
</script>
