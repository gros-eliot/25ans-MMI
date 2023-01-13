<template>
  <form
    class="border-4 my-5 md:my-20 border-black bg-beige py-10 md:px-20 w-11/12 md:w-2/3 m-auto"
    @submit.prevent="onCnx()"
  >
    <div class="flex flex-col gap-12">
      <div class="flex flex-col">
        <label class="mmi-texte">Adresse mail</label>
        <input
          type="text"
          class="bg-beige border border-b-4 border-b-black border-beige"
          placeholder="mail"
          name="mail"
          v-model="user.email"
          required
        />
      </div>
      <div class="flex flex-col">
        <label class="mmi-texte">Mot de passe</label>
        <input
          type="password"
          class="bg-beige border border-b-4 border-b-black border-beige"
          placeholder="Password"
          name="Password"
          v-model="user.password"
          required
        />
      </div>

      <div class="flex place-content-center m-4">
        <div
          class="alert alert-warning w-fit text-xs bg-main-beige p-3"
          role="alert"
        >
          {{ message }}
        </div>
      </div>

      <div class="w-full flex flex-col md:flex-row md:justify-evenly">
        <button
          class="mx-auto bg-black border border-black border-1 p-7 text-2xl md:text-3xl lg:text-4xl font-inter text-beige font-black rounded-md"
          type="submit"
        >
          Se connecter
        </button>
        <button
          class="mx-auto bg-beige border border-black border-1 p-7 text-2xl md:text-3xl lg:text-4xl font-inter text-black font-black rounded-md"
        >
          Inscription
        </button>
      </div>
      <button class="m-auto text-center w-fit underline" @click="onDcnx()">
        Déconnexion
      </button>
    </div>
  </form>
</template>

<script>
import {
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-auth.js";

export default {
  data() {
    return {
      user: {
        email: null,
        password: null,
      },
      message: null,
    };
  },
  mounted() {
    let user = getAuth().currentUser;
    if (user) {
      this.user = user;
      this.message = "user deja connecter :" + this.user.email;
    } else {
      this.message = "user non connecter ;" + this.user.email;
    }
  },
  methods: {
    onCnx() {
      //se connecter avec un mots de pass
      signInWithEmailAndPassword(getAuth(), this.user.email, this.user.password)
        .then((response) => {
          console.log("user connect", response.user);
          this.user = response.user;
          this.message = "user connecter:" + this.user.email;
        })
        .catch((error) => {
          //erreur co
          console.log("erreur connect", error);
          this.message = "Erreur deco ";
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
          console.log("user  déconnect", this.user);
          this.message = "user non co ";
        })
        .catch((error) => {
          console.log("erreur  déconnect", error);
        });
    },
  },
};
</script>
