<template>
  <!-- eslint-disable vue/no-v-html -->
  <Layout
    :path="$page.article.path">
    <div
      class="post mb"
      v-html="$page.article.content" />
  </Layout>
</template>

<page-query>
query TroubleshootingArticle ($path: String!) {
  article: troubleshootingArticle (path: $path) {
    title
    date (format: "D. MMMM YYYY")
    timeToRead
    content
    path
  }
}
</page-query>

<script>
export default {
  metaInfo() {
    const { title, headings } = this.$page.article;

    return {
      title: title || (headings.length ? headings[0].value : undefined)
    };
  }
};
</script>
