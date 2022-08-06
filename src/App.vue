<script lang="ts" setup>
import {
  onMounted,
  onUnmounted,
  provide,
  ref,
} from 'vue';

import NavBarComponent from '@/components/ui/NavBarComponent.vue';

const pageY = ref(0);

const handleScroll = () => {
  pageY.value = window.scrollY;
};

onMounted(() => window.addEventListener('scroll', handleScroll));

onUnmounted(() => window.removeEventListener('scroll', handleScroll));

provide('scroll', pageY);
</script>

<template>
  <NavBarComponent/>
  <router-view></router-view>
</template>

<style lang="scss">
  @import '@/styles.scss';
</style>
