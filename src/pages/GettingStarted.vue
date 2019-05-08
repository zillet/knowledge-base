<template>
  <Page>
    <template v-slot:header>
      <h1>Getting Started</h1>
      <p>
        Step by step instructions on how to use Zillet & all its features
      </p>
    </template>
    <Section>
      <div
        v-for="article in articles"
        :key="article.node.title">
        <g-link :to="article.node.path">
          <Card
            class="article-list-item">
            <h4>{{ article.node.title }}</h4>
            <p>{{ article.node.excerpt }}</p>
          </Card>
        </g-link>
      </div>
    </Section>
  </Page>
</template>
<page-query>
query GettingStartedArticle {
  article: allGettingStartedArticle {
    edges{
      node{
        title
        category
				excerpt
        path
        timeToRead
        fileInfo{
          directory
        }
      }
    }
  }
}
</page-query>

<script>
export default {
  name: 'GettingStarted',
  computed: {
    articles() {
      return this.$page.article.edges;
    }
  }
};
</script>

<style lang="scss" scoped>
.article-list-item {
  margin-bottom: 1rem;
  padding: 1.5rem 2rem;
  cursor: pointer;
  p {
    margin-bottom: 0;
  }
}
</style>
