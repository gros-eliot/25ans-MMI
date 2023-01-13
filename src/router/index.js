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


import PageNotFound from "../views/PageNotFound.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/',  name: 'cadeau', component: CadeauView },
    { path: '/home',  name: 'home', component: HomeView },
    { path: '/contact',  name: 'contact', component: ContactView },
    { path: '/mentionslegales',  name: 'mentionslegales', component: MentionsLegalesView },

    { path: '/connexion',  name: 'connexion', component: ConnexionView },
    { path: '/profil/:id',  name: 'profil', component: ProfilView },
    
    { path: '/com',  name: 'com', component: ComView },
    { path: '/crea',  name: 'crea', component: CreaView },
    { path: '/dev',  name: 'dev', component: DevView },
    { path: '/secret',  name: 'secret', component: SecretView },
    { path: '/event',  name: 'event', component: EventView },
    { path: '/histoire',  name: 'histoire', component: HistoireView },

    { path: '/:pathMatch(.*)*',  name: 'notfound', component: PageNotFound },
  ]
})

export default router
