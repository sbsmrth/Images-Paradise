<script lang="ts" setup>
import { onMounted, computed } from 'vue';
import { useStore } from 'vuex';
import CardContainerComponent from '@/components/layout/CardContainerComponent.vue';

const store = useStore();

onMounted(() => store.dispatch('getRandom'));

const images = computed(() => store.state.images);
</script>

<template>
  <p class="text">Some random photos..</p>
  <CardContainerComponent :images="images"/>
</template>

<style lang="scss" scoped>
  .text {
    text-align: center;
    color: var(--light);
    margin-top: 50px;
    font-size: 1.3em;
    letter-spacing: 1px;
    font-weight: bold;
  }
</style>
