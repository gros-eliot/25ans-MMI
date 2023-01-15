<template>
  <div class="m-5">
    <h2 class="mmi-h2">Oeuvre favorite</h2>
    <p>Découvrir l'oeuvre favorite</p>
  </div>
  <table class="w-11/12 m-5 bg-black text-white border">
    <thead class="border">
      <td class="border">
        <p>Oeuvre voté</p>
      </td>
      <td>
        <p>UID votant</p>
      </td>
    </thead>

    <tbody>
      <td>
        <p>{{ resultsUsers[0] }}</p>
      </td>
      <td>
        <p>{{ resultsUsers[1] }}</p>
      </td>
    </tbody>
  </table>
  <!-- <AdminPie />-->
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
import AdminPie from "../components/AdminPie.vue";

export default {
  name: "AdminView",
  data() {
    return {
      user: {
        // User connecté
        email: null,
        password: null,
      },
      resultsUsers: [],
      uidUserExport: null,
      oeuvreFavoriteExport: null,
      usersInfo: [],
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
        this.uidUserExport = this.usersInfo[0].uiduser;
        this.oeuvreFavoriteExport = this.usersInfo[0].oeuvre_favorite;

        // userInfo étant un tableau, onn récupère
        // ses informations dans la 1° cellule du tableau : 0

        console.log(
          "UID votant / oeuvre voté : " +
            [this.uidUserExport, this.oeuvreFavoriteExport]
        );
      });
    },
  },
  components: { AdminPie },
};
</script>
