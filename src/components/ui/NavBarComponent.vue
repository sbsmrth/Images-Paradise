<template>
  <header>
    <nav class="nav">
      <button class="nav__icon-container" @click="toggle">
        <i class="fa-solid fa-bars fa-lg nav__icon"></i>
      </button>
      <ul class="nav__items">
        <li class="nav__item">
          <a href="#main" class="nav__link">Home</a>
        </li>
        <li class="nav__item">
          <a href="#" class="nav__link">Images</a>
        </li>
        <li class="nav__item">
          <a href="#images" class="nav__link">Other</a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'NavBarComponent',

  created() {
    window.addEventListener('scroll', this.changeBg);
  },

  unmounted() {
    window.removeEventListener('scroll', this.changeBg);
  },

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
  },
});
</script>

<style scoped>
  .nav {
    width: 100%;
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 10vh;
    padding: 30px 0;
    z-index: 1;
  }

  .nav--dark {
    background: var(--dark);
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
  }
</style>
