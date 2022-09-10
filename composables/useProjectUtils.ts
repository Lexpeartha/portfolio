import { ParsedContent } from '@nuxt/content/dist/runtime/types'

export default function useProjectUtils () {
  const extractProjectFromContent = (content: ParsedContent): Project | null => {
    if (!content) {
      return null
    }

    return reactive<Project>({
      slug: content?.slug,
      image: content?.image,
      title: content?.title,
      creationDate: new Date(content?.creationDate),
      description: content?.description,
      category: content?.category,
      type: content?.type
    })
  }

  const openInNewWindow = (url: string) => {
    window.open(url, '_blank')
  }

  return {
    extractProjectFromContent,
    openInNewWindow
  }
}
