module.exports = {
  title: 'vencent-blog',
  head: [ // 注入到当前页面的 HTML <head> 中的标签
    ['link', { rel: 'icon', href: '/img09.png' }], // 增加一个自定义的 favicon(网页标签的图标)
    ['link', { rel: 'manifest', href: '/img09.png' }],
    ['link', { rel: 'apple-touch-icon', href: '/img09.png' }]
  ],
  serviceWorker: true,
  host: '10.200.31.204',
  port: '9001',
  themeConfig: {
    logo: '/img12.png',  // 左上角logo
    nav: [ // 导航栏配置
      { text: '首页', link: '/' },
      { text: '随心笔记', link: '/yun' },
      { text: '技术文档', link: '/' },
      { text: '有些问题', link: '/' },
      { text: '个人说明', link: '/' },
    ],
    sidebar: [
      '/yun',
      '/shui',
      ['/lin', '生命中美丽']
    ],
    sidebarDepth: 2
  }
};
