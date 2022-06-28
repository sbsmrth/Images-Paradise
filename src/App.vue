<template>
  <NavBarComponent/>
</template>

<script>
import { defineComponent } from 'vue';

import { useStore } from 'vuex';

import NavBarComponent from '@/components/NavBarComponent.vue';

export default defineComponent({
  name: 'App',

  data: () => ({
    store: null,
    products: {
      type: Array,
    },
  }),

  components: {
    NavBarComponent,
  },

  created() {
    this.store = useStore();
    this.store.dispatch('getImages');
  },

  computed: {
    allProducts() {
      return this.store.state.products;
    },
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
  --dark: rgb(4,4,4);
  --primary: #121314;
  --light: rgb(255,255,255);
}
</style>
