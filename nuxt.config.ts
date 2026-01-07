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
        {
          rel: 'preload',
          as: 'image',
          href: '/images/pattern-light.svg',
          type: 'image/svg+xml',
        },
        {
          rel: 'preload',
          as: 'image',
          href: '/images/pattern-dark.svg',
          type: 'image/svg+xml',
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

  features: {
    inlineStyles: true,
  },

  experimental: {
    writeEarlyHints: true,
    payloadExtraction: true,
    renderJsonPayloads: true,
  },

  compatibilityDate: '2026-01-01',

  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/', '/work', '/archived', '/404.html', '/sitemap.xml'],
    },
    compressPublicAssets: true,
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          silenceDeprecations: ['legacy-js-api'],
        },
      },
      preprocessorMaxWorkers: true,
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
