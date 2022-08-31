<script lang="ts" setup>
import {
  computed,
  onMounted,
  ref,
  watchEffect,
} from 'vue';
import { useStore } from 'vuex';
import { useRoute } from 'vue-router';
import CardContainerComponent from '@/components/layout/CardContainerComponent.vue';
import ErrorComponent from '@/components/error/ErrorComponent.vue';
import PaginationComponent from '@/components/pag/PaginationComponent.vue';

const store = useStore();

const route = useRoute();

const imagesQ = computed(() => store.state.custom);

const q = ref(route.params.query);

const getImages = (page = 1) => {
  store.dispatch('getQueryImages', {
    q: q.value,
    page,
  });
};

watchEffect(() => {
  q.value = route.params.query;
  getImages();
});

onMounted(() => {
  getImages();
});

const updateValue = (value: number) => {
  getImages(value);
};
</script>

<template>
  <div v-if="imagesQ.length != 0">
    <CardContainerComponent :images="imagesQ" class="card"/>
    <PaginationComponent @modified="updateValue"></PaginationComponent>
  </div>
  <ErrorComponent v-else></ErrorComponent>
</template>

<style lang="scss" scoped>
  @use '@/styles/02.tools/section';
  .card {
    @include section.view;
  }
</style>
