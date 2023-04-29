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
    <div v-else-if="error">Uh oh, error!</div>
    <slot v-else />
  </div>
</template>
