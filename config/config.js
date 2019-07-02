// ref: https://umijs.org/config/
export default {
  treeShaking: true,
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: false,
      dva: true,
      dynamicImport: { webpackChunkName: true },
      title: 'ppp',
      dll: true,
      locale: {
        enable: true, // default false
        default: 'en-US', // default zh-CN
        baseNavigator: false, // default true, when it is true, will use `navigator.language` overwrite default
      },
    }],
  ],
  routes: [
    { path: '/', component: './Homepage' },
    {
      path: '/work', component: './Work'
    },
    {
      path: '/contact', component: './Contact'
    },
    {
      path: '/blog', component: './Blog'
    },
    { path: '*', component: './NotFound' },
  ],
  // configuration for webpack
  lessLoaderOptions: {
    javascriptEnabled: true,
  },
};
