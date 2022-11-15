<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <Header />
  </header>
  <div class="bg-beige ">


  </div>
  <router-view></router-view>
  <footer>
    <Footer />
  </footer>
</template>

<script>
import Header from "../src/assets/components/Header.vue"
import Footer from "../src/assets/components/Footer.vue"
</script>
