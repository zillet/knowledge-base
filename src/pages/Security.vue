<template>
  <Page>
    <template v-slot:header>
      <h1>Security </h1>
      <p>
        Learn how to protect yourself and your cryptocurrency.
      </p>
    </template>
    <List :articles="articles" />
  </Page>
</template>
<page-query>
query SecurityArticle {
  article: allSecurityArticle {
    edges{
      node{
        title
				excerpt
        path
        timeToRead
        fileInfo{
          directory
        }
        sort
      }
    }
  }
}
</page-query>

<script>
import Vue2Filters from 'vue2-filters';

export default {
  name: 'GettingStarted',
  mixins: [Vue2Filters.mixin],
  computed: {
    articles() {
      return this.orderBy(this.$page.article.edges, 'node.sort', 1);
    }
  }
};
</script>
