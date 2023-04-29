<template>
  <div class="text-center">
    <div class="rounded-lg shadow-sm bg-black/25 p-3">
      <div
        class="bg-red-300 w-1/2 rounded-[.5rem] transition-all duration-[.4s] h-[1.1rem] animate-progress bg-[linear-gradient(45deg,rgb(252,163,17))_25%,transparent_25%,transparent_50%,rgb(252,163,17))_50%,rgb(252,163,17))_75%,transparent_75%,transparent]"
      ></div>
    </div>
    <p class="mt-3">Tunggu sebentar ya...</p>
  </div>
</template>

<style scoped>
.animate-progress {
  @apply bg-gradient-to-r from-yellow-400 via-yellow-400 to-transparent rounded-full;
  animation: progressAnimationStrike 2s infinite;
}

@keyframes progressAnimationStrike {
  0% {
    transform: translateX(0);
  }

  50% {
    transform: translateX(100%);
  }

  100% {
    transform: translateX(0);
  }
}
</style>
