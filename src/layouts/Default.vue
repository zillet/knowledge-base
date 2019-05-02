<template>
  <div id="app">
    <Header />
    <Section
      class="flex-fit"
      container="md">
      <slot />
      <p>
        <a
          :href="editLink"
          target="_blank"
          class="github-edit-link">
          <Github />
          <span>Edit this page on GitHub</span>
        </a>
      </p>
      <nav class="docs-nav">
        <div class="docs-nav__previous">
          <g-link
            v-if="previousPage"
            class="docs-nav__link"
            :to="previousPage.link">
            {{ previousPage.title }}
          </g-link>
        </div>
        <div class="docs-nav__next">
          <g-link
            v-if="nextPage"
            class="docs-nav__link"
            :to="nextPage.link">
            {{ nextPage.title }}
          </g-link>
        </div>
      </nav>
    </Section>
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
    subtitles: Array,
    links: Array,
    footer: [Array, String, Object]
  },
  computed: {
    currentPath() {
      return this.$route.matched[0].path;
    },
    editLink() {
      let path = this.currentPath;
      if ((path.match(new RegExp('/', 'g')) || []).length == 1)
        path = path + '/README';
      return `https://github.com/gridsome/gridsome.org/blob/master${path}.md`;
    },
    items() {
      return (
        this.links &&
        this.links.reduce((acc, group) => (acc.push(...group.items), acc), [])
      );
    },
    currentIndex() {
      return (
        this.items &&
        this.items.findIndex(item => item.link === this.$route.path)
      );
    },
    nextPage() {
      return this.items && this.items[this.currentIndex + 1];
    },
    previousPage() {
      return this.items && this.items[this.currentIndex - 1];
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
