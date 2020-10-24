const nodeExternals = require('webpack-node-externals');
require('dotenv').config();

const collections = [
  {
    contentTypeName: 'GettingStartedArticle',
    indexName: 'getting-started', // Algolia index name
    itemFormatter: item => {
      return {
        objectID: item.sort,
        title: item.title,
        slug: item.slug,
        excerpt: item.excerpt,
        modified: String(item.modified)
      };
    }, // optional
    matchFields: ['title', 'excerpt'] // Array<String> required with PartialUpdates
  }
];

module.exports = {
  siteName: 'Zillet Knowledge Base',
  siteUrl: `https://www.gridsome.org`,
  titleTemplate: '%s - Zillet',
  siteDescription:
    'Zillet is a web wallet for Zilliqa, Send Zilliqa and tokens easily using Zillet',
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
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: 'UA-139308938-2'
      }
    },
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
