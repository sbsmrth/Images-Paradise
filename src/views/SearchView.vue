<script lang="ts" setup>
import { computed } from 'vue';
import { useStore } from 'vuex';
import CardContainerComponent from '@/components/layout/CardContainerComponent.vue';
import ErrorComponent from '@/components/error/ErrorComponent.vue';

const store = useStore();

const imagesQ = computed(() => store.state.custom);
</script>

<template>
  <CardContainerComponent v-if="imagesQ.length != 0" :images="imagesQ" class="card"/>
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
