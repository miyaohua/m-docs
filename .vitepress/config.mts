import { defineConfig } from 'vitepress'
import nav from './nav'
import sidebar from './sidebar'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "m的笔记小站",
  description: "远处的霓虹灯亮了，像一道靓丽的风景线",
  srcDir: "./docs",
  assetsDir: './assets',
  themeConfig: {
    logo: '/logo.svg',
    // https://vitepress.dev/reference/default-theme-config
    nav,
    sidebar,
    search: {
      provider: 'local'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/miyaohua' }
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright m的笔记小站 © 2019-present Evan You'
    }
  }
})
