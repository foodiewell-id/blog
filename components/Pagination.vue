<template>
  <vue-awesome-paginate
    pagination-container-class="pagination-container"
    paginate-buttons-class="pagination-btn"
    active-page-class="pagination-btn-active"
    next-button-class="pagination-next-btn"
    back-button-class="pagination-back-btn"
  >
    <template #prev-button>
      <img src="~/assets/img/icon-left-arrow.svg" alt="Left arrow icon" />
    </template>

    <template #next-button>
      <img src="~/assets/img/icon-right-arrow.svg" alt="Right arrow icon" />
    </template>
  </vue-awesome-paginate>
</template>

<style>
.pagination-container {
  @apply flex-wrap;
}

.pagination-btn {
  @apply rounded-lg w-11 h-11 text-[#9CA3AF] hover:text-primary transition-colors;
}

.pagination-btn-active {
  @apply bg-primary text-white hover:text-white;
}

.pagination-next-btn,
.pagination-back-btn {
  @apply flex items-center justify-center;
}
</style>
