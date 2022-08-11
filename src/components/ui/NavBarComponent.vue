<script lang="ts" setup>
import {
  inject,
  computed,
  ref,
  Ref,
} from 'vue';

const scroll = inject('scroll') as Ref<number>;
const openMenu = ref(false);
const query = ref('');

const toggle = () => {
  openMenu.value = !openMenu.value;
};

const clear = () => {
  query.value = '';
};

const setBlack = computed(() => scroll.value > 70);
</script>

<template>
  <header>
    <nav class="nav" data-test="nav" :class="{'nav--dark':setBlack}">
      <button class="nav__icon-container" data-test="btn-menu" @click="toggle">
        <i class="fa-solid fa-bars fa-lg" data-test="fa-menu" :class="{'fa-xmark':openMenu}"></i>
      </button>
      <ul class="nav__items" data-test="items-list" :class="{'nav__items--active':openMenu}">
        <li class="nav__item">
          <router-link to="/" class="nav__link" @click="toggle">
            Home
          </router-link>
        </li>
        <li class="nav__item">
          <router-link :to="{name:'popular'}" @click="toggle" class="nav__link">
            Popular
          </router-link>
        </li>
        <li class="nav__item">
          <router-link :to="{name:'latest'}" @click="toggle" class="nav__link">
            Latest
          </router-link>
        </li>
      </ul>
      <form class="nav__search" role="search">
        <label for="q">
          <input type="text" id="q" class="nav__input" v-model="query" autocomplete="off"
          placeholder="Search an image..">
        </label>
        <router-link :to="{name:'search', params: {query}}" v-if="query">
          <button class="nav__button" @click="clear">
            <i class="fa-solid fa-magnifying-glass nav__icon nav__icon--active"></i>
          </button>
        </router-link>
        <div v-else>
          <i class="fa-solid fa-magnifying-glass nav__icon"></i>
        </div>
      </form>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
  @use '@/styles/02.tools/hidden';
  .nav {
    width: 100%;
    position: fixed;
    display: flex;
    top: 0;
    justify-content: center;
    align-items: center;
    height: 10vh;
    z-index: 1;

    &--dark {
      background: var(--dark);
      transition: .3s;
    }

    &__icon-container {
      display: none;
    }

    &__items {
      display: flex;
      transition: .1s;
    }

    &__item {
      margin: 0 14px;
    }

    &__link {
      color: var(--light);
      font-size: 1.4em;
      letter-spacing: var(--letter-spacing-mid);
      font-weight: bolder;
    }

    &__input {
      @include hidden.btn;
      width: 0px;
      transition: .3s;
      color: var(--light);

      &::placeholder {
        color: var(--secondary);
      }
    }

    &__search {
      position: absolute;
      right: 12px;
      border-radius: 20px;
      height: 24px;
      display: flex;
      background: none;
      border: 1px solid var(--light);
      justify-content: space-between;
      padding: 11px 8px;
      align-items: center;

      &:hover {
        .nav__input {
          width: 110px;
          margin-right: 9px;
          transition: .4s;
        }
      }
    }

    &__button {
      @include hidden.btn;
    }

    &__icon {
      color: var(--light);
      cursor: not-allowed;

      &--active {
        cursor: pointer;
      }
    }

    @media (max-width: 768px) {
      & {
        justify-content: flex-start;
        padding: 30px 0;
        background: var(--dark);
        height: 8vh;
      }

      &__icon-container {
        @include hidden.btn;
        display: block;
        margin-left: 4%;
        & .fa-solid {
          color: var(--light);
        }
      }

      &__items {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: fixed;
        top: -100vh;
        width: 100%;
        height: calc(100% - 8vh);
        background: inherit;
      }

      &__item {
        margin: 12px 0;
      }

      &__items--active {
        top: 8vh;
        transition: top .3s;
      }

      &__search:hover {
        & .nav__input {
          width: 123px;
        }
      }

      &__search {
        padding: 13px 13px;
      }
    }
    @media (min-width: 992px) {
      &__search:hover {
        & .nav__input {
          width: 160px;
          padding-left: 8px;
        }
      }
      &__search {
        right: 30px;
        height: 27px;
        padding: 14px 10px;
      }
    }
    @media (min-width: 1400px) {
      height: 9vh;
    }
  }
</style>
