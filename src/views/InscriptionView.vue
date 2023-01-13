<template>
  <h2>IN</h2>
  <form>
    <div class="flex flex-col">
      <label class="font-black">Prénom</label>
      <input
        type="text"
        class="bg-white border border-b-4 border-b-black border-white"
        placeholder="Prénom"
        name="prenom"
        v-model="user.prenom"
        required
      />
    </div>
    <div class="flex flex-col">
      <label class="font-black">Nom</label>
      <input
        type="text"
        class="bg-white border border-b-4 border-b-black border-white"
        placeholder="Nom"
        name="nom"
        v-model="user.nom"
        required
      />
    </div>
  </form>
</template>
