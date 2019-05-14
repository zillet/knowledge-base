<template>
  <Home>
    <HomeSearch />
    <HomeCategories />
    <HomePopular />
  </Home>
</template>
<page-query>
query SearchPage {
  gettingStartedArticles: allGettingStartedArticle(filter: { priority: { gte: 69 }}) {
    edges {
      node {
        title
        path
        excerpt
        priority
      }
    }
  }
  securityArticles: allSecurityArticle(filter: { priority: { gte: 69 }}){
    edges {
      node {
        title
        path
        excerpt
        priority
      }
    }
  }
  troubleshootingArticles: allTroubleshootingArticle(filter: { priority: { gte: 69 }}){
    edges {
      node {
        title
        path
        excerpt
        priority
      }
    }
  }
}
</page-query>
<script>
import HomeCategories from '@/components/home/HomeCategories.vue';
import HomeSearch from '@/components/home/HomeSearch.vue';
import HomePopular from '@/components/home/HomePopular.vue';

export default {
  components: {
    HomeCategories,
    HomePopular,
    HomeSearch
  }
};
</script>
