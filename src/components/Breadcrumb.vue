<template>
  <div class="breadcrumb">
    <a
      v-for="(crumb, index) in crumbs"
      :key="index"
      :href="`${link(index)}`"
      class="breadcrumb__link"
      :class="{'current': $route.path === link(index)}">
      {{ linkText(crumb) }}
      <i
        v-if="(index+1)!==crumbs.length"
        class="eva eva-arrow-ios-forward-outline" />
    </a>
  </div>
</template>

<script>
export default {
  name: 'Breadcrumb',
  props: {
    path: {
      type: String,
      default: ''
    }
  },
  computed: {
    crumbs() {
      try {
        let pathArray = this.path.split('/');
        pathArray[0] = 'knowledge-base';
        return pathArray;
      } catch (error) {
        return [];
      }
    }
  },
  methods: {
    link(index) {
      // TODO: make it more clear
      if (index === 0) {
        return '/';
      } else if (index > 0) {
        return `/${this.crumbs.slice(1, index + 1).join('/')}`;
      }
    },
    linkText(crumb) {
      return crumb.split('-').join(' ');
    }
  }
};
</script>
<style lang="scss" scoped>
.breadcrumb {
  margin-bottom: 2rem;
  display: flex;
  &__link {
    font-size: 0.8rem;
    display: flex;
    align-items: center;
    text-transform: capitalize;
    i {
      margin: auto 0.3rem;
    }
    &.current {
      opacity: 0.6;
    }
  }
}
</style>
