import { SitemapStream, streamToPromise } from 'sitemap'
import { serverQueryContent } from '#content/server'

export default defineEventHandler(async (event) => {
  // Fetch all documents
  const docs = await serverQueryContent(event).find()

  // Add headers
  event.node.res.setHeader('Content-Type', 'application/xml')

  // Create sitemap stream and add items to it
  const sitemap = new SitemapStream({
    hostname: 'https://www.lexpeartha.com'
  })
  for (const doc of docs.filter((d) => {
    const items = d._path?.split('/')
    return !(items?.at(-1) as string).startsWith('_')
  })) {
    const documentPath = doc._path?.split('/')
    const isProject = documentPath?.includes('projects')

    sitemap.write({
      url: documentPath?.join('/'),
      changefreq: 'monthly',
      lastmod: new Date(),
      priority: isProject ? 0.3 : 0.7
    })
  }
  sitemap.end()

  // Returns stream as promise
  return streamToPromise(sitemap)
})
