/*
 * @Description:
 * @Version: 1.0
 * @Autor: Li Cheng
 * @Date: 2023-04-10 20:50:19
 * @LastEditors: Li Cheng
 * @LastEditTime: 2023-04-11 18:28:09
 */
module.exports = {
  title: 'Li Cheng', //站点标题
  description: '一个优点意思的博客', //mate标签description，多用于搜索引擎抓取摘要
  base: '/', //  部署时的路径 默认 /  可以使用二级地址 /base/
  themeConfig: {
    siteTitle: 'Li Cheng',
    logo: '/logo.png',
    nav: [
      { text: '博客', link: '/blog/' },
      { text: 'Vue', link: '/guide/' },
      { text: 'React', link: '/guide/test' },
      { text: '组件库', link: '/guide/test' },
      { text: '脚手架', link: 'https://gitee.com/geeksdidi' },
      { text: '算法', link: 'https://gitee.com/geeksdidi' },
      // {
      //   text: 'Drop Menu',
      //   items: [
      //     { text: 'Item A', link: '/item-1' },
      //     { text: 'Item B', link: '/item-2' },
      //     { text: 'Item C', link: '/item-3' }
      //   ]
      // }
    ],
    // 社交
    socialLinks: [{ icon: 'github', link: 'https://github.com/7mus1c' }],
    //ce
    sidebar: {
      '/blog/': [
        {
          text: 'JS',
          collapsible: true,
          collapsed: true,
          items: [
            {
              text: 'Promise',
              link: '/blog/js/promise'
            },
            { text: 'gulp的使用', link: '/articles/gulp的使用' }
          ]
        },
        {
          text: 'vue教程',
          collapsible: true,
          collapsed: true,
          items: [
            {
              text: 'pina和vuex',
              link: '/articles/pina和vuex'
            }
          ]
        }
      ]
    }
  }
};
