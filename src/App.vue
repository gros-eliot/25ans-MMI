<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div class="bg-beige ">
<header>
    <Header />
  </header>
  <router-view></router-view>
  <footer>
    <Footer />
  </footer>
  </div>
</template>

<script>
import Header from "../src/assets/components/Header.vue"
import Footer from "../src/assets/components/Footer.vue"
</script>
