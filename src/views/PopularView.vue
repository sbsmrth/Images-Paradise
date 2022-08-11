<script lang="ts" setup>
import {
  onMounted,
  computed,
  ref,
} from 'vue';
import { useStore } from 'vuex';
import CardContainerComponent from '@/components/layout/CardContainerComponent.vue';
import PaginationComponent from '@/components/pag/PaginationComponent.vue';

const store = useStore();

const page = ref(1);

const getImages = () => {
  store.dispatch('getImages', {
    order: 'popular',
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

const popular = computed(() => store.state.images);
</script>

<template>
  <CardContainerComponent v-if="popular" :images="popular" class="card"/>
  <PaginationComponent @modified="updateValue"></PaginationComponent>
</template>

<style lang="scss" scoped>
  .card {
    margin-top: 17vh;
  }
</style>
