<template>
  <div id="app">
    <Header />
    <main>
      <slot />
    </main>
    <Footer v-if="footer !== false" />
  </div>
</template>

<script>
import Header from './partials/Header';
import Footer from './partials/Footer';

export default {
  components: {
    Header,
    Footer
  },
  props: {
    footer: {
      type: Boolean,
      default: true
    }
  }
};
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

#app main {
  flex: 1;
}
</style>
