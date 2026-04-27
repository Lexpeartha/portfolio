interface SeoOptions {
  title?: string
  description?: string
  image?: string | { src: string, width: number, height: number }
  type?: 'website' | 'article'
}

// Thin wrapper around useSeoMeta that is used to set SEO meta tags for pages
export function usePortfolioSeo(options: SeoOptions = {}) {
  const route = useRoute()
  const { seo } = useAppConfig()

  const toAbsoluteUrl = (path: string) =>
    path.startsWith('http') ? path : `${seo.siteUrl}${path}`

  const resolvedImage = (() => {
    const raw = options.image ?? seo.defaultImage
    if (typeof raw === 'string') {
      return toAbsoluteUrl(raw)
    }
    return { url: toAbsoluteUrl(raw.src), width: raw.width, height: raw.height }
  })()
  
  useSeoMeta({
    titleTemplate: chunk => chunk ? `${chunk} - Portfolio` : 'Portfolio',
    title: options.title,
    description: options.description ?? seo.defaultDescription,
    ogUrl: `${seo.siteUrl}${route.path}`,
    ogType: options.type ?? 'website',
    ogTitle: options.title,
    ogDescription: options.description ?? seo.defaultDescription,
    ogImage: resolvedImage,
    twitterCard: 'summary_large_image',
    twitterTitle: options.title,
    twitterDescription: options.description ?? seo.defaultDescription,
    twitterImage: resolvedImage,
  })
}
