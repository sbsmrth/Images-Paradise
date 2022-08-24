<script lang="ts" setup>
import { computed, onMounted, ref } from 'vue';
import { useStore } from 'vuex';
import CardContainerComponent from '@/components/layout/CardContainerComponent.vue';
import PaginationComponent from '@/components/pag/PaginationComponent.vue';

const store = useStore();

const page = ref(1);

const getImages = () => {
  store.dispatch('getImages', {
    order: 'latest',
    page: page.value,
  });
};

onMounted(() => {
  getImages();
});

const updateValue = (value:number) => {
  page.value = value;
  getImages();
};

const last = computed(() => store.state.images);
</script>

<template>
  <div v-if="last.length != 0">
    <CardContainerComponent :images="last" class="card"/>
    <PaginationComponent @modified="updateValue"></PaginationComponent>
  </div>
</template>

<style lang="scss" scoped>
  @use '@/styles/02.tools/section';
  .card {
    @include section.view;
  }
</style>
