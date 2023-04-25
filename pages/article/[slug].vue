<script setup lang="ts">
const articleContent = `
Artikel ini berisi latihan soal untuk persiapan PTS SMA semester Ganjil Kurikulum 2013 Revisi.<br>
Ciee.. yang bentar lagi PTS atau Penilaian Tengah Semester. Ngga berasa yah. Perasaaan baru aja kemarin mulai tahun ajaran baru, eh ngga taunya udah mau PTS aja ーdulu namanya UTS (Ujian Tengah Semester). Meskipun bukan akhir semester, tapi lo tetap ngga boleh menyepelekan tahapan yang satu ini lho. Nilai PTS punya peranan penting yang bisa mempengaruhi tingkat diterimanya lo di PTN melalui jalur SNMPTN, yap nilai PTS bakal masuk ke nilai raport. Oleh karena itu, lo perlu persiapan yang maksimal juga untuk menghadapi PTS ini.
<br>
<br>
Sejauh ini gimana persiapan lo? Udah mateng belum? Jangan-jangan, lo bahkan belum mulai belajar lagi nih. Jangan takut, jangan khawatir, Bro n Sis. Tenang aja … Seperti biasa, Zenius ngga akan membiarkan lo menghadapi PTS sendirian. Karena, Zenius akan selalu setia menemani di mana pun dan kapan pun 😉
<br>
<br>
Ciee.. yang bentar lagi PTS atau Penilaian Tengah Semester. Ngga berasa yah. Perasaaan baru aja kemarin mulai tahun ajaran baru, eh ngga taunya udah mau PTS aja ーdulu namanya UTS (Ujian Tengah Semester). Meskipun bukan akhir semester, tapi lo tetap ngga boleh menyepelekan tahapan yang satu ini lho. Nilai PTS punya peranan penting yang bisa mempengaruhi tingkat diterimanya lo di PTN melalui jalur SNMPTN, yap nilai PTS bakal masuk ke nilai raport. Oleh karena itu, lo perlu persiapan yang maksimal juga untuk menghadapi PTS ini.
<br>
<br>
Sejauh ini gimana persiapan lo? Udah mateng belum? Jangan-jangan, lo bahkan belum mulai belajar lagi nih. Jangan takut, jangan khawatir, Bro n Sis. Tenang aja … Seperti biasa, Zenius ngga akan membiarkan lo menghadapi PTS sendirian. Karena, Zenius akan selalu setia menemani di mana pun dan kapan pun 😉
`;
const articleReference =
  "Penerbitdeepublish.com. (2019, 24 September). Cara Melejitkan Kemampuan Teknik Menulis dalam Sekejap!. Diakses pada 25 September 2019, dari https://penerbitdeepublish.com/teknik-menulis-a-2/";
</script>

<template>
  <article class="p-5 container mx-auto">
    <Breadcrumb
      :crumbs="[
        { name: 'Title xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx', link: '#' },
      ]"
    />
    <div class="flex justify-center flex-col mt-8 max-w-screen-md mx-auto">
      <header>
        <img
          src="https://picsum.photos/400/300"
          alt="Article Img"
          class="rounded-md max-h-[25rem] object-cover w-full"
        />
        <h1 class="mt-5 text-xl font-medium">
          Tambah Pengetahuan Dengan Membaca Artikel Kesehatan di Foodiewell
        </h1>
        <Tag class="self-start text-base mt-4">Hipertensi</Tag>
        <div class="flex items-center gap-2 mt-4 text-[#c4c4c4] flex-wrap">
          <address>by Arina Kamilia</address>
          <span>&bull;</span>
          <time>September 9, 2021</time>
          <span>&bull;</span>
          <div class="text-sm -mt-1">
            <img
              src="~/assets/img/icon-eye.svg"
              alt="Eye icon"
              class="inline-block"
            />
            <span class="-mb-6 ml-1 inline-block">1.2k</span>
          </div>
        </div>
      </header>
      <div class="mt-8 text-justify" v-html="articleContent"></div>
      <div class="mt-8 w-full h-[.08rem] bg-grey-light rounded-md">&nbsp;</div>
      <section class="mt-3">
        <h3>Referensi:</h3>
        <div class="text-justify" v-html="articleReference"></div>
      </section>
    </div>
  </article>
</template>
