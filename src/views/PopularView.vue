<script lang="ts" setup>
import {
  onMounted,
  computed,
} from 'vue';
import { useStore } from 'vuex';
import CardContainerComponent from '@/components/layout/CardContainerComponent.vue';
import PaginationComponent from '@/components/pag/PaginationComponent.vue';

const store = useStore();

const getImages = (page = 1) => {
  store.dispatch('getImages', {
    order: 'popular',
    page,
  });
};

onMounted(() => {
  getImages();
});

const updateValue = (value: number) => {
  getImages(value);
};

const popular = computed(() => store.state.images);
</script>

<template>
  <div v-if="popular.length != 0">
    <CardContainerComponent v-if="popular" :images="popular" class="card"/>
    <PaginationComponent @modified="updateValue"></PaginationComponent>
  </div>
</template>

<style lang="scss" scoped>
  @use '@/styles/02.tools/section';
  .card {
    @include section.view;
  }
</style>
