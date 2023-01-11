<template>
  <section
    class="grid justify-items-center items-center justify-center w-full grid-cols-[70%,30%] bg-[linear-gradient(90deg,rgba(0,0,0,1)0%,rgba(0,0,0,0.1)50%,rgba(0,0,0,1)100%),linear-gradient(0deg,rgba(0,0,0,1)0%,rgba(0,0,0,0.1)50%,rgba(0,0,0,1)100%),url('/images/histoire/space.jpg')] bg-cover bg-center"
  >
    <div class="w-11/12 m-auto flex flex-col gap-20 p-2 text-white">
      <div class="flex flex-col gap-5">
        <p>
          C'est en 1997 que le département du MMI est créé. C'est le 3e
          département du campus de Belfort-Montbéliard ! Il y a eu juste avant
          la création du département RT (Réseaux & Télécommunications). Cela
          montre l'importance de la technologie au sein du campus.
        </p>
        <p>
          On le doit à plusieurs personnes, dont Jean-François Klopfenstein ou
          encore Daniel Mercier.
        </p>
        <p>
          Ensuite, d'autres départements se sont installés au sein du campus
          (LEA, UFR STGI, etc.)
        </p>
      </div>
    </div>

    <div>
      <img
        src="/images/histoire/mmi-green-screen.png"
        alt="Ordinateur MMI"
        class="w-64 h-fit animated-computer"
      />
    </div>
  </section>
</template>
<style>
.animated-computer {
  animation: rotation-computer 20s linear infinite;
}

@keyframes rotation-computer {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
