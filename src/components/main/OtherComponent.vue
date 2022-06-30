<template>
  <p class="text">Some random photos..</p>
  <CardContainerComponent :images="images"/>
</template>

<script>
import { defineComponent, computed, onMounted } from 'vue';

import { useStore } from 'vuex';

import CardContainerComponent from '@/components/layout/CardContainerComponent.vue';

export default defineComponent({
  name: 'OtherComponent',

  setup() {
    const store = useStore();

    onMounted(() => {
      store.dispatch('getImages');
    });

    const images = computed(() => store.state.images);

    return {
      images,
    };
  },

  components: {
    CardContainerComponent,
  },
});
</script>

<style scoped>
  .text {
    text-align: center;
    color: var(--light);
    margin-top: 40px;
    font-size: 1.3em;
    letter-spacing: 1px;
    font-weight: bold;
  }
</style>
