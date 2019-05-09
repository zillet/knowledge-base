<template>
  <div class="card">
    <div
      class="card__inner"
      :class="[customClass, {'card__inner--center': center}]">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    customClass: {
      type: [String, Object, Array],
      default: ''
    },
    center: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    cardClasses() {
      let classes = [];
      if (this.gradient) classes.push('gradient-' + this.gradient);
      return classes;
    }
  }
};
</script>

<style lang="scss">
.card {
  border: 1px solid #ddd;
  padding: calc(var(--space) * 2);
  border-radius: 4px;
  background-color: #fff;
  transition: color.3s, box-shadow 0.3s, transform 0.3s;
  color: #444;
  box-shadow: 2px 2px 5px 0 rgba(0, 0, 0, 0.05);

  &:hover {
    transform: translateY(-3px);
    box-shadow: 2px 2px 10px 0 rgba(0, 0, 0, 0.1);
    color: currentColor;
  }
  &__inner {
    &--center {
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;
    }
  }
  h2,
  h3,
  h4,
  p {
    margin-bottom: 1rem;
  }
}
</style>
