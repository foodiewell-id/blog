// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss"],
  css: [
    "@/assets/css/tailwind.css",
    "@/assets/css/base.css",
    "@/assets/css/transitions.css",
  ],
});
