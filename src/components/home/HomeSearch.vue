<template>
  <div class="search">
    <div class="search__wrapper">
      <h1>
        How can we help you?
      </h1>
      <SearchForm :home="true" />
    </div>
  </div>
</template>
<script>
import SearchForm from '~/components/SearchForm.vue';

export default {
  components: {
    SearchForm
  },
  data() {
    return {
      search: ''
    };
  }
};
</script>
<style lang="scss" scoped>
.search {
  width: 100%;
  height: 50vh;
  min-height: 10rem;
  max-height: 17rem;
  display: flex;
  color: #fff;
  align-items: center;
  justify-content: center;
  background: var(--secondary-bg);
  &__wrapper {
    max-width: 700px;
    margin: 1rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-items: center;
  }
  h1 {
    color: #fff;
    font-weight: 600;
    margin-bottom: 4rem;
  }
}
</style>
