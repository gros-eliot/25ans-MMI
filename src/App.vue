<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div>
    <header>
      <HeaderView />
    </header>
    <router-view></router-view>
    <footer>
      <FooterView />
    </footer>
  </div>
</template>

<script>
import HeaderView from "../src/assets/components/Header.vue";
import FooterView from "../src/assets/components/Footer.vue";
</script>
