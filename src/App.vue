<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div class="bg-beige ">
  <Header/>
  <Footer/>
  </div>
  <router-view></router-view>
  
</template>

<script>
import Header from "../src/assets/components/Header.vue"
import Footer from "../src/assets/components/Footer.vue"
</script>
