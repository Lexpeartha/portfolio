<script setup lang="ts">
const { data: content } = await useAsyncData('all-projects', () => queryContent('/projects').find())

const projectsList: Project[] = []

const { extractProjectFromContent } = useProjectUtils()

for (const project of content.value) {
  const p = extractProjectFromContent(project)

  projectsList.push(p)
}

// Projects under "app" category
const appProjects = projectsList.filter(p => p.category === 'app')

// Projects under "website" category
const websiteProjects = projectsList.filter(p => p.category === 'website')

// Projects under "game" category
const gameProjects = projectsList.filter(p => p.category === 'game')

// Projects under "other" category
const otherProjects = projectsList.filter(p => p.category === 'other')
</script>

<template>
  <div>
    <ProjectCategory v-if="appProjects.length" category="apps" :projects="appProjects" />

    <ProjectCategory v-if="websiteProjects.length" category="websites" :projects="websiteProjects" />

    <ProjectCategory v-if="gameProjects.length" category="games" :projects="gameProjects" />

    <ProjectCategory v-if="otherProjects.length" category="other" :projects="otherProjects" />

    <!-- <div v-for="c of content" :key="c.slug">
      <ContentRenderer :value="c" />
    </div> -->
  </div>
</template>
