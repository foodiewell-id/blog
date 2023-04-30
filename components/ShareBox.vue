<script setup lang="ts">
import generateShareLink from "~/services/generateShareLink";

const {
  public: { linkTelegramGroup, shareText, shareLinkBaseUrl },
} = useRuntimeConfig();

const props = defineProps({
  articleTitle: {
    type: String,
    required: true,
  },
  articleSlug: {
    type: String,
    required: true,
  },
});

const fullShareText = computed(() => `${shareText} ${props.articleTitle}`);
const fullShareLink = computed(
  () => `${shareLinkBaseUrl}/${props.articleSlug}`
);

const {
  facebookShareUrl,
  telegramShareUrl,
  twitterShareUrl,
  whatsappShareUrl,
} = generateShareLink(fullShareText.value, fullShareLink.value);
</script>

<template>
  <!-- Mobile Share Box -->
  <div
    class="2xl:hidden fixed top-[10rem] right-0 bg-white z-10 px-2 py-3 rounded-l-md shadow-md"
  >
    <ul class="flex items-center flex-col gap-y-3">
      <li>
        <a :href="telegramShareUrl">
          <img
            class="w-7 h-7"
            src="~/assets/img/icon-telegram.svg"
            alt="Telegram Icon"
          />
        </a>
      </li>
      <li>
        <a :href="facebookShareUrl">
          <img
            class="w-7 h-7"
            src="~/assets/img/icon-facebook.svg"
            alt="Facebook Icon"
          />
        </a>
      </li>
      <li>
        <a :href="twitterShareUrl">
          <img
            class="w-7 h-7"
            src="~/assets/img/icon-twitter.svg"
            alt="Twitter Icon"
          />
        </a>
      </li>
      <li>
        <a :href="whatsappShareUrl">
          <img
            class="w-7 h-7"
            src="~/assets/img/icon-whatsapp.svg"
            alt="WhatsApp Icon"
          />
        </a>
      </li>
    </ul>
  </div>
  <!-- Desktop Share Box -->
  <div
    class="hidden 2xl:inline-block border-grey-light border fixed top-[9rem] rounded-md text-center bg-white max-w-[20rem] py-3 px-1 shadow-sm right-[calc((100%-93rem)/2)]"
  >
    <h3 class="text-lg">Mencari tempat sharing terkait kesehatan ?</h3>
    <BaseCta :to="linkTelegramGroup" target="_blank" class="my-4 inline-block"
      >Gabung Grup Telegram</BaseCta
    >
    <p class="mb-3">Bagikan</p>
    <ul class="flex items-center gap-x-2 justify-center">
      <li>
        <a :href="telegramShareUrl">
          <img
            class="w-7 h-7"
            src="~/assets/img/icon-telegram.svg"
            alt="Telegram Icon"
          />
        </a>
      </li>
      <li>
        <a :href="facebookShareUrl">
          <img
            class="w-7 h-7"
            src="~/assets/img/icon-facebook.svg"
            alt="Facebook Icon"
          />
        </a>
      </li>
      <li>
        <a :href="twitterShareUrl">
          <img
            class="w-7 h-7"
            src="~/assets/img/icon-twitter.svg"
            alt="Twitter Icon"
          />
        </a>
      </li>
      <li>
        <a :href="whatsappShareUrl">
          <img
            class="w-7 h-7"
            src="~/assets/img/icon-whatsapp.svg"
            alt="WhatsApp Icon"
          />
        </a>
      </li>
    </ul>
  </div>
</template>
