<template>
  <div class="relative flex flex-col min-h-screen">
    <TheNavbar />
    <main class="flex-1">
      <slot />
    </main>
    <TheFooter />
  </div>
</template>
