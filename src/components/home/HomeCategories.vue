<template>
  <div class="category__wrapper">
    <Card
      center
      class="category">
      <g-image
        src="@/assets/illustrations/getting_started.svg"
        width="180" />
      <div class="category__content">
        <h4>
          Get Started
        </h4>
        <p>
          Step by step instructions on how to use Zillet & all its features
        </p>
      </div>
    </Card>
    <Card
      center
      class="category">
      <g-image
        src="@/assets/illustrations/troubleshooting.svg"
        width="150" />
      <div class="category__content">
        <h4>
          Troubleshooting issues
        </h4>
        <p>
          Stuck? Get help solving a problem or the error message.
        </p>
      </div>
    </Card>
    <Card
      center
      class="category">
      <g-image
        src="@/assets/illustrations/security.svg"
        width="180" />
      <div class="category__content">
        <h4>
          Security
        </h4>
        <p>
          Learn how to protect yourself and your cryptocurrency.
        </p>
      </div>
    </Card>
  </div>
</template>
<style lang="scss" scoped>
.category {
  &__wrapper {
    max-width: 1100px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    margin: 3rem auto;
  }
  width: 300px;
  height: 335px;
  margin: 1rem auto;
  cursor: pointer;
  &__content {
    text-align: center;
    h4 {
      margin-top: 1rem;
    }
    p {
      margin-bottom: 0;
    }
  }
}
</style>
