<template>
  <header>
    <nav class="nav">
      <button class="nav__icon-container" @click="toggle">
        <i class="fa-solid fa-bars fa-lg nav__icon"></i>
      </button>
      <ul class="nav__items">
        <li class="nav__item">
          <a href="#" class="nav__link">Home</a>
        </li>
        <li class="nav__item">
          <a href="#" class="nav__link">Images</a>
        </li>
        <li class="nav__item">
          <a href="#" class="nav__link">Other</a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'NavBarComponent',

  methods: {
    toggle() {
      const navItems = document.querySelector('.nav__items');

      navItems.classList.toggle('nav__items--active');
    },
  },
});
</script>

<style>
  .nav {
    width: 100%;
    background: var(--dark);
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 11vh;
  }

  .nav .nav__icon-container {
    display: none;
  }

  .nav .nav__items {
    display: flex;
  }

  .nav .nav__items .nav__item {
    margin: 0 14px;
  }

  .nav__items .nav__item .nav__link {
    color: var(--light);
    text-decoration: none;
    font-size: 1.2em;
    letter-spacing: 2px;
  }

  @media (max-width: 992px) {
    .nav {
      justify-content: flex-start;
      height: 10vh;
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
      height: calc(100% - 10vh);
      background: inherit;
    }

    .nav .nav__items .nav__item {
      margin: 12px 0;
    }

    .nav .nav__items--active {
      top: 10vh;
      transition: top .3s;
    }
  }
</style>
