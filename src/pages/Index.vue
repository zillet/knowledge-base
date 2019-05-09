<template>
  <Home>
    <div class="search">
      <div class="search__wrapper">
        <h1>
          How can we help you?
        </h1>
        <div class="search__input-box">
          <i class="eva eva-search-outline" />
          <input
            v-model="search"
            class="search__input"
            placeholder="Search"
            value="">
        </div>
      </div>
    </div>
  </Home>
</template>

<script>
export default {
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
  min-height: 150px;
  max-height: 300px;
  display: flex;
  color: #fff;
  align-items: center;
  justify-content: center;
  background: var(--secondary-bg);
  h1 {
    color: #fff;
    font-weight: 600;
  }
  &__wrapper {
    max-width: 700px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-items: center;
  }
  &__input-box {
    background: #fff;
    border-radius: 3px;
    margin-top: 2rem;
    width: 100%;
    height: 2.625rem;
    display: inline-block;
    vertical-align: middle;
    position: relative;
    i {
      position: absolute;
      color: #a6aebd;
      left: 1rem;
      top: 0.7rem;
      font-size: 1.2rem;
    }
  }
  &__input {
    width: 100%;
    height: 2.625rem;
    border: none;
    text-indent: 2.4rem;
    background: url('../assets/images/search.svg') no-repeat 13px 13px;
    background-size: 17px;
    box-sizing: border-box;
    font-size: 0.9rem;
    box-shadow: 0 20px 13px 1px rgba(22, 49, 80, 0.1);
  }
}
</style>
