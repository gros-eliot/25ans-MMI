<template>
  <div
    class="flex justify-between px-5 items-start w-full z-[80]"
    :class="{ fixed: $route.name === 'histoire' }"
  >
    <!--Logo du header-->
    <RouterLink to="/home">
      <div class="flex items-center py-4 font-bold">
        <logo class="stroke-black w-8 h-8 stroke-[3]" />
        <p
          class="header hidden md:block text-2xl lg:text-3xl xl:text-4xl text-black"
        >
          / MMI 25 ANS
        </p>
      </div>
    </RouterLink>

    <!--Bouton pour afficher menu-->
    <button
      class="relative p-1 w-fit bg-black"
      aria-controls="menu"
      :aria-expanded="menuOuvert"
      @click="menuOuvert = !menuOuvert"
      :class="[menuOuvert ? 'hidden' : '']"
    >
      <Menu class="" />
      <span class="sr-only">Menu</span>
    </button>

    <!--Bouton pour cacher menu-->
    <div
      @click="menuOuvert = !menuOuvert"
      :class="[menuOuvert ? '' : 'hidden']"
      class="m-5"
    >
      <button
        class="fixed z-[99]"
        aria-controls="menu"
        :aria-expanded="menuOuvert"
      >
        <Croix class="w-8 h-8" />
        <span class="sr-only">Menu</span>
      </button>
    </div>

    <!--Menu hamburger déroulé-->
    <div
      class="fixed inset-0 translate-x-full motion-safe:transition-transform motion-safe:duration-1000 z-[90]"
      :class="[' bg-black  text-white', menuOuvert ? 'translate-x-0' : '']"
    >
      <div class="m-5 flex items-center">
        <router-link to="/">
          <logo class="stroke-white stroke-2" />
        </router-link>
        <p
          class="font-bold hidden md:block text-[40px] lg:text-[45px] xl:text-[50px] text-white"
        >
          / MMI 25 ANS
        </p>
      </div>
      <div class="flex mt-20 justify-center items-center">
        <ul class="sm:flex gap-24" @click="menuOuvert = !menuOuvert">
          <div class="flex items-between flex-col gap-10 lg:gap-20">
            <li
              class="mt-5 text-white text-[30px] md:text-[35px] lg:text-[40px]"
            >
              <router-link class="" to="/histoire"> HISTOIRE </router-link>
              <span class="sr-only">Page communication</span>
            </li>
            <li
              class="mt-5 text-white text-[30px] md:text-[35px] lg:text-[40px]"
            >
              <router-link class="" to="/crea"> PÔLE CRÉA </router-link>
              <span class="sr-only">Page créa</span>
            </li>
            <li
              class="mt-5 text-white text-[30px] md:text-[35px] lg:text-[40px]"
            >
              <router-link class="" to="/event"> EVENT </router-link>
              <span class="sr-only">Page event</span>
            </li>
          </div>

          <div class="flex flex-col mt-10 md:mt-0 gap-10 lg:gap-20">
            <li
              class="mt-5 text-white text-[30px] md:text-[35px] lg:text-[40px]"
            >
              <router-link class="" to="/dev"> PÔLE DEV </router-link>
              <span class="sr-only">Page dev</span>
            </li>
            <li
              class="mt-5 text-white text-[30px] md:text-[35px] lg:text-[40px]"
            >
              <router-link class="" to="/com"> PÔLE COM </router-link>
              <span class="sr-only">Page communication</span>
            </li>

            <li
              class="mt-5 text-white text-[30px] md:text-[35px] lg:text-[40px]"
            >
              <router-link class="" to="/connexion"> CONNEXION </router-link>
              <span class="sr-only">Page connexion</span>
            </li>
          </div>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import Menu from "@/components/icons/menu.vue";
import logo from "@/components/icons/logo.vue";
import Croix from "@/components/icons/croix.vue";

import { ref } from "@vue/reactivity";

let menuOuvert = ref();
menuOuvert.value = false;
</script>
