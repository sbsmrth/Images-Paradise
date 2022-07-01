<template>
    <section class="main__img-container" id="main">
      <article class="main__info">
        <p class="main__title">
          <i>Find the most awesome and beautiful collections
          of professional photos.</i>
        </p>
        <blockquote class="main__quote">
          <i>Not only a feeling.</i>
        </blockquote>
      </article>
    </section>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MainSectionComponent',
});
</script>

<style scoped>
  .main__img-container  {
    background: url('@/assets/main_background.jpg') center left 41% fixed no-repeat;
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .main__img-container .main__info {
    width: 350px;
    color: var(--light);
    letter-spacing: 1px;
  }

  .main__info .main__title {
    font-size: 1.4em;
  }

  .main__info .main__quote {
    margin-top: 5px;
    font-weight: bold;
  }

  .main__info .main__quote i {
    position: relative;
  }

  .main__info .main__quote i::after {
    content: '';
    position: absolute;
    height: 2px;
    border-radius: 25px;
    bottom: -3px;
    left: 0;
    width: 100%;
    background: var(--light);
  }
  @media (max-width: 768px) {
    .main__img-container  {
      background: url('@/assets/main_background.jpg') center left 30% fixed no-repeat;
    }

    .main__img-container .main__info {
      width: 270px;
    }
  }
</style>
