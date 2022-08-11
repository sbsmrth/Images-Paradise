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
  <Transition appear enter-active-class="animate__fadeIn">
    <section class="images animate__animated" id="images">
      <CardComponent v-for="(img, index) of images" :key="index"
      :img="(img as object) " data-test="card" />
    </section>
  </Transition>
</template>

<style lang="scss" scoped>
  .images {
    display: grid;
    grid-template-columns: 1fr;
    column-gap: 30px;
    row-gap: 65px;
    width: 93vw;
    grid-auto-rows: 400px;
    margin: 50px auto;

    @media (min-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
      width: 94vw;
      row-gap: 60px;
    }

    @media (min-width: 992px) {
      row-gap: 50px;
      width: 95vw;
      grid-auto-rows: 420px;
    }

    @media (min-width: 1400px) {
      row-gap: 45px;
      grid-auto-rows: 500px;
      width: 96vw;
    }
  }
</style>
