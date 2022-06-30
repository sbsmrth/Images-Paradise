<template>
  <NavBarComponent/>
  <router-view></router-view>
</template>

<script>
import { defineComponent } from 'vue';

import NavBarComponent from '@/components/ui/NavBarComponent.vue';

export default defineComponent({
  name: 'App',

  components: {
    NavBarComponent,
  },
});
</script>

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
