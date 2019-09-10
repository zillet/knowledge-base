<template>
  <Section>
    <div
      v-for="article in articles"
      :key="article.node.title">
      <g-link :to="article.node.path">
        <Card
          class="article-list-item">
          <div class="article-list-item-header">
            <h4>{{ article.node.title }}</h4> <span v-if="isNew(article.node.date)"> New </span>
          </div>
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
  },
  methods: {
    isNew(date) {
      var ourDate = new Date();
      var pastDate = ourDate.getDate() - 14;
      ourDate.setDate(pastDate);
      if (new Date(ourDate) < new Date(date)) {
        return true;
      }
      return false;
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
  &-header {
    display: flex;
    align-items: center;
    span {
      margin: 0rem 1rem 1rem;
      background: #4dbfb5;
      border-radius: 0.3rem;
      padding: 0 0.5rem;
      color: white;
      font-size: 0.7rem;
    }
  }
}
</style>
