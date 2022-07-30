<script lang="ts" setup>
import { defineProps } from 'vue';

defineProps({
  img: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <article class="images__col">
    <img
      :src="img.urls.regular"
      :alt="img.alt_description"
      class="images__img"
    />
    <div class="images__content">
      <div class="images__user images__main" v-if="img.user.username">
        <i class="fa-solid fa-user"></i>
        <p>{{ img.user.username }}</p>
      </div>
      <div class="images__icon images__main" v-if="img.likes">
        <i class="fa-solid fa-heart"></i>
        <p>{{ img.likes }}</p>
      </div>
      <div class="images__tw images__main" v-if="img.user.twitter_username">
        <i class="fa-brands fa-twitter"></i>
        <p>{{ img.user.twitter_username }}</p>
      </div>
      <div class="images__portfolio images__main" v-if="img.user.portfolio_url">
        <i class="fa-solid fa-paper-plane fa-sm"></i>
        <a :href="img.user.portfolio_url" target="__blank">Portfolio</a>
      </div>
      <div class="images__ig" v-if="img.user.instagram_username">
        <i class="fa-brands fa-instagram"></i>
        <p>{{ img.user.instagram_username }}</p>
      </div>
      <div class="images__download images__main">
        <i class="fa-solid fa-up-right-from-square fa-sm"></i>
        <a :href="img.links.download" target="__blank">DL</a>
      </div>
    </div>
  </article>
</template>

<style scoped>
  .images .images__col .images__img {
    width: 100%;
    height: 93%;
    object-fit: cover;
    border-radius: 3px;
  }
  .images .images__col .images__content {
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 0 10px;
    margin-top: 7px;
    flex-wrap: wrap;
  }
  .images .images__col .images__content i {
    color: var(--light)
  }
  .images .images__col .images__content p, a {
    display: inline-block;
    margin-left: 8px;
    color: var(--light);
  }
  .images__content a {
    text-decoration: none;
  }
  .images__content .images__main {
    margin: 3px 8px;
  }
</style>
