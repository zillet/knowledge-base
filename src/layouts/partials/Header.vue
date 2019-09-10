<template>
  <header>
    <div class="header-inner container flex gap-30">
      <Logo />

      <Nav class="flex-fit" />

      <nav class="header-actions flex">
        <SearchForm
          v-if="$route.path !='/'"
          class="hide-for-small" />

        <!-- <a
          aria-label="Twitter"
          href="//twitter.com/gridsome"
          rel="noopener noreferrer"
          target="_blank"
          title="Follow us on Twitter"
        >
          <twitter-logo />
        </a> -->

        <!-- <a
          aria-label="Discord"
          href="//discord.gg/daeay6n"
          rel="noopener noreferrer"
          target="_blank"
          title="Join our discord"
        >
          <discord-logo />
        </a> -->

        <a
          aria-label="github"
          href="//github.com/zillet/zillet"
          rel="noopener noreferrer"
          target="_blank"
          title="Zillet @ GitHub">
          <github-logo
            height="20px"
            width="20px"
          />
        </a>
        <a
          aria-label="twitter"
          href="//twitter.com/zilletio"
          rel="noopener noreferrer"
          target="_blank"
          title="Zillet @ Twitter">
          <twitter-logo
            height="20px"
            width="20px"
          />
        </a>
      </nav>
    </div>
  </header>
</template>

<script>
import Logo from './Logo';
import Nav from './Nav';
import SearchForm from '~/components/SearchForm.vue';
import GithubLogo from '@/assets/images/github-logo.svg';
import TwitterLogo from '@/assets/images/twitter-logo.svg';
// import DiscordLogo from '@/assets/images/discord-logo.svg';

export default {
  components: {
    Logo,
    SearchForm,
    GithubLogo,
    TwitterLogo,
    Nav
  }
};
</script>

<style lang="scss">
header {
  z-index: 20;
  position: relative;
  top: 0;
  background: var(--secondary-bg);
  color: #fff;
  border-bottom: 1px solid transparent;
  flex-wrap: nowrap;
  position: sticky;

  .header-inner {
    min-height: var(--header-height);
  }
}

@media screen and (max-width: 750px) {
  header {
    .logo {
      margin-right: 0;
    }
  }
  .header-actions {
    margin-left: auto !important;
    font-size: 0.9rem;
  }
}
</style>
