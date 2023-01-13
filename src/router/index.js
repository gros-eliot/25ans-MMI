import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import CadeauView from "../views/CadeauView.vue"
import ComView from "../views/ComView.vue"
import ContactView from "../views/ContactView.vue"
import CreaView from "../views/CreaView.vue"
import DevView from "../views/DevView.vue"
import EventView from "../views/EventView.vue"
import MentionsLegalesView from "../views/MentionsLegalesView.vue"
import SecretView from "../views/SecretView.vue"
import ConnexionView from "../views/ConnexionView.vue"
import InscriptionView from "../views/InscriptionView.vue"

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
    { path: '/inscription',  name: 'inscription', component: InscriptionView },
    
    { path: '/com',  name: 'com', component: ComView },
    { path: '/crea',  name: 'crea', component: CreaView },
    { path: '/dev',  name: 'dev', component: DevView },
    { path: '/event',  name: 'event', component: EventView },
    
    
    { path: '/secret',  name: 'secret', component: SecretView },
    { path: '/histoire',  name: 'histoire', component: HistoireView },
    { path: '/:pathMatch(.*)*',  name: 'notfound', component: PageNotFound },
  ]
})

export default router
