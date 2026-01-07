<script setup lang="ts">
const { data: content } = await useAsyncData('archived-projects', () => queryCollection('archive').all())

const projectsList: Project[] = []

const { extractProjectFromContent } = useProjectUtils()

// Add null check for content.value
if (content.value) {
  for (const project of content.value) {
    const p = extractProjectFromContent(project)

    if (!p) {
      continue
    }

    projectsList.push(p)
  }
}

// Sort by creation date (oldest first to show chronological learning journey)
const sortedProjects = projectsList.sort((a, b) => {
  return new Date(a.creationDate).getTime() - new Date(b.creationDate).getTime()
})
</script>

<template>
  <div>
    <div
      v-if="sortedProjects.length"
      class="grid gap-4 sm:gap-8 grid-cols-1 sm:grid-cols-2"
    >
      <ProjectCard
        v-for="project in sortedProjects"
        :key="project.slug"
        :project="project"
        base-path="/archive"
      />
    </div>
    <div
      v-else
      class="text-center py-12 text-gray-500 dark:text-gray-400"
    >
      <p>No archived projects yet.</p>
    </div>
  </div>
</template>
