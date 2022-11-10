<template> 
    <div class="flex justify-between mx-5">
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
    :class="['bg-Rose_foncé  text-white', menuOuvert ? 'translate-x-0' : '',]">
    <div class="flex justify-center items-center">
      <ul class="sm:flex "  @click="menuOuvert = !menuOuvert ">
        <div class="flex items-center flex-col mt-10">
            
          <router-link to="/">
          <h2 class="font-bold text-2xl mb-5">Sup'analyse</h2>
        </router-link>
        
          <li class="mt-5" >
            <router-link class="" to="/etuaca">
                Répartition des étudiants par académie
            </router-link>
            <span class="sr-only">Répartition des étudiants par académie</span>
          </li>
          <li class="mt-5">
            <router-link class="" to="/genres">
                L’enseignement supérieur et les genres
            </router-link>
            <span class="sr-only">L’enseignement supérieur et les genres</span>
          </li>
          <li class="mt-5">
            <router-link class="" to="/typeseta">
                Les types d’établissement dans l’enseignement supérieur
            </router-link>
            <span class="sr-only">Les types d’établissement dans l’enseignement supérieur</span>
          </li>
          <li class="mt-5">
            <router-link class="" to="/temps">
                L’enseignement supérieur dans le temps
            </router-link>
            <span class="sr-only">L’enseignement supérieur dans le temps</span>
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

  import { ref } from "@vue/reactivity";

  let menuOuvert = ref()
  menuOuvert.value = false

</script>