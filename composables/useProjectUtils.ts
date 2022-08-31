import { ParsedContent } from '@nuxt/content/dist/runtime/types'

export default function useProjectUtils () {
  const extractProjectFromContent = (content: ParsedContent): Project => {
    return reactive<Project>({
      slug: content.slug,
      image: content.image,
      title: content.title,
      creationDate: new Date(content.creationDate),
      description: content.description,
      category: content.category,
      type: content.type
    })
  }

  return {
    extractProjectFromContent
  }
}
