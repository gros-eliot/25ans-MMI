import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/main.css'
import '@/index.css'


import { initializeApp } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-app.js";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDBMUR5K3U-DolOgJ2SiaWn8lJQIMnF1UY",
  authDomain: "defi24-d6d8b.firebaseapp.com",
  projectId: "defi24-d6d8b",
  storageBucket: "defi24-d6d8b.appspot.com",
  messagingSenderId: "367543472866",
  appId: "1:367543472866:web:8baba74a83451e7bf984bb",
  measurementId: "G-TZB6STFFGD",
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
const app = createApp(App);

let signInButton = document.getElementById("signup");

app.use(router);

app.mount("#app");