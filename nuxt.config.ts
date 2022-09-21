import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@vueuse/nuxt',
    'nuxt-icon'
  ],
  app: {
    head: {
      link: [
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: '/favicon.ico'
        }
      ]
    }
  },
  // https://color-mode.nuxtjs.org
  colorMode: {
    classSuffix: ''
  },
  css: [
    '~/assets/styles/global.scss'
  ],
  // https://content.nuxtjs.org
  content: {
    documentDriven: true,
    highlight: {
      // See the available themes on https://github.com/shikijs/shiki/blob/main/docs/themes.md#all-theme
      theme: 'poimandres'
    }
  },
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: [
        '/',
        '/404.html',
        '/project/404',
        '/sitemap.xml'
      ]
    }
  }
})
