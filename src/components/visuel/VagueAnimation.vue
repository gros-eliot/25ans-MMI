<template>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 150 185 250">
    <g id="etat1" class="w-full h-screen overflow-hidden">
      <path
        d="M185,206.5v332s-84-19.89-84-97.89S0,337.61,0,279.61,101,176.61,101,111.61,185,0,185,0V206.5Z"
      />
    </g>

    <g id="etat2" class="w-full h-screen overflow-hidden">
      <path
        d="M169,206.5v332s-132-22-132-100,62-99,62-157S0,185.5,0,120.5,169,0,169,0V206.5Z"
      />
    </g>
  </svg>
</template>

<style scoped>
#etat1 {
  animation: etat1animation 5s infinite ease-in-out;
}
#etat2 {
  animation: etat2animation 5s infinite ease-in-out;
}

@keyframes etat1animation {
  0% {
    translate: 100% 0%;
  }
  50% {
    translate: 0% 0%;
  }
  100% {
    translate: 100% 0%;
  }
}
@keyframes etat2animation {
  0% {
    translate: 20% 0%;
  }
  50% {
    translate: 100% 0%;
  }
  100% {
    translate: 20% 0%;
  }
}
</style>
