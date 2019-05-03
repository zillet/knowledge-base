<template>
  <Home>
    <Section class="text-center">
      <NotFound
        height="200px"
      />
      <h1>Page not found</h1>
    </Section>
  </Home>
</template>
<script>
import NotFound from '@/assets/illustrations/404.svg';

export default {
  components: {
    NotFound
  }
};
</script>
<style lang="scss" scoped>
h1 {
  margin-top: 4rem;
}
</style>
