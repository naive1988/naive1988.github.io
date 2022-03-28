module.exports = {
  title: 'Just In Time',
  description: 'to be continued',
  base: '/', // 这是部署到github相关的配置
  markdown: {
    lineNumbers: false // 代码块显示行号
  },
  themeConfig: {
    nav:[ // 导航栏配置
      { text: 'leetcode', link: '/leetcode/' },
      {text: '手写', link: '/polyfill/'}
    ],
  }
};
