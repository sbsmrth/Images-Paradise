<script lang="ts" setup>
import {
  inject,
  computed,
  ref,
  Ref,
} from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const scroll = inject('scroll') as Ref<number>;
const openMenu = ref(false);
const query = ref('');

const toggle = () => {
  openMenu.value = !openMenu.value;
};

const send = () => {
  store.dispatch('getQueryImages', query.value);
  query.value = '';
};

const setBlack = computed(() => scroll.value > 70);
</script>

<template>
  <header>
    <nav class="nav" :class="{'nav--dark':setBlack}">
      <button class="nav__icon-container" @click="toggle">
        <i class="fa-solid fa-bars fa-lg" :class="{'fa-xmark':openMenu}"></i>
      </button>
      <ul class="nav__items" :class="{'nav__items--active':openMenu}">
        <li class="nav__item">
          <router-link to="/" class="nav__link">Home</router-link>
        </li>
        <li class="nav__item">
          <router-link :to="{name:'popular'}" class="nav__link">Popular</router-link>
        </li>
        <li class="nav__item">
          <router-link :to="{name:'latest'}" class="nav__link">Latest</router-link>
        </li>
      </ul>
      <form class="nav__search" role="search">
        <label for="q">
          <input type="text" id="q" class="nav__input" v-model="query" autocomplete="off"
          placeholder="Search an image..">
        </label>
        <router-link :to="{name:'search'}">
          <button class="nav__button" @click="send">
            <i class="fa-solid fa-magnifying-glass nav__icon"></i>
          </button>
        </router-link>
      </form>
    </nav>
  </header>
</template>

<style scoped>
  .nav {
    width: 100%;
    position: fixed;
    display: flex;
    top: 0;
    justify-content: center;
    align-items: center;
    height: 10vh;
    padding: 30px 0;
    z-index: 1;
  }
  .nav--dark {
    background: rgb(4,4,4);
    transition: .3s;
  }
  .nav .nav__icon-container {
    display: none;
  }
  .nav .nav__items {
    display: flex;
    list-style: none;
  }
  .nav .nav__items .nav__item {
    margin: 0 14px;
  }
  .nav__items .nav__item .nav__link {
    color: var(--light);
    text-decoration: none;
    font-size: 1.4em;
    letter-spacing: 2px;
    font-weight: bolder;
  }
  .nav .nav__search {
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
  }
  .nav .nav__search .nav__input {
    border: none;
    outline: none;
    width: 0px;
    background: none;
    transition: .3s;
    color: var(--light);
  }
  .nav .nav__search:hover .nav__input {
    width: 110px;
    margin-right: 9px;
    transition: .4s;
  }
  .nav .nav__search .nav__input::placeholder {
    color: #edeef0;
  }
  .nav .nav__search .nav__button {
    border: none;
    outline: none;
    background: none;
  }
  .nav__search .nav__button .nav__icon {
    cursor: pointer;
    color: var(--light);
  }

  @media (max-width: 768px) {
    .nav {
      justify-content: flex-start;
      background: var(--dark);
      height: 8vh;
    }
    .nav .nav__icon-container {
      display: block;
      background: none;
      border: none;
      outline: none;
      margin-left: 4%;
    }
    .nav .nav__icon-container .fa-solid {
      color: #fff;
    }
    .nav .nav__items {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      position: fixed;
      top: -100vh;
      width: 100%;
      height: calc(100% - 8vh);
      background: inherit;
    }
    .nav .nav__items .nav__item {
      margin: 12px 0;
    }
    .nav .nav__items--active {
      top: 8vh;
      transition: top .3s;
    }
    .nav .nav__search:hover .nav__input {
      width: 110px;
      padding-left: 2px;
    }
    .nav .nav__search {
      padding: 11px 13px;
    }
  }
  @media (min-width: 992px) {
    .nav .nav__search:hover .nav__input {
      width: 160px;
      padding-left: 8px;
    }
    .nav .nav__search {
      right: 30px;
      height: 27px;
      padding: 14px 10px;
    }
  }
</style>
