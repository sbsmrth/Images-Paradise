<script lang="ts" setup>
import { onBeforeMount, ref } from 'vue';
import CardContainerComponent from '@/components/layout/CardContainerComponent.vue';
import PaginationComponent from '@/components/pag/PaginationComponent.vue';
import { apiBase, apiKey } from '@/api/api';

const latestImages = ref([]);

const getLatest = async (page = 1) => {
  try {
    const ans = await fetch(`${apiBase}?per_page=30&order_by=latest&page=${page}`, {
      headers: {
        Authorization: `Client-ID ${apiKey}`,
      },
    });
    const images = await ans.json();
    latestImages.value = images;
  } catch (err) {
    console.error(err);
  }
};

onBeforeMount(() => getLatest());

const updateValue = (value: number) => getLatest(value);
</script>

<template>
  <div v-if="latestImages.length != 0">
    <CardContainerComponent :images="latestImages" class="card"/>
    <PaginationComponent @modified="updateValue"></PaginationComponent>
  </div>
</template>

<style lang="scss" scoped>
  @use '@/styles/02.tools/section';
  .card {
    @include section.view;
  }
</style>
