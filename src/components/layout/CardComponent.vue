<template>
  <article class="images__col">
    <img
      :src="img.urls.regular"
      :alt="img.alt_description"
      class="images__img"
    />
    <div class="images__content">
      <div class="images__icon">
        <i class="fa-solid fa-heart"></i>
        <p>{{ img.likes }}</p>
      </div>
      <div class="images__tw" v-if="img.user.twitter_username">
        <i class="fa-brands fa-twitter"></i>
        <p>{{ img.user.twitter_username }}</p>
      </div>
      <div class="images__portfolio" v-if="img.user.portfolio_url">
        <i class="fa-solid fa-paper-plane fa-sm"></i>
        <a :href="img.user.portfolio_url" target="__blank">Portfolio</a>
      </div>
    </div>
  </article>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CardComponent',

  props: {
    img: {
      type: Object,
      required: true,
    },
  },
});
</script>

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
  }

  .images .images__col .images__content i {
    color: var(--light)
  }

  .images .images__col .images__content p, a {
    display: inline-block;
    margin-left: 8px;
    color: var(--light);
  }

  .images__content .images__portfolio a {
    text-decoration: none;
  }
</style>
