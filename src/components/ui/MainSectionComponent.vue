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
        <Transition appear enter-active-class="animate__flash">
          <i class="animate__animated">Not only a feeling.</i>
        </Transition>
      </blockquote>
    </article>
  </section>
</template>

<style lang="scss" scoped>
  @use '@/styles/02.tools/main-container';
  .main-img {
    @include main-container.box;
    background: url('@/assets/img/main_background.jpg') center left 41% fixed no-repeat;
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
