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
    '@nuxt/image',
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
  image: {
    provider: 'ipx',
    format: ['webp', 'png', 'jpg', 'jpeg'],
    presets: {
      showcase: {
        modifiers: {
          fit: 'contain',
          loading: 'lazy',
          width: 1280,
          height: 720,
          quality: 85,
          // TODO: change this to teal[700] when theme is light
          // background: colors.teal[500]
        },
      },
      preview: {
        modifiers: {
          fit: 'cover',
          width: 1200,
          position: 'left',
          quality: 45
        }
      }
    },
  },
  generate: {
    routes: ['/', '/work', '/404.html']
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
  },
  alias: { // Fixes incompatibility problems for now: https://github.com/nuxt/content/issues/2254
    "micromark/lib/preprocess.js": "micromark",
    "micromark/lib/postprocess.js": "micromark",
  },
  experimental: {
    writeEarlyHints: true
  }
})
