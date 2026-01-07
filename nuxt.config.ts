// https://nuxt.com/docs/getting-started/configuration
export default defineNuxtConfig({

  modules: [
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@vueuse/nuxt',
    '@nuxt/icon',
    '@nuxt/eslint',
  ],
  app: {
    head: {
      link: [
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: '/favicon.ico',
        },
      ],
    },
  },

  css: ['~/assets/styles/global.scss'],

  // https://color-mode.nuxtjs.org
  colorMode: {
    classSuffix: '',
  },

  // https://content.nuxtjs.org
  content: {
    build: {
      markdown: {
        highlight: {
          langs: ['json', 'js', 'ts', 'css', 'shell', 'html', 'md', 'yaml', 'csharp'],
          theme: {
            default: 'nord',
            dark: 'poimandres',
          },
        },
      },
    },
  },

  future: {
    compatibilityVersion: 4,
  },

  experimental: {
    writeEarlyHints: true,
  },

  compatibilityDate: '2026-01-01',

  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/', '/work', '/archived', '/404.html', '/sitemap.xml'],
    },
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          silenceDeprecations: ['legacy-js-api'],
        },
      },
    },
  },

  eslint: {
    config: {
      stylistic: {
        indent: 2,
        quotes: 'single',
        semi: false,
      },
    },
  },
})
