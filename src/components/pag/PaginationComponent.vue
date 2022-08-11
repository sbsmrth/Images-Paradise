<script lang="ts" setup>
import { ref, defineEmits, watch } from 'vue';

const page = ref(1);

const emits = defineEmits(['modified']);

const increment = () => {
  page.value += 1;
};

const decrement = () => {
  page.value -= 1;
};

watch(page, (newValue) => {
  emits('modified', newValue);
});
</script>

<template>
  <nav class="navigation">
    <a href="#" v-if="page != 1" class="navigation__item navigation__control"
    @click="decrement">&laquo;</a>
    <a href="#" class="navigation__item navigation__item--disabled" v-else>&laquo;</a>
    <a href="#" class="navigation__item navigation__item--active">{{ page }}</a>
    <a href="#" v-if="page != 9" class="navigation__item navigation__control"
    @click="increment">&raquo;</a>
    <a href="#" class="navigation__item navigation__item--disabled" v-else>&raquo;</a>
  </nav>
</template>

<style lang="scss" scoped>
  .navigation {
    display: block;
    margin: 0 auto;
    margin-top: 70px;
    width: max-content;

    &__item {
      font-size: 20px;
      margin: 20px;
      padding: 10px 15px;
      border-radius: 50%;
      color: var(--light);

      &--active {
        font-size: 19px;
      }

      &--disabled {
        color: #9c9c9c;
        pointer-events: none;
      }
    }

    &__control:hover, &__item--active {
      background: var(--light);
      color: var(--primary);
      transition: 0.2s ease;
    }

    @media (max-width: 576px) {
      margin-top: 80px;

      &__item {
        font-size: 19px;

        &--active {
          font-size: 18px;
        }
      }
    }
  }
</style>
