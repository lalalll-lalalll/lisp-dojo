import { defineConfig } from 'vitepress'
import { generateSidebar } from 'vitepress-sidebar'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  // 将 content 目录设为文档根目录
  srcDir: "content",
  
  // 1. 配置多语言
  locales: {
    root: {
      label: 'English',
      lang: 'en',
      title: "Lisp Dojo",
      description: "Code is data, data is code.",
      themeConfig: {
        nav: [
          { text: 'Home', link: '/' },
          {
            text: 'Libraries',
            items: [
            // 注意：这里的链接路径需要与你 content 目录下的文件结构匹配
            { text: 'McClim', link: '/libraries/mcclim' }, 
        ]
      },
          {
            text: 'Books',
            items: [
            // 注意：这里的链接路径需要与你 content 目录下的文件结构匹配
            { text: 'PAIP', link: '/books/paip' }, 
        ]
      }
    ],}
    },

    zh: {
      label: '简体中文',
      lang: 'zh-CN',
      title: "Lisp 道场",
      description: "代码即数据，数据即代码。",
      themeConfig: {
        nav: [
          { text: 'Home', link: '/' },
          {
            text: 'Libraries',
            items: [
            // 注意：这里的链接路径需要与你 content 目录下的文件结构匹配
            { text: 'McClim', link: '/libraries/mcclim' }, 
        ]
      },
          {
            text: 'Books',
            items: [
            // 注意：这里的链接路径需要与你 content 目录下的文件结构匹配
            { text: 'PAIP', link: '/books/paip' }, 
        ]
      }
    ],}
    }

  },



  themeConfig: {
    // 3. 配置自动生成侧边栏
    sidebar: generateSidebar([
      {
        // 因为 srcDir 指向了 content，所以这里用 '.' 代表 content 目录
        documentRootPath: 'docs/content', 
        scanStartPath: 'libraries/mcclim',    // 扫描 content/books/paip 目录
        resolvePath: '/libraries/mcclim/',    // 生成的链接前缀
        useTitleFromFileHeading: true, 

        // ✅ 开启基于 Frontmatter 的排序
        sortMenusByFrontmatterOrder: true,
        
        // (可选) 如果某个文件没有设置 order，可以设置一个默认排序值
        frontmatterOrderDefaultValue: 99, 
      },
      {
        // 因为 srcDir 指向了 content，所以这里用 '.' 代表 content 目录
        documentRootPath: 'docs/content', 
        scanStartPath: 'books/paip',    // 扫描 content/books/paip 目录
        resolvePath: '/books/paip/',    // 生成的链接前缀
        useTitleFromFileHeading: true, 

        // ✅ 开启基于 Frontmatter 的排序
        sortMenusByFrontmatterOrder: true,
        
        // (可选) 如果某个文件没有设置 order，可以设置一个默认排序值
        frontmatterOrderDefaultValue: 99, 
      },
    ]),

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})