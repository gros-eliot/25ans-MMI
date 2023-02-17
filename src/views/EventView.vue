<script setup>
import Profil from "../components/icons/profil.vue";
</script>

<template>
  <section
    class="grid grid-rows-[70%,30%] grid-cols-1 md:grid-rows-1 md:grid-cols-[70%,30%] w-full h-96 gap-0"
  >
    <div
      class="bg-jaune flex justify-center items-center flex-col p-10 gap-5 text-center"
    >
      <a
        href="https://my.weezevent.com/journee-des-anciens-mmi-de-montbeliard-25-ans"
        class="w-fit h-fit"
      >
        <div
          class="flex justify-center items-center flex-col p-10 gap-5 text-center"
        >
          <h3 class="mmi-h3 text-center">
            Inscrivez-vous avant le jeudi&nbsp;23&nbsp;février&nbsp;!
          </h3>
          <p>
            Vous pourrez vous inscrire au défi 24h, à la soirée des 25 ans,
            ainsi qu’au repas du samedi 11 mars à 12h.
          </p>
          <p class="font-inter font-black">Cliquez-ici !</p>
        </div>
      </a>
    </div>
    <div
      class="bg-vert flex justify-center items-center flex-col p-10 gap-5 text-center"
    >
      <a
        href="https://my.weezevent.com/repas-samedi-soir-1"
        class="w-fit h-fit"
      >
        <div
          class="flex justify-center items-center flex-col p-10 gap-5 text-center"
        >
          <h3 class="mmi-h3 text-center">Commande Master Chicken</h3>
          <p>Pour avoir un repas lors du soir du samedi 11 mars,</p>
          <p class="font-inter font-black">Cliquez-ici !</p>
        </div>
      </a>
    </div>
  </section>

  <div class="2xl:flex mt-8">
    <div class="flex flex-col gap-3">
      <div class="2xl:flex items-center ml-5 2xl:mt-16 2xl:ml-0">
        <div class="2xl:mr-10">
          <div>
            <p class="mmi-texte">
              Pour fêter ses 25 ans, MMI organise un événement de rencontre le
              <strong>11 et 12 mars</strong>.
            </p>
            <p class="mr-16 mmi-texte">
              Tous les MMI, anciens, actuels et professeurs, sont invités le
              samedi 11 mars 2023 ! Rendez-vous à
              <strong>21h dans la salle 006 du département</strong> pour une
              soirée originale en coopération avec le défi 24h ! Un moment de
              partage unique entre anciens étudiants, étudiants actuels et
              professeurs autour d'une collation et de musique !
            </p>
          </div>
          <div>
            <p class="mb-10 mr-16 mmi-texte">
              Mais la fête de s'arrête pas là !
              <strong>Le dimanche 12 mars</strong>, venez participer à
              <strong
                >la remise des prix du défi 24h et du concours des 25
                ans</strong
              >
              ! Un appéro dinatoire permettra de cloturer en beauté ce week-end
              unique de partage et de souvenirs en mémoire de ces 25 magnifiques
              années passées ensemble à construire le département MMI que nous
              connaissons aujourd'hui !
            </p>
          </div>
        </div>
      </div>
    </div>
    <!--2525252525-->
    <div class="md:flex mt-5 mx-auto text-center items-center justify-center">
      <div class="m-auto">
        <h3
          class="md:ml-5 text-center mx-auto 2xl:hidden font-inter font-black text-6xl lg:text-8xl tracking-tighter"
        >
          MERCI !!
        </h3>
      </div>
      <div class="ml-auto w-full md:w-fit text-5xl md:text-8xl my-10">
        <div class="flex-col gap-16 flex max-w-xl w-full boxDefilementText">
          <p class="font-thin object1">
            252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525
          </p>
          <div class="md:flex mx-auto">
            <img
              src=" /images/funny-version/Profs.jpg"
              alt="Photo des professeurs"
              class="mmi-photo-2"
            />
            <img
              src=" /images/funny-version/Senente2.jpeg"
              alt="Photo Monsieur Senente"
              class="mmi-photo-2"
            />
          </div>
          <h3 class="mx-auto hidden 2xl:block mmi-h1 color-text">MERCI !!</h3>
        </div>
      </div>
    </div>
  </div>

  <div class="flex flex-col gap-10 bg-bleu">
    <div class="mt-10 flex justify-center">
      <h3 class="text-center mmi-h2">LE PLANNING DU WEEK-END</h3>
    </div>
    <div class="mx-5 my-10 grid grid-cols-1 md:grid-cols-2">
      <div>
        <p class="mmi-h3 font-black text-black">Samedi 11 mars 2023</p>
        <p class="mmi-texte font-bold">9h30 : Début du défi 24h</p>
        <p class="mmi-texte font-bold">10h30 : Cérémonie officielle</p>
        <p class="mmi-texte font-bold">12h : Repas</p>
        <p class="mmi-texte font-bold">19h : Repas</p>
        <p class="mmi-texte font-bold">21h : Soirée des 25 ans</p>
      </div>
      <div>
        <p class="mmi-h3 font-black text-black">Dimanche 12 mars 2023</p>
        <p class="mmi-texte font-bold">8h : Petit Déjeuné</p>
        <p class="mmi-texte font-bold">10h : Fin du Défi 24h</p>
        <p class="mmi-texte font-bold">
          11h : Remise des prix du Défi 24h et du Concours 25 ans
        </p>
        <p class="mmi-texte font-bold">11h30 : Apéro</p>
      </div>
    </div>
  </div>

  <!--Invitation connexion-->
  <div
    class="flex flex-col gap-5 md:grid md:grid-cols-[10%,90%] justify-items-center items-center justify-center w-full text-black p-5 py-10"
  >
    <Profil class="h-32 w-32 fill-black" />
    <div class="w-4/5 flex flex-col gap-10">
      <h2 class="mmi-h2">Connectez-vous !</h2>
      <p>
        Pour voter pour une oeuvre ou vous inscrire aux différents événements du
        week-end du 11 et 12 mars, connecter avec votre compte Défi 24h ou 25
        ans MMI !
      </p>
      <RouterLink to="connexion" class="w-fit">
        <button
          class="bg-beige text-black border-black border-t border-l-4 border-b-4 border-r px-5 py-2 font-bold z-10 hover:bg-black hover:border-beige hover:text-beige"
        >
          Connexion
        </button>
      </RouterLink>
    </div>
  </div>
</template>
<style scoped>
.color-text {
  animation: colored-text-animation 3s linear infinite;
}

@keyframes colored-text-animation {
  0% {
    color: #bba7e7;
  }
  19% {
    color: #bba7e7;
  }
  20% {
    color: #ff3636;
  }
  39% {
    color: #ff3636;
  }
  40% {
    color: #6dd678;
  }

  59% {
    color: #6dd678;
  }
  60% {
    color: #ffd600;
  }

  79% {
    color: #ffd600;
  }
  80% {
    color: black;
  }
  99% {
    color: black;
  }
  100% {
    color: #bba7e7;
  }
}
</style>
