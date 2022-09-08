<script lang="ts" setup>
import { onBeforeMount, ref } from 'vue';
import CardContainerComponent from '@/components/layout/CardContainerComponent.vue';
import PaginationComponent from '@/components/pag/PaginationComponent.vue';
import { apiBase, apiKey } from '@/api/api';

const popularImages = ref([]);

const getPopular = async (page = 1) => {
  try {
    const ans = await fetch(`${apiBase}?per_page=30&order_by=popular&page=${page}`, {
      headers: {
        Authorization: `Client-ID ${apiKey}`,
      },
    });
    const images = await ans.json();
    popularImages.value = images;
  } catch (err) {
    console.error(err);
  }
};

onBeforeMount(() => getPopular());

const updateValue = (value: number) => getPopular(value);
</script>

<template>
  <div v-if="popularImages.length != 0">
    <CardContainerComponent :images="popularImages" class="card" />
    <PaginationComponent @modified="updateValue"></PaginationComponent>
  </div>
</template>

<style lang="scss" scoped>
@use "@/styles/02.tools/section";
.card {
  @include section.view;
}
</style>
