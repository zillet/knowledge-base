const nodeExternals = require('webpack-node-externals');

module.exports = {
  siteName: 'Zillet Knowledge Base',
  siteUrl: `https://www.gridsome.org`,
  titleTemplate: '%s - Gridsome',
  siteDescription:
    'Gridsome is a Vue-powered static site generator for building CDN-ready websites and apps for any headless CMS, local files or APIs',
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
        path: 'basic/**/*.md',
        typeName: 'BasicArticle'
      }
    }
  ]
};
