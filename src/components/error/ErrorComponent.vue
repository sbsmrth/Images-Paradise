<template>
  <div class="error">
    <Transition appear enter-active-class="animate__bounceInLeft">
      <div class="error__content animate__animated">
        <div class="error__img"></div>
        <h2 class="error__title">No matching views</h2>
        <p class="error__body">
          There weren't any saved views, recent queries,
          our sources matching your search.
        </p>
      </div>
    </Transition>
  </div>
</template>

<style lang="scss" scoped>
  .error {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    &__content {
      text-align: center;
    }

    &__body, &__title, &__img {
      margin: 0 auto;
    }

    &__img {
      height: 75px;
      width: 75px;
      border-radius: 50%;
      background: #F8F9FA url('@/assets/img/search_bar.png') no-repeat center / 32px;
    }

    &__body {
      width: 340px;
      color: #cfcecd;
      margin-top: 23px;
      font-size: 1.2em;
      letter-spacing: var(--letter-spacing-min);
    }

    &__title {
      font-size: 1.7em;
      color: var(--light);
      margin-top: 35px;
    }

    @media (max-width: 768px) {
      &__img {
        height: 60px;
        width: 60px;
      }

      &__title {
        font-size: 1.4em;
      }

      &__body {
        width: 200px;
      }
    }
  }
</style>
