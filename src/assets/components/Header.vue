<template> 
    <div class="flex  justify-between mx-5">
        <div class="flex items-center">
        <logo/>
        <p class="header hidden md:block font-neuemontreal text-[40px] lg:text-[45px] xl:text-[50px] text-black">/ MMI 25 ANS</p></div>
        <button class="relative z-50 mt-5" aria-controls="menu" :aria-expanded="menuOuvert" @click="menuOuvert = !menuOuvert " 
        :class="[menuOuvert ? 'hidden' : '',]">
            <Menu class="" />
            <span class="sr-only">Menu</span>
        </button>

        <button class="relative z-50 mt-5 mx-5" aria-controls="menu" :aria-expanded="menuOuvert" @click="menuOuvert = !menuOuvert " 
:class="[menuOuvert ? '' : 'hidden',]">
  <Croix class="" />
      <span class="sr-only">Menu</span>
    </button>
    

    <div class="fixed inset-0 translate-x-full motion-safe:transition-transform motion-safe:duration-1000"
    :class="[' bg-black  text-white', menuOuvert ? 'translate-x-0' : '',]">
     <div class="m-5 flex items-center">
          <router-link to="/">
            <logoBlanc/>
        </router-link>
        <p class=" font-bold hidden md:block font-neuemontreal text-[40px] lg:text-[45px] xl:text-[50px] text-white">/ MMI 25 ANS</p>
        </div>
    <div class="flex mt-20 justify-center items-center">
      <ul class="sm:flex gap-24 "  @click="menuOuvert = !menuOuvert ">
        
        <div class="flex items-between flex-col gap-10 lg:gap-20">
        
          <li class="mt-5 text-white font-neuemontreal text-[30px] md:text-[35px] lg:text-[40px]" >
            <router-link class="" to="/histoire">
               HISTOIRE
            </router-link>
            <span class="sr-only">Page communication</span>
          </li>
          <li class="mt-5 text-white font-neuemontreal text-[30px] md:text-[35px] lg:text-[40px]">
            <router-link class="" to="/design">
                PÔLE CRÉA
            </router-link>
            <span class="sr-only">Page créa</span>
          </li>
          <li class="mt-5 text-white font-neuemontreal text-[30px] md:text-[35px] lg:text-[40px]">
            <router-link class="" to="/event">
                EVENT
            </router-link>
            <span class="sr-only">Page event</span>
          </li>
        </div>


          <div class="flex flex-col mt-10 md:mt-0 gap-10 lg:gap-20">
          <li class="mt-5 text-white font-neuemontreal text-[30px] md:text-[35px] lg:text-[40px]">
            <router-link class="" to="/dev">
                PÔLE DEV
            </router-link>
            <span class="sr-only">Page dev</span>
          </li>
          <li class="mt-5 text-white font-neuemontreal text-[30px] md:text-[35px] lg:text-[40px]" >
            <router-link class="" to="/com">
               PÔLE COM
            </router-link>
            <span class="sr-only">Page communication</span>
          </li>
          
          <li class="mt-5 text-white font-neuemontreal text-[30px] md:text-[35px] lg:text-[40px]">
            <router-link class="" to="/connexion">
                CONNEXION
            </router-link>
            <span class="sr-only">Page connexion</span>
          </li>
               </div>
      </ul>
    </div>
  </div>
  </div>


</template>

<script setup>
import Menu from "./icons/menu.vue"
import logo from "./icons/logo.vue"
import logoBlanc from "./icons/logo_blanc.vue"
import Croix from "../components/icons/croix.vue"

  import { ref } from "@vue/reactivity";

  let menuOuvert = ref()
  menuOuvert.value = false

</script>