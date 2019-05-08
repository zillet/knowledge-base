<template>
  <div class="page-title">
    <div class="page-title__wrapper">
      <slot />
    </div>
  </div>
</template>
<style lang="scss" scoped>
.page-title {
  width: 100%;
  height: 150px;
  display: flex;
  color: #fff;
  padding: 1.5rem;
  align-items: center;
  justify-content: center;
  background: var(--secondary-bg);
  h1 {
    color: #fff;
    font-weight: 600;
  }
  p {
    opacity: 0.8;
    font-size: 1.1rem;
  }
  &__wrapper {
    max-width: 700px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-items: center;
  }
}
</style>
