<template>
  <Section>
    <h3> Popular Articles <i class="eva eva-arrow-downward-outline" /> </h3>
    <List :articles="articles" />
  </Section>
</template>
<script>
import Vue2Filters from 'vue2-filters';

export default {
  name: 'GettingStarted',
  mixins: [Vue2Filters.mixin],
  computed: {
    articles() {
      let articles = [
        ...this.$page.gettingStartedArticles.edges,
        ...this.$page.securityArticles.edges,
        ...this.$page.troubleshootingArticles.edges
      ];
      return this.orderBy(articles, 'node.priority', -1);
    }
  }
};
</script>

<style lang="scss" scoped>
i {
  font-weight: bold;
  position: relative;
  top: 4px;
  left: 12px;
}
</style>
