const nodeExternals = require('webpack-node-externals');

module.exports = {
  siteName: 'Zillet Knowledge Base',
  siteUrl: `https://www.gridsome.org`,
  titleTemplate: '%s - Zillet',
  siteDescription:
    'UI/UX focued minimal and secure Zilliqa Wallet primarily inspired from MEW',
  chainWebpack(config, { isServer }) {
    config.module.rules.delete('svg');
    config.module
      .rule('svg')
      .test(/\.svg$/)
      .use('vue')
      .loader('vue-loader')
      .end()
      .use('svg-to-vue-component')
      .loader('svg-to-vue-component/loader');

    if (isServer) {
      config.externals(
        nodeExternals({
          whitelist: [
            /\.css$/,
            /\?vue&type=style/,
            /vue-instantsearch/,
            /instantsearch.js/,
            /typeface-league-spartan/
          ]
        })
      );
    }
  },
  plugins: [
    {
      use: '@gridsome/plugin-critical',
      options: {
        paths: ['/'],
        width: 1300,
        height: 900
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'getting-started/**/*.md',
        typeName: 'GettingStartedArticle'
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'security/**/*.md',
        typeName: 'SecurityArticle'
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'troubleshooting/**/*.md',
        typeName: 'TroubleshootingArticle'
      }
    }
  ]
};
