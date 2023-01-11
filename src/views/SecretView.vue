<template>
  <section
    class="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid w-11/12 h-screen m-auto my-10"
  >
    <OeuvreComponent 
      :sourceImage="'oeuvre1.png'"
      :auteur="'Moi'"
      :nom="'Testeur'"
      :description="'Cette oeuvre a été réalisée par Y.'"/>
    <OeuvreComponent 
      :sourceImage="'oeuvre2.png'"
      :auteur="'Moi'"
      :nom="'Testeur'"
      :description="'Cette oeuvre a été réalisée par Y.'"/>
    <OeuvreComponent 
      :sourceImage="'oeuvre3.png'"
      :auteur="'Moi'"
      :nom="'Testeur'"
      :description="'Cette oeuvre a été réalisée par Y.'"/>
    <OeuvreComponent 
      :sourceImage="'oeuvre4.png'"
      :auteur="'Moi'"
      :nom="'Testeur'"
      :description="'Cette oeuvre a été réalisée par Y.'"/>
    <OeuvreComponent 
      :sourceImage="'oeuvre5.png'"
      :auteur="'Moi'"
      :nom="'Testeur'"
      :description="'Cette oeuvre a été réalisée par Y.'"/>
    <OeuvreComponent 
      :sourceImage="'oeuvre6.png'"
      :auteur="'Moi'"
      :nom="'Testeur'"
      :description="'Cette oeuvre a été réalisée par Y.'"/>
    <OeuvreComponent 
      :sourceImage="'oeuvre7.png'"
      :auteur="'Moi'"
      :nom="'Testeur'"
      :description="'Cette oeuvre a été réalisée par Y.'"/>
    <OeuvreComponent 
      :sourceImage="'oeuvre8.png'"
      :auteur="'Moi'"
      :nom="'Testeur'"
      :description="'Cette oeuvre a été réalisée par Y.'"/>
    <OeuvreComponent 
      :sourceImage="'oeuvre9.jpg'"
      :auteur="'Moi'"
      :nom="'Testeur'"
      :description="'Cette oeuvre a été réalisée par Y.'"/>
    <OeuvreComponent 
      :sourceImage="'oeuvre10.png'"
      :auteur="'Moi'"
      :nom="'Testeur'"
      :description="'Cette oeuvre a été réalisée par Y.'"/>
    <OeuvreComponent 
      :sourceImage="'oeuvre11.png'"
      :auteur="'Moi'"
      :nom="'Testeur'"
      :description="'Cette oeuvre a été réalisée par Y.'"/>
    <OeuvreComponent 
      :sourceImage="'oeuvre12.png'"
      :auteur="'Moi'"
      :nom="'Testeur'"
      :description="'Cette oeuvre a été réalisée par Y.'"/>
    <OeuvreComponent 
      :sourceImage="'oeuvre13.png'"
      :auteur="'Moi'"
      :nom="'Testeur'"
      :description="'Cette oeuvre a été réalisée par Y.'"/>
  </section>
</template>

<script setup>
import OeuvreComponent from "../components/OeuvreComponent.vue";
</script>
