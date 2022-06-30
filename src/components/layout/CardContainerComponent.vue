<template>
  <section class="images" id="images">
    <CardComponent v-for="img of images" :key="img.id" :img="img"/>
  </section>
</template>

<script>
import { defineComponent } from 'vue';

import CardComponent from '@/components/layout/CardComponent.vue';

export default defineComponent({
  name: 'CardContainerComponent',

  props: {
    images: {
      type: Array,
      required: true,
    },
  },

  components: {
    CardComponent,
  },
});
</script>

<style scoped>
  .images {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: 400px;
    width: 95vw;
    margin: 50px auto;
    gap: 50px 30px;
  }

  @media (max-width: 768px) {
    .images {
      grid-template-columns: 1fr;
      row-gap: 70px;
      width: 93vw;
    }
  }
</style>
