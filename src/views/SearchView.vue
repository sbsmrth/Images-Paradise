<script lang="ts" setup>
import { computed } from 'vue';
import { useStore } from 'vuex';
import CardContainerComponent from '@/components/layout/CardContainerComponent.vue';

const store = useStore();

const imagesQ = computed(() => store.state.images);
</script>

<template>
  <CardContainerComponent v-if="imagesQ.length != 0" :images="imagesQ" class="card"/>
  <div v-else class="error">
    <img src="@/assets/img/404.png" alt="error 404 no result found" class="error__img">
  </div>
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
  .error {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    &__img {
      height: 400px;
      width: 400px;
      object-fit: cover;
    }
  }
</style>
