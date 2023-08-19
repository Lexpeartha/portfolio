// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
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
  modules: [
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@vueuse/nuxt',
    'nuxt-icon'
  ],
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
      preload: ['json', 'js', 'ts', 'css', 'shell', 'html', 'md', 'yaml', 'csharp'],
      theme: {
        default: 'nord',
        dark: 'poimandres'
      }
    }
  },
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: [
        '/',
        '/work',
        '/404.html',
        '/project/404',
        '/sitemap.xml'
      ]
    }
  },
  experimental: {
    writeEarlyHints: true
  }
})
