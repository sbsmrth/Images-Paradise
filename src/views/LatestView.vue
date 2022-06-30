<template>
  <CardContainerComponent v-if="last" :images="last" class="card"/>
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
      store.dispatch('getImages', 'latest');
    });

    const last = computed(() => store.state.images);

    return {
      last,
    };
  },
});
</script>

<style scoped>
  .card {
    margin-top: 17vh;
  }
</style>
