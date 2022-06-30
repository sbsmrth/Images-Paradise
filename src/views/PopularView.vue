<template>
  <CardContainerComponent v-if="popular" :images="popular" class="card"/>
</template>

<script>
import { computed, defineComponent, onMounted } from 'vue';

import CardContainerComponent from '@/components/layout/CardContainerComponent.vue';

import { useStore } from 'vuex';

export default defineComponent({
  name: 'PopularView',

  components: {
    CardContainerComponent,
  },

  setup() {
    const store = useStore();

    onMounted(() => {
      store.dispatch('getImages', 'popular');
    });

    const popular = computed(() => store.state.images);

    return {
      popular,
    };
  },
});
</script>

<style scoped>
  .card {
    margin-top: 17vh;
  }
</style>
