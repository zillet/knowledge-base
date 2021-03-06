// Import global styles
import 'prismjs/themes/prism.css';
import '~/assets/style/index.scss';
import 'eva-icons/style/eva-icons.css';
// Add global components
import Layout from '~/layouts/Default.vue';
import Home from '~/layouts/Home.vue';
import Page from '~/layouts/Page.vue';
import Section from '~/components/Section.vue';
import Card from '~/components/Card';
import List from '~/components/List';

import VueScrollTo from 'vue-scrollto';
import Vue2Filters from 'vue2-filters';

import Typography from 'typography';
import 'typeface-league-spartan';

const typography = new Typography({
  baseFontSize: '16px',
  baseLineHeight: 1.6,
  scaleRatio: 1.9,
  bodyColor: 'hsla(0,0%,0%,0.7)',
  headerColor: 'hsla(0,0%,0%,0.9)',
  headerFontFamily: ['League Spartan', 'sans-serif'],
  bodyFontFamily: [
    'Jost',
    'Helvetica',
    'Helvetica Neue',
    'Segoe UI',
    'Helvetica',
    'Arial',
    'sans-serif'
  ]
});

export default function(Vue, { head, router, isServer }) {
  Vue.component('Layout', Layout);
  Vue.component('Home', Home);
  Vue.component('Section', Section);
  Vue.component('Card', Card);
  Vue.component('Page', Page);
  Vue.component('List', List);

  Vue.use(VueScrollTo);
  Vue.use(Vue2Filters);

  head.style.push({
    type: 'text/css',
    cssText: typography.toString()
  });
}
