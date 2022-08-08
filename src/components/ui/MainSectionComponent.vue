<template>
  <section class="main-img" id="main">
    <article class="main-img__info">
      <p class="main-img__title">
        <i>
          Find the most awesome and beautiful collections
          of professional photos.
        </i>
      </p>
      <blockquote class="main-img__quote">
        <i>Not only a feeling.</i>
      </blockquote>
    </article>
  </section>
</template>

<style lang="scss" scoped>
  .main-img {
    background: url('@/assets/img/main_background.jpg') center left 41% fixed no-repeat;
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    &__info {
      width: 350px;
      color: var(--light);
      letter-spacing: var(--letter-spacing-min);
      padding-left: 20px;
    }

    &__title {
      font-size: 1.4em;
    }

    &__quote {
      margin-top: 5px;
      font-weight: bold;

      & i {
        position: relative;
      }

      & i::after {
        content: '';
        position: absolute;
        height: 2px;
        border-radius: 25px;
        bottom: -3px;
        left: 0;
        width: 100%;
        background: var(--light);
      }
    }

    @media (max-width: 768px) {
      & {
        background: url('@/assets/img/main_background.jpg') center left 30% fixed no-repeat;
      }

      &__info {
        width: 270px;
      }
    }
  }
</style>
