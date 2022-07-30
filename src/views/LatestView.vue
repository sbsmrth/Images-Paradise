<script lang="ts" setup>
import CardContainerComponent from '@/components/layout/CardContainerComponent.vue';
import { computed, onMounted } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

onMounted(() => {
  store.dispatch('getImages', 'latest');
});

const last = computed(() => store.state.images);
</script>

<template>
  <CardContainerComponent v-if="last" :images="last" class="card"/>
</template>

<style scoped>
  .card {
    margin-top: 17vh;
  }
</style>
