<template>
  <Layout
    :subtitles="$page.article.subtitles"
    :links="links">
    <div
      class="post mb"
      v-html="$page.article.content" />
  </Layout>
</template>

<page-query>
query BasicArticle ($path: String!) {
  article: basicArticle (path: $path) {
    title
    date (format: "D. MMMM YYYY")
    timeToRead
    content
  }
}
</page-query>

<script>
import links from '@/data/doc-links.yaml';

export default {
  computed: {
    links() {
      return links;
    }
  },
  metaInfo() {
    const { title, headings } = this.$page.article;

    return {
      title: title || (headings.length ? headings[0].value : undefined)
    };
  }
};
</script>
