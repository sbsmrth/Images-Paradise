<script lang="ts" setup>
import { defineProps } from 'vue';
import CardComponent from '@/components/layout/CardComponent.vue';

defineProps({
  images: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <section class="images" id="images">
    <CardComponent v-for="(img, index) of images" :key="index" :img="(img as object)"
    data-test="card" />
  </section>
</template>

<style scoped>
  .images {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: 400px;
    width: 95vw;
    margin: 50px auto;
    gap: 80px 30px;
  }

  @media (max-width: 768px) {
    .images {
      grid-template-columns: 1fr;
      row-gap: 70px;
      width: 93vw;
    }
  }

  @media (min-width: 992px) {
    .images {
      row-gap: 50px;
    }
  }
</style>
