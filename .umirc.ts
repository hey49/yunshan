import { Component } from 'react';
import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  "theme": {
    "primary-color": "#8da745",
  },
  chainWebpack(config) {
    config.module
      .rule('svg-with-file')
      .test(/.pdf$/)
      .use('pdf-with-file-loader')
      .loader('file-loader');
    config.module
      .rule('media')
      .test(/\.(mp3|4)$/)
      .use('file-loader')
      .loader(require.resolve('file-loader'));
  },
  routes: [
    { path: '/', 
      component: '@/pages/layout/layout', 
      routes: [
        {path: '/', component: '@/pages/index',}, // nested routes, sharing the same layout
        {path: '/contact', component: '@/pages/contact/contact'},
        {path: '/archive', component: '@/pages/archive/archive'},
        {path: '/partner', component: '@/pages/partner'},
        {path: '/donate', component: '@/pages/donate'},
        {path: '/report', component: '@/pages/report/report'},
        {path: '/tianxing', component: '@/pages/tianxing'},
        {path: '/concolor', component: '@/pages/concolor'},
        {path: '/investigate', component: '@/pages/investigate'},
        {path: '/timeline', component: '@/pages/timeline/timeline'},
        {path: '/council', component: '@/pages/council/council'}
      ]
  },
  ],
  fastRefresh: {},
});
