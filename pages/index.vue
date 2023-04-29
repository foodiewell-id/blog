<script setup lang="ts">
import DatoDTO from "~/types/DatoDTO";
import { AllArticlesDTO } from "~/types/Article";

const currentPage = ref(1);

const { getAllArticlesGraphQLQuery, datocmsContentDeliveryUrl, datocmsToken } =
  useDato();
const { paginationMaxResult } = usePagination();

const { data, refresh, pending, error } = await useAsyncData<
  DatoDTO<AllArticlesDTO>
>(`all articles page: ${currentPage.value}`, () =>
  $fetch(datocmsContentDeliveryUrl, {
    method: "POST",
    headers: {
      authorization: `Bearer ${datocmsToken}`,
    },
    body: JSON.stringify({
      query: getAllArticlesGraphQLQuery(currentPage.value, paginationMaxResult),
    }),
  })
);

if (data.value && data.value.errors) {
  // if data.value is present, then error.value is definitely non existent. So, assign error.value with the API's error response
  error.value = new Error(data.value.errors[0].message);
}
</script>
<template>
  <div class="container mx-auto my-5 px-5 md:px-0">
    <Breadcrumb />
    <h1
      class="text-center mt-12 text-lg md:text-2xl md:font-medium max-w-md mx-auto"
    >
      Tambah Pengetahuan Dengan Membaca Artikel Menarik di Foodiewell
    </h1>
    <ErrorLoading
      :error="error"
      :loading="pending"
      class="md:p-5 pb-3 max-w-7xl mx-auto mt-8"
    >
      <div class="flex flex-col justify-center items-center">
        <div
          class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-center mb-10"
        >
          <template
            v-for="article in data!!.data.allArticles"
            :key="article.title"
          >
            <ArticleCard :article="article" />
          </template>
        </div>
        <Pagination
          class="self-end"
          v-model="currentPage"
          :total-items="data!!.data._allArticlesMeta.count"
          :items-per-page="paginationMaxResult"
          :max-pages-shown="4"
          @update:model-value="refresh"
        />
      </div>
    </ErrorLoading>
  </div>
</template>
