<script lang="ts" setup>
import { computed, onMounted, ref } from 'vue';
import { useStore } from 'vuex';
import { useRoute } from 'vue-router';
import CardContainerComponent from '@/components/layout/CardContainerComponent.vue';
import ErrorComponent from '@/components/error/ErrorComponent.vue';
import PaginationComponent from '@/components/pag/PaginationComponent.vue';

const store = useStore();

const route = useRoute();

const imagesQ = computed(() => store.state.custom);

const page = ref(1);

const getImages = () => {
  store.dispatch('getQueryImages', {
    q: route.params.query,
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
</script>

<template>
  <div v-if="imagesQ.length != 0">
    <CardContainerComponent :images="imagesQ" class="card"/>
    <PaginationComponent @modified="updateValue"></PaginationComponent>
  </div>
  <ErrorComponent v-else></ErrorComponent>
</template>

<style lang="scss" scoped>
  .card {
    margin-top: 17vh;
    @media (max-width: 768px) {
      & {
        margin-top: 10vh;
      }
    }
  }
</style>
