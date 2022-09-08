<script lang="ts" setup>
import { ref, watch, onBeforeMount } from 'vue';
import { useRoute } from 'vue-router';
import { apiSearch, apiKey } from '@/api/api';
import CardContainerComponent from '@/components/layout/CardContainerComponent.vue';
import ErrorComponent from '@/components/error/ErrorComponent.vue';
import PaginationComponent from '@/components/pag/PaginationComponent.vue';

const route = useRoute();

const queryImages = ref([]);

const getQueryImages = async (params: { q: string, page?: number }) => {
  const { q, page = 1 } = params;
  try {
    const ans = await fetch(`${apiSearch}?per_page=30&query=${q}&page=${page}`, {
      headers: {
        Authorization: `Client-ID ${apiKey}`,
      },
    });
    const images = await ans.json();
    queryImages.value = images.results;
  } catch (err) {
    console.error(err);
  }
};

watch(() => route.params.query, (newValue, last) => {
  getQueryImages({
    q: newValue as string,
  });
});

onBeforeMount(() => {
  getQueryImages({
    q: route.params.query as string,
  });
});

const updateValue = (page: number) => {
  getQueryImages({
    q: route.params.query as string,
    page,
  });
};
</script>

<template>
  <div v-if="queryImages.length != 0">
    <CardContainerComponent :images="queryImages" class="card" />
    <PaginationComponent @modified="updateValue"></PaginationComponent>
  </div>
  <ErrorComponent v-else></ErrorComponent>
</template>

<style lang="scss" scoped>
@use "@/styles/02.tools/section";
.card {
  @include section.view;
}
</style>
