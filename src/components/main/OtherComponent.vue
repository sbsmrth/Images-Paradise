<script lang="ts" setup>
import { onBeforeMount, ref } from 'vue';
import CardContainerComponent from '@/components/layout/CardContainerComponent.vue';
import { apiKey, apiBase } from '@/api/api';

const randomImages = ref([]);

const getRandom = async () => {
  try {
    const ans = await fetch(`${apiBase}/random?count=30`, {
      headers: {
        Authorization: `Client-ID ${apiKey}`,
      },
    });
    const images = await ans.json();
    randomImages.value = images;
  } catch (err) {
    console.error(err);
  }
};

onBeforeMount(() => getRandom());
</script>

<template>
  <p class="text">Some random photos..</p>
  <CardContainerComponent :images="randomImages" />
</template>

<style lang="scss" scoped>
.text {
  text-align: center;
  color: var(--light);
  margin-top: 50px;
  font-size: 1.3em;
  letter-spacing: var(--letter-spacing-min);
  font-weight: bold;
}
</style>
