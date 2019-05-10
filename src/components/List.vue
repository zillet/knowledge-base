<template>
  <Section>
    <div
      v-for="article in articles"
      :key="article.node.title">
      <g-link :to="article.node.path">
        <Card
          class="article-list-item">
          <h4>{{ article.node.title }}</h4>
          <p>{{ article.node.excerpt | truncate(180) }}</p>
        </Card>
      </g-link>
    </div>
  </Section>
</template>
<script>
export default {
  props: {
    articles: {
      type: Array,
      default() {
        return [];
      }
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
