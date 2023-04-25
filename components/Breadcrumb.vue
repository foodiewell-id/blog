<script setup lang="ts">
import Link from "@/types/Link";

const props = defineProps({
  crumbs: {
    type: Array as PropType<Array<Link>>,
  },
});

const crumbsComputed = computed(() => {
  const copy = props.crumbs || [];

  copy.unshift(
    { name: "Beranda", link: "https://foodiewell.id" },
    { name: "Blog", link: "/" }
  );

  return copy;
});
</script>

<template>
  <nav>
    <ul class="flex items-center text-[#9CA3AF] gap-1">
      <template v-for="crumb in crumbsComputed" :key="crumb.link">
        <li
          class="max-w-[8rem] sm:max-w-[15rem] md:max-w-[20rem] whitespace-nowrap overflow-hidden text-ellipsis"
        >
          <NuxtLink :to="crumb.link">{{ crumb.name }}</NuxtLink>
        </li>

        <img
          class="last:hidden"
          src="~/assets/img/icon-right-arrow.svg"
          alt="Right arrow icon"
        />
      </template>
    </ul>
  </nav>
</template>
