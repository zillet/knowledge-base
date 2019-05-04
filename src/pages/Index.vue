<template>
  <Home>
    <HomeSearch />
    <HomeCategories />
  </Home>
</template>

<script>
import HomeCategories from '@/components/home/HomeCategories.vue';
import HomeSearch from '@/components/home/HomeSearch.vue';

export default {
  components: {
    HomeSearch,
    HomeCategories
  }
};
</script>
