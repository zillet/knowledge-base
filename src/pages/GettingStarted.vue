<template>
  <Page>
    <template v-slot:header>
      <h1>Getting Started</h1>
      <p>
        Step by step instructions on how to use Zillet & all its features
      </p>
    </template>
    <List :articles="articles" />
  </Page>
</template>
<page-query>
query GettingStartedArticle {
  article: allGettingStartedArticle {
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
