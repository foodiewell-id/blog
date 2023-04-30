import { DatocmsImagePlugin } from "vue-datocms";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(DatocmsImagePlugin);
});
