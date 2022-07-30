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

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

:root {
  --dark: #121314;
  --light: rgb(255,255,255);
}

body {
  background: var(--dark);
}
</style>
