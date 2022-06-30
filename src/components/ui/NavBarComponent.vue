<template>
  <header>
    <nav class="nav">
      <button class="nav__icon-container" @click="toggle">
        <i class="fa-solid fa-bars fa-lg nav__icon"></i>
      </button>
      <ul class="nav__items">
        <li class="nav__item">
          <router-link to="/" class="nav__link">Home</router-link>
        </li>
        <li class="nav__item">
          <a href="#" class="nav__link">Images</a>
        </li>
        <li class="nav__item">
          <a href="#images" class="nav__link">Other</a>
        </li>
      </ul>
      <form class="nav__search" role="search">
        <label for="q">
          <input type="text" id="q" class="nav__input" v-model="q" autocomplete="off">
        </label>
        <router-link :to="{name:'search'}">
          <button class="nav__button" @click="send">
            <i class="fa-solid fa-magnifying-glass fa-lg nav__icon"></i>
          </button>
        </router-link>
      </form>
    </nav>
  </header>
</template>

<script>
import { defineComponent } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
  name: 'NavBarComponent',

  created() {
    this.store = useStore();
    window.addEventListener('scroll', this.changeBg);
  },

  unmounted() {
    window.removeEventListener('scroll', this.changeBg);
  },

  data: () => ({
    store: null,
    q: '',
  }),

  methods: {
    toggle() {
      const navItems = document.querySelector('.nav__items');

      navItems.classList.toggle('nav__items--active');
    },

    changeBg() {
      const nav = document.querySelector('.nav');

      if (window.scrollY > 70) {
        nav.classList.add('nav--dark');
      } else {
        nav.classList.remove('nav--dark');
      }
    },

    send() {
      this.store.dispatch('getQueryImages', this.q);
      this.q = '';
    },
  },
});
</script>

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
    font-size: 1.3em;
    letter-spacing: 2px;
    font-weight: bolder;
  }

  .nav .nav__search {
    position: absolute;
    right: 30px;
  }

  .nav .nav__search .nav__button {
    border: none;
    background: none;
    margin-left: 8px;
    outline: none;
  }

  .nav .nav__search .nav__input {
    border-radius: 10px;
    height: 19px;
    border: none;
    outline: none;
    padding-left: 6px;
  }

  .nav .nav__search .nav__button .nav__icon {
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
      margin-left: 4%;
    }

    .nav .nav__icon-container .nav__icon {
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

    .nav .nav__search {
      position: absolute;
      right: 20px;
    }

    .nav .nav__search .nav__input {
      width: 120px;
      height: 20px;
    }
  }
</style>
