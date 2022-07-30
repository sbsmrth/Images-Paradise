<script lang="ts" setup>
import { onMounted, computed } from 'vue';
import { useStore } from 'vuex';
import CardContainerComponent from '@/components/layout/CardContainerComponent.vue';

const store = useStore();

onMounted(() => {
  store.dispatch('getImages', 'popular');
});

const popular = computed(() => store.state.images);
</script>

<template>
  <CardContainerComponent v-if="popular" :images="popular" class="card"/>
</template>

<style scoped>
  .card {
    margin-top: 17vh;
  }
</style>
