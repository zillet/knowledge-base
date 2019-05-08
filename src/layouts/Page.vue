<template>
  <div id="app">
    <Header />
    <Subheader>
      <slot name="header" />
    </Subheader>
    <main>
      <slot />
    </main>
    <Footer v-if="footer !== false" />
  </div>
</template>

<script>
import Header from './partials/Header';
import Subheader from './partials/Subheader';
import Footer from './partials/Footer';

export default {
  components: {
    Header,
    Footer,
    Subheader
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
