

//
//
//

// Fonction d'authentification
import { getAuth } from 'https://www.gstatic.com/firebasejs/9.7.0/firebase-auth.js'

// Fonctions Firestore
import { 
  getFirestore, 
  collection, 
  onSnapshot, 
  query,
  where
} from 'https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js'

//
//
//

import { createRouter, createWebHistory } from 'vue-router'

import CadeauView from "../views/CadeauView.vue"
import HomeView from '../views/HomeView.vue'
import ContactView from "../views/ContactView.vue"
import MentionsLegalesView from "../views/MentionsLegalesView.vue"

import ConnexionView from "../views/ConnexionView.vue"
import ProfilView from "../views/ProfilView.vue"

import ComView from "../views/ComView.vue"
import CreaView from "../views/CreaView.vue"
import DevView from "../views/DevView.vue"
import SecretView from "../views/SecretView.vue"
import EventView from "../views/EventView.vue"
import HistoireView from "../views/HistoireView.vue"
import VoteView from "../views/VoteView.vue"

import PageNotFound from "../views/PageNotFound.vue"


import AdminView from "../views/AdminView.vue"

const routes = [
    { path: '/',  name: 'cadeau', component: CadeauView },
    { path: '/home',  name: 'home', component: HomeView },
    { path: '/contact',  name: 'contact', component: ContactView },
    { path: '/mentionslegales',  name: 'mentionslegales', component: MentionsLegalesView },

    { path: '/connexion',  name: 'connexion', component: ConnexionView },
    { path: '/profil/:id',  name: 'profil', component: ProfilView, beforeEnter:guardProfil },
    
    { path: '/com',  name: 'com', component: ComView },
    { path: '/crea',  name: 'crea', component: CreaView },
    { path: '/dev',  name: 'dev', component: DevView },
    { path: '/secret',  name: 'secret', component: SecretView },

    { path: '/vote',  name: 'vote', component: VoteView },

    { path: '/event',  name: 'event', component: EventView },
    { path: '/histoire',  name: 'histoire', component: HistoireView },
    
    { path: '/admin',  name: 'admin', component: AdminView, beforeEnter:guardAdmin },

    { path: '/:pathMatch(.*)*',  name: 'notfound', component: PageNotFound },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior (to, from, savedPosition) {
    return savedPosition || {top:0}
  }
})


// On créé un guard : Observateur (fonction) permettant de savoir si un utilisateur
// a le droit d'utiliser une route
// paramètres : to : d'où il vient, from où il veut aller, next où il doit aller après contrôle
function guardProfil(to, from, next) {
  // recherche utilisateur connecté
  getAuth().onAuthStateChanged(function(user) {
    if(user) {
      // User connecté
//      console.log('router OK => user ', user);
      // Obtenir Firestore
      const firestore = getFirestore();
      // Base de données (collection)  document participant
      const dbUsers = collection(firestore, "user");
      // Recherche du user par son uid
      const q = query(dbUsers, where("uiduser", "==", user.uid));
      onSnapshot(q, (snapshot) => {
          let userInfo = snapshot.docs.map(doc => ( {id:doc.id, ...doc.data()}));
     
          /*Création variable accessPage : si null => pas accès au profil. Si remplit => acces au profil */
          let accesPages=null;
          accesPages=userInfo[0];
          if(accesPages != null){

            next(to.params.name);
            return;
          }else{
            // Utilisateur déjà inscrit : retour accueil
            alert("Vous êtes déjà inscrit!");
            next({name: "home"});
            return;
          }
      })
    }
  });
}

// On créé un guard : Observateur (fonction) permettant de savoir si un utilisateur
// a le droit d'utiliser une route
// paramètres : to : d'où il vient, from où il veut aller, next où il doit aller après contrôle
function guardAdmin(to, from, next) {
  // recherche utilisateur connecté
  getAuth().onAuthStateChanged(function(user) {
    if(user) {
      // User connecté
//      console.log('router OK => user ', user);
      // Obtenir Firestore
      const firestore = getFirestore();
      // Base de données (collection)  document participant
      const dbUsers = collection(firestore, "user");
      // Recherche du user par son uid
      const q = query(dbUsers, where("uiduser", "==", user.uid));
      onSnapshot(q, (snapshot) => {
          let userInfo = snapshot.docs.map(doc => ( {id:doc.id, ...doc.data()}));
     
          /*Création variable accessPage : si null => pas accès au profil. Si remplit => acces au profil */
          let accesPages=null;
          accesPages=userInfo[0].admin;
          if(accesPages === true){

            next(to.params.name);
            return;
          }else{
            // Utilisateur déjà inscrit : retour accueil
            alert("Erreur accès page : vous devez être administrateur pour avoir accès à cette page.");
            next({name: "home"});
            return;
          }
      })
    }
  });
}



export default router
