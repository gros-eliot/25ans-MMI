<script setup>
import { ref } from "@vue/reactivity";

const nvlUtilisateur = ref(false);
</script>
<template>
  <div>
    <button v-if="user">Se déconnecter ({{ user.email }})</button>
    <FormKit
      v-else
      type="form"
      :submit-label="nvlUtilisateur ? 'S\'inscrire' : 'Se connecter'"
      :submit-attrs="{
        classes: {
          input:
            'flex justify-center font-inter font-bold text-[20px] p-2 bg-red-500 text-white rounded',
        },
      }"
      :config="{
        classes: {
          input: 'p-1 rounded border-red-500 shadow-sm border-2',
          label: 'text-black font-inter font-semibold',
        },
      }"
    >
      <FormKit
        wrapper-class="items-center flex m-5 justify-start gap-3 max-w-xs"
        name="email"
        label="Votre eMail"
        type="email"
      />
      <FormKit
        wrapper-class="items-center flex m-5 justify-start gap-3 max-w-xs"
        name="password"
        label="Mot de passe"
        type="password"
      />
      <formKit
        wrapper-class="items-center flex flex-row-reverse my-3 justify-start gap-3 max-w-xs"
        label="Nouvel utilisateur ?"
        name="nvlUtilisateur"
        type="checkbox"
        v-model="nvlUtilisateur"
      />
    </FormKit>
  </div>
</template>
