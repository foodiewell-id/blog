<script setup lang="ts">
import { AllArticle } from "~/types/Article";

defineProps({
  article: {
    type: Object as PropType<AllArticle>,
    required: true,
  },
});
</script>

<template>
  <NuxtLink
    :to="`/article/${article.slug}`"
    class="border border-grey-light rounded-md shadow-sm max-w-[18rem] cursor-pointer hover:border-primary focus:outline-primary transition-all overflow-hidden"
  >
    <article class="h-full">
      <img
        class="w-full border-grey-light object-cover border-b h-[12rem]"
        :src="article.thumbnail.url"
        :alt="article.title"
      />
      <div class="p-5 pt-4 h-full">
        <Tag>{{ article.tag }}</Tag>
        <h2
          class="text-lg font-medium mt-2 text-black text-ellipsis line-clamp-3"
        >
          {{ article.title }}
        </h2>
        <p class="text-grey text-sm mt-2 font-light text-ellipsis line-clamp-3">
          {{ article.articleDescription }}
        </p>
      </div>
    </article>
  </NuxtLink>
</template>
