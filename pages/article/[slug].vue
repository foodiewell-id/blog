<script setup lang="ts">
import { toHead } from "vue-datocms";
import DatoDTO from "~/types/DatoDTO";
import { ArticleDTO } from "~/types/Article";

const { slug } = useRoute().params;
const {
  datocmsContentDeliveryUrl,
  datocmsToken,
  getArticleBySlugGraphQLQuery,
  updateArticleViewsCount,
  DatoCMSClientConfig,
  datocmsFullAccessApiToken,
} = useDato();
const { formatIDDate } = useDate();
const { abbreviateNumberWithK } = useNumber();

const datoCMSClientConfigInstance = DatoCMSClientConfig.getInstance(
  datocmsFullAccessApiToken
);

const { data, error, pending } = await useAsyncData<DatoDTO<ArticleDTO>>(
  slug.toString(),
  () =>
    $fetch(datocmsContentDeliveryUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${datocmsToken}`,
      },
      body: JSON.stringify({
        query: getArticleBySlugGraphQLQuery(slug.toString()),
      }),
    })
);

if (data.value && data.value.errors) {
  // if data.value is present, then error.value is definitely non existent. So, assign error.value with the API's error response
  error.value = new Error(data.value.errors[0].message);
}

onMounted(async () => {
  if (!error.value && data.value) {
    // when the user atleast views the article for 2s. Then, update the article's views count + 1
    setTimeout(async () => {
      await updateArticleViewsCount(
        data.value!!.data.article.viewscount + 1,
        data.value!!.data.article.id,
        datoCMSClientConfigInstance
      );
    }, 2000);
  }
});

useHead(() => {
  if (error.value && !data.value) return {};

  return toHead(data.value!!.data.article.seo);
});
</script>

<template>
  <ErrorLoading :loading="pending" :error="error">
    <article class="p-5 container mx-auto relative">
      <ShareBox
        :article-title="data!!.data.article.title"
        :article-slug="data!!.data.article.slug"
      />
      <Breadcrumb
        :crumbs="[
          { name: data!!.data.article.title, link: `/article/${slug}` },
        ]"
      />
      <div class="flex justify-center flex-col mt-8 max-w-screen-md mx-auto">
        <header>
          <datocms-image
            :data="data!!.data.article.thumbnail.responsiveImage"
            class="rounded-md max-h-[25rem] object-cover w-full"
          />
          <h1 class="mt-5 text-xl font-medium">
            {{ data!!.data.article.title }}
          </h1>
          <Tag class="self-start text-base mt-4">{{
            data!!.data.article.tag
          }}</Tag>
          <div class="flex items-center gap-2 mt-4 text-[#c4c4c4] flex-wrap">
            <address>
              by
              <a
                class="underline"
                :href="data!!.data.article.author.linkedinLink"
                target="_blank"
                >{{ data!!.data.article.author.authorName }}</a
              >
            </address>
            <span>&bull;</span>
            <time>{{ formatIDDate(data!!.data.article.updatedAt) }}</time>
            <span>&bull;</span>
            <div class="text-sm -mt-1">
              <img
                src="~/assets/img/icon-eye.svg"
                alt="Eye icon"
                class="inline-block"
              />
              <span class="-mb-6 ml-1 inline-block">{{
                abbreviateNumberWithK(data!!.data.article.viewscount)
              }}</span>
            </div>
          </div>
        </header>
        <div
          class="mt-8 text-justify flex flex-col gap-y-6 [&_div]:flex [&_div]:flex-col [&_div]:gap-y-6"
          v-html="data?.data.article.body"
        ></div>
        <div class="mt-8 w-full h-[.08rem] bg-grey-light rounded-md">
          &nbsp;
        </div>
        <section class="mt-3">
          <h3 class="mb-2">Referensi:</h3>
          <div
            class="text-justify flex flex-col gap-y-6 [&_div]:flex [&_div]:flex-col [&_div]:gap-y-6"
            v-html="data?.data.article.reference"
          ></div>
        </section>
      </div>
    </article>
  </ErrorLoading>
</template>
