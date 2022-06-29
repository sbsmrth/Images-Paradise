<template>
  <main>
    <MainSectionComponent/>
    <OtherComponent/>
  </main>
</template>

<script>
import { defineComponent } from 'vue';

import MainSectionComponent from '@/components/ui/MainSectionComponent.vue';

import OtherComponent from '@/components/main/OtherComponent.vue';

export default defineComponent({
  name: 'HomeView',
  components: {
    MainSectionComponent,
    OtherComponent,
  },
});
</script>
