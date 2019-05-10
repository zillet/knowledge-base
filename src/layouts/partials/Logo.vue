<template>
  <div
    class="logo">
    <g-link
      class="logo__link"
      to="/"
      title="Back to home">
      <img
        src="@/assets/images/logo.png"
        class="logo__image"
        alt="Gridsome.org">
    </g-link>
  </div>
</template>

<script>
export default {
  components: {
    // Logo
  }
};
</script>

<style lang="scss">
.logo {
  &__link {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &__image {
    height: 40px;
    width: 40px;
    margin-bottom: 0;
  }
}
</style>
