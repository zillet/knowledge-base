<template>
  <Page>
    <template v-slot:header>
      <h1>
        Troubleshooting issues
      </h1>
      <p>
        Stuck? Get help solving a problem or the error message.
      </p>
    </template>
    <List :articles="articles" />
  </Page>
</template>
<page-query>
query TroubleshootingArticle {
  article: allTroubleshootingArticle {
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
