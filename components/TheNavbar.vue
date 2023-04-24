<script lang="ts" setup>
import navLinks from "@/services/navLinks";

const isDrawerOpened = ref(false);
</script>

<template>
  <header class="bg-primary-surface p-3 px-5">
    <div class="container mx-auto flex items-center">
      <img src="~/assets/img/icon-logo.svg" alt="Foodiewell Logo" />
      <!-- Menu btn (mobile only) -->
      <button
        @click="isDrawerOpened = !isDrawerOpened"
        class="sm:hidden cursor-pointer order-2"
      >
        <img src="~/assets/img/icon-hamburger.svg" alt="Hamburger icon" />
      </button>
      <BaseCta
        to="https://app.foodiewell.id"
        class="order-1 sm:order-5 ml-auto mr-4"
        >Masuk</BaseCta
      >
      <!-- Mobile nav drawer -->
      <Transition name="drawer">
        <template v-if="isDrawerOpened">
          <div
            class="w-screen fixed h-screen bg-black/40 left-0 top-0 backdrop"
            @click.self="isDrawerOpened = false"
          >
            <nav
              class="w-[65vw] sm:hidden bg-primary-surface h-full drawer font-light"
            >
              <ul class="flex flex-col gap-8 p-5">
                <template v-for="link in navLinks" :key="link.name">
                  <li>
                    <NuxtLink class="text-[#42454D] text-sm" :to="link.link">{{
                      link.name
                    }}</NuxtLink>
                  </li>
                </template>
              </ul>
            </nav>
          </div>
        </template>
      </Transition>
      <!-- Desktop nav -->
      <nav class="hidden sm:block bg-primary-surface ml-[1rem] md:ml-[6rem]">
        <ul class="flex gap-4">
          <template v-for="link in navLinks" :key="link.name">
            <li>
              <NuxtLink class="text-[#42454D] font-light" :to="link.link">{{
                link.name
              }}</NuxtLink>
            </li>
          </template>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style scoped>
/* VueJS transition for drawer */
.drawer-enter-active,
.drawer-leave-active {
  transition: all 0.5s ease-out;
}

.drawer-enter-from,
.drawer-leave-to {
  opacity: 0;
}

/* These other 4 selectors target the drawer itself */
.drawer-enter-active .drawer,
.drawer-leave-active .drawer {
  transition: all 0.3s ease-in-out;
}

.drawer-enter-from .drawer,
.drawer-leave-to .drawer {
  transform: translateX(-100%);
}

.drawer-enter-active .drawer {
  transition-delay: 0.05s;
}
</style>
