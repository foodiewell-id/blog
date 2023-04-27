<template>
  <div class="container mx-auto my-5 px-5 md:px-0">
    <Breadcrumb />
    <div>
      <h1
        class="text-center mt-12 text-lg md:text-2xl md:font-medium max-w-md mx-auto"
      >
        Tambah Pengetahuan Dengan Membaca Artikel Menarik di Foodiewell
      </h1>
      <div
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8 justify-items-center pb-3 md:p-5 max-w-7xl mx-auto"
      >
        <template v-for="i in 12" :key="i">
          <ArticleCard />
        </template>
      </div>
    </div>
  </div>
</template>
