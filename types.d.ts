type Project = {
  slug: string
  image?: string
  title?: string
  creationDate?: Date
  category: 'app' | 'website' | 'game' | 'other'
  type: 'personal' | 'professional'
  description: string
}
