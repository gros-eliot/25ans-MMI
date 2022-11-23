<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <svg
    width="300"
    height="147"
    viewBox="0 0 350 147"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <!--Dev-->
    <RouterLink
      to="/dev"
      class="fill-black transition ease"
      :class="{
        'fill-vert': $route.name === 'dev',
      }"
    >
      <rect
        x="241.549"
        y="85.7354"
        width="54.2254"
        height="60.519"
        class="fill-black transition ease"
        :class="{
          'fill-vert': $route.name === 'dev',
        }"
      />
      <rect
        x="217.887"
        y="85.7354"
        width="23.662"
        height="35.3028"
        class="fill-black transition ease"
        :class="{
          'fill-vert': $route.name === 'dev',
        }"
      />
    </RouterLink>
    <!---->

    <!--Design-->
    <RouterLink
      to="/crea"
      class="fill-black transition ease"
      :class="{
        'fill-bleu': $route.name === 'crea',
      }"
    >
      <rect
        x="212.958"
        y="35.3027"
        width="117.324"
        height="36.3114"
        class="fill-black transition ease"
        :class="{
          'fill-bleu': $route.name === 'crea',
        }"
      />
      <rect
        x="225.774"
        width="124.225"
        height="51.4412"
        class="fill-black transition ease"
        :class="{
          'fill-bleu': $route.name === 'crea',
        }"
      />
    </RouterLink>
    <!---->

    <!--Com-->
    <RouterLink
      to="/com"
      class="fill-black transition ease"
      :class="{
        'fill-rouge': $route.name === 'com',
      }"
    >
      <rect
        y="22.1904"
        width="43.3803"
        height="49.4239"
        class="fill-black transition ease"
        :class="{
          'fill-rouge': $route.name === 'com',
        }"
      />
      <rect
        y="35.3027"
        width="188.31"
        height="36.3114"
        class="fill-black transition ease"
        :class="{
          'fill-rouge': $route.name === 'com',
        }"
      />
      <rect
        x="60.1406"
        width="128.169"
        height="35.3028"
        class="fill-black transition ease"
        :class="{
          'fill-rouge': $route.name === 'com',
        }"
      />
    </RouterLink>
    <!---->

    <!--Secret-->
    <RouterLink
      to="/secret"
      class="fill-black transition ease m-4"
      :class="{
        'fill-jaune': $route.name === 'secret',
      }"
    >
      <rect
        x="200.141"
        y="13.1125"
        width="20.85916"
        height="20.0865"
        class="fill-black transition ease"
        :class="{
          'fill-jaune': $route.name === 'secret',
        }"
      />
    </RouterLink>
    <!---->
  </svg>
</template>
