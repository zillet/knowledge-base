<template>
  <form
    :id="id"
    class="header-search"
    :class="{'home': home}">
    <input
      :id="`${id}-input`"
      class="header-search__input"
      placeholder="Search ..."
      type="search">
  </form>
</template>

<script>
export default {
  props: {
    id: { type: String, default: 'search' },
    home: {
      type: Boolean,
      default: false
    }
  },
  mounted() {
    import('docsearch.js').then(({ default: docsearch }) => {
      docsearch({
        appId: '60PEWO07TU',
        indexName: 'getting-started',
        inputSelector: `#${this.id}-input`,
        apiKey: 'c2f5bd9b163d4696e4fd0e6e0e0521e1',
        debug: true
      });
    });
  }
};
</script>

<style lang="scss">
@import '~docsearch.js/dist/cdn/docsearch.min.css';

.header-search {
  display: inline-block;
  margin-bottom: 0;
  margin-right: 0.5rem;
  font-size: 0.9rem;

  & &__input {
    color: #fff;
    border-radius: 5px;
    width: 170px;
    background-color: rgba(255, 255, 255, 0.15);
    border-color: transparent;
    padding: 0.3rem 0.6rem 0.27rem;
    transition: padding 0.2s, width 0.2s, opacity 0.3s, background-color 0.3s;
    margin-bottom: 0.5px;
    &:focus {
      background-color: rgba(255, 255, 255, 0.1);
    }
  }

  &.home {
    width: 100%;
    span {
      width: 100%;
    }
    .header-search__input {
      width: 100%;
      padding: 0.55rem 1rem 0.53rem;
    }
  }
}

.algolia-autocomplete .algolia-docsearch-suggestion--wrapper {
  padding-top: 0;
}
</style>
