<template>
  <div id="app">
    <Header />
    <Section
      class="flex-fit"
      container="md">
      <Breadcrumb :path="path" />
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
      <!-- <nav class="docs-nav">
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
      </nav> -->
    </Section>
    <Footer v-if="footer !== false" />
  </div>
</template>

<script>
import Breadcrumb from '@/components/Breadcrumb';
import Github from '@/assets/images/github-logo.svg';
import Header from './partials/Header';
import Footer from './partials/Footer';

export default {
  components: {
    Breadcrumb,
    Footer,
    Github,
    Header
  },
  props: {
    footer: {
      type: Boolean,
      default: true
    },
    path: {
      type: String,
      default: ''
    }
  },
  computed: {
    currentPath() {
      return this.$route.matched[0].path;
    },
    editLink() {
      let path = this.currentPath;
      if ((path.match(new RegExp('/', 'g')) || []).length == 1)
        path = path + '/README';
      return `https://github.com/zillet/knowledge-base/blob/master${path}.md`;
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
