<script lang="ts" setup>
import { defineProps, ref } from 'vue';

const props = defineProps({
  img: {
    type: Object,
    required: true,
  },
});

const objectUsername = ref(props.img.user.username);
const objectAlt = ref(props.img.alt_description);

const alt = () => `${objectUsername.value}, ${objectAlt.value || 'photo'}`;
</script>

<template>
  <article class="images-col">
    <img
      :src="img.urls.regular"
      :alt="alt()"
      class="images-col__img"
    />
    <div class="images-col__content">
      <div class="images-col__main" v-if="objectUsername">
        <i class="fa-solid fa-user"></i>
        <p>{{ objectUsername }}</p>
      </div>
      <div class="images-col__main" v-if="img.likes">
        <i class="fa-solid fa-heart"></i>
        <p>{{ img.likes }}</p>
      </div>
      <div class="images-col__main" v-if="img.user.twitter_username">
        <i class="fa-brands fa-twitter"></i>
        <p>{{ img.user.twitter_username }}</p>
      </div>
      <div class="images-col__main" v-if="img.user.portfolio_url">
        <i class="fa-solid fa-paper-plane fa-sm"></i>
        <a :href="img.user.portfolio_url" target="__blank">Portfolio</a>
      </div>
      <div class="images-col__main" v-if="img.user.instagram_username">
        <i class="fa-brands fa-instagram"></i>
        <p>{{ img.user.instagram_username }}</p>
      </div>
      <div class="images-col__main">
        <i class="fa-solid fa-up-right-from-square fa-sm"></i>
        <a :href="img.links.download" target="__blank">DL</a>
      </div>
    </div>
  </article>
</template>

<style lang="scss" scoped>
  .images-col {
    &__img {
      width: 100%;
      height: 93%;
      object-fit: cover;
      border-radius: 3px;
    }

    &__content {
      display: flex;
      align-items: center;
      justify-content: space-around;
      padding: 0 10px;
      margin-top: 7px;
      flex-wrap: wrap;
    }

    &__main {
      margin: 3px 8px;

      & i {
        color: var(--light);
      }

      & p,a {
        display: inline-block;
        margin-left: 8px;
        color: var(--light);
      }
    }
  }
</style>
