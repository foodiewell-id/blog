<script setup lang="ts">
defineProps({
  error: {},
  loading: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <div>
    <div
      class="min-h-[20rem] flex justify-center items-center max-w-2xl mx-auto"
      v-if="loading"
    >
      <InifiniteProgressBar class="flex-1" />
    </div>
    <div
      class="min-h-[30rem] flex flex-col justify-center items-center max-w-2xl mx-auto"
      v-else-if="error"
    >
      <h3 class="text-2xl mb-4 text-center">Mohon maaf, terjadi error</h3>
      <img
        class="w-[20rem] max-w-full"
        src="~/assets/img/img-maskot-nangis.png"
        alt="Crying Mindi"
      />
    </div>
    <slot v-else />
  </div>
</template>
