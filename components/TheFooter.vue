<template>
  <footer
    class="bg-primary-surface w-screen flex items-center justify-center px-2 md:px-8 py-12 flex-col text-center"
  >
    <h3 class="text-lg">Kontak Kami</h3>
    <nav class="my-4">
      <ul class="flex gap-5">
        <li>
          <a
            class="flex text-center items-center justify-center rounded-full hover:bg-black/20 transition-all w-8 h-8"
            href="https://wa.me/message/H6F5CZRFSDIFO1"
            target="blank"
          >
            <svg class="w-6 h-6">
              <use xlink:href="~/assets/img/sprite.svg#icon-whatsapp"></use>
            </svg>
          </a>
        </li>
        <li>
          <a
            class="flex text-center items-center justify-center rounded-full hover:bg-black/20 transition-all w-8 h-8"
            href="mailto:halo@foodiewell.id"
            target="blank"
          >
            <svg class="w-6 h-6 -ml-[.1rem]">
              <use xlink:href="~/assets/img/sprite.svg#icon-email"></use>
            </svg>
          </a>
        </li>
        <li>
          <a
            class="flex text-center items-center justify-center rounded-full hover:bg-black/20 transition-all w-8 h-8"
            href="https://www.instagram.com/foodiewell/"
            target="blank"
          >
            <svg class="w-6 h-6">
              <use xlink:href="~/assets/img/sprite.svg#icon-instagram"></use>
            </svg>
          </a>
        </li>
        <li>
          <a
            class="flex text-center items-center justify-center rounded-full hover:bg-black/20 transition-all w-8 h-8"
            href="https://www.linkedin.com/company/foodiewell/"
            target="blank"
          >
            <svg class="w-6 h-6">
              <use xlink:href="~/assets/img/sprite.svg#icon-linkedin"></use>
            </svg>
          </a>
        </li>
      </ul>
    </nav>
    <p class="font-light">
      © Copyright <span class="font-bold">Foodiewell 2023.</span> All Rights
      Reserved
    </p>
  </footer>
</template>
