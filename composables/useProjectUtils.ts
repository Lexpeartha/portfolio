import type { CollectionItemBase } from '@nuxt/content'

export default function useProjectUtils() {
  const extractProjectFromContent = (content: CollectionItemBase | null): Project | null => {
    if (!content) {
      return null
    }

    const c = content as CollectionItemBase & {
      slug?: string
      image?: string
      title?: string
      creationDate?: string
      description?: string
      category?: string
      type?: string
    }

    return reactive<Project>({
      slug: c.slug ?? '',
      image: c.image,
      title: c.title,
      creationDate: new Date(c.creationDate ?? ''),
      description: c.description ?? '',
      category: c.category as Project['category'],
      type: c.type as Project['type'],
    })
  }

  const openInNewWindow = (url: string) => {
    window.open(url, '_blank')
  }

  return {
    extractProjectFromContent,
    openInNewWindow,
  }
}
