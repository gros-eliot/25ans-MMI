<template>
  <p class="m-auto w-11/12">
    Vous avez trouvé la page secrète ! Découvrez ici toutes les oeuvres faite
    pour les 25 ans de MMI, ainsi que celles directement proposées par notre
    équipe.
  </p>
  <section
    class="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid w-11/12 h-[1000px] m-auto my-10"
  >
    <OeuvreComponent
      :sourceImage="`exodia-lilian-chesneau.jpg`"
      :auteur="`Lilian Chesneau`"
      :idImage="`elc1`"
      :nom="`Exodia`"
      :description="`Cette oeuvre a été réalisée par Lilian Chesneau.`"
    />
    <OeuvreComponent
      :sourceImage="`heart_shape-mathilde-vauquieres.png`"
      :auteur="`Mathilde Vauquieres`"
      :idImage="`hsmv1`"
      :nom="`Heart Shape`"
      :description="`Cette oeuvre a été réalisée par Mathilde Vauquieres. C'est un dessin à l'origine qui a été scanné.`"
    />
    <OeuvreComponent
      :sourceImage="`summer-sacha-wicky.jpg`"
      :auteur="`Sacha Wicky`"
      :idImage="`ssw1`"
      :nom="`Summer`"
      :description="`Cette oeuvre a été réalisée par Sacha Wicky.`"
    />
    <OeuvreComponent
      :sourceImage="`open_ur_mind-justine-emond.jpg`"
      :auteur="`Justine Emond`"
      :idImage="`oumje1`"
      :nom="`Open ur mind`"
      :description="`Cette oeuvre a été réalisée par Justine Emond.`"
    />
    <OeuvreComponent
      :sourceImage="`reussir-sami-ghorzi.jpg`"
      :auteur="`Sami Ghorzi`"
      :idImage="`rsg1`"
      :nom="`Réussir`"
      :description="`Cette oeuvre a été réalisée par Sami Ghorzi.`"
    />
    <OeuvreComponent
      :sourceImage="`niquedouille2-arthur-meyer-loris-saturni.jpg`"
      :auteur="`Arthur Meyer & Loris Saturni`"
      :idImage="`namls1`"
      :nom="`Niquedouille2`"
      :description="`Cette vidéo a été réalisée par Arthur Meyer et Loris Saturni.`"
      class="w-full"
    />
  </section>
</template>

<script setup>
import OeuvreComponent from "../components/OeuvreComponent.vue";
</script>
