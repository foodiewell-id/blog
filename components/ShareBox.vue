<template>
  <!-- Mobile Share Box -->
  <div
    class="2xl:hidden fixed top-[10rem] right-0 bg-white z-10 px-2 py-3 rounded-l-md shadow-md"
  >
    <ul class="flex items-center flex-col gap-y-3">
      <li>
        <a href="#">
          <img
            class="w-7 h-7"
            src="~/assets/img/icon-telegram.svg"
            alt="Telegram Icon"
          />
        </a>
      </li>
      <li>
        <a href="#">
          <img
            class="w-7 h-7"
            src="~/assets/img/icon-facebook.svg"
            alt="Facebook Icon"
          />
        </a>
      </li>
      <li>
        <a href="#">
          <img
            class="w-7 h-7"
            src="~/assets/img/icon-twitter.svg"
            alt="Twitter Icon"
          />
        </a>
      </li>
      <li>
        <a href="#">
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
    <BaseCta class="my-4 inline-block">Gabung Grup Telegram</BaseCta>
    <p class="mb-3">Bagikan</p>
    <ul class="flex items-center gap-x-2 justify-center">
      <li>
        <a href="#">
          <img
            class="w-7 h-7"
            src="~/assets/img/icon-telegram.svg"
            alt="Telegram Icon"
          />
        </a>
      </li>
      <li>
        <a href="#">
          <img
            class="w-7 h-7"
            src="~/assets/img/icon-facebook.svg"
            alt="Facebook Icon"
          />
        </a>
      </li>
      <li>
        <a href="#">
          <img
            class="w-7 h-7"
            src="~/assets/img/icon-twitter.svg"
            alt="Twitter Icon"
          />
        </a>
      </li>
      <li>
        <a href="#">
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
