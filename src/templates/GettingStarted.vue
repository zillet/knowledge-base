<template>
  <!-- eslint-disable vue/no-v-html -->
  <Layout
    :subtitles="$page.article.subtitles">
    <div
      class="post mb"
      v-html="$page.article.content" />
  </Layout>
</template>

<page-query>
query GettingStarted ($path: String!) {
  article: gettingStarted (path: $path) {
    title
    date (format: "D. MMMM YYYY")
    timeToRead
    content
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
