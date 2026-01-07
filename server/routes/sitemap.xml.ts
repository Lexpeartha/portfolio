import { SitemapStream, streamToPromise } from 'sitemap'
import { queryCollection } from '@nuxt/content/server'

export default defineEventHandler(async (event) => {
  // Fetch all documents from content and archive collections
  const docs = await queryCollection(event, 'content').all()
  const projects = await queryCollection(event, 'projects').all()
  const archived = await queryCollection(event, 'archive').all()

  // Add headers
  event.node.res.setHeader('Content-Type', 'application/xml')

  // Create sitemap stream and add items to it
  const sitemap = new SitemapStream({
    hostname: 'https://www.lexpeartha.com',
  })

  // Add content pages
  for (const doc of docs.filter((d) => {
    const items = d.path?.split('/')
    return !(items?.at(-1) as string).startsWith('.')
  })) {
    sitemap.write({
      url: doc.path,
      changefreq: 'monthly',
      lastmod: new Date(),
      priority: 0.7,
    })
  }

  // Add project pages
  for (const project of projects) {
    sitemap.write({
      url: `/project/${project.slug}`,
      changefreq: 'monthly',
      lastmod: new Date(),
      priority: 0.5,
    })
  }

  // Add archived project pages
  for (const project of archived) {
    sitemap.write({
      url: `/archive/${project.slug}`,
      changefreq: 'yearly',
      lastmod: new Date(),
      priority: 0.3,
    })
  }

  sitemap.end()

  // Returns stream as promise
  return streamToPromise(sitemap)
})
