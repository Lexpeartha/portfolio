<script setup lang="ts">
defineProps<{
  category: string
  projects: Project[]
}>()
</script>

<template>
  <div>
    <h2>{{ category[0].toUpperCase() + category.slice(1).toLowerCase() }}: </h2>
    <div class="grid gap-x-5 gap-y-2 grid-cols-1 xl:grid-cols-2">
      <ProjectCard
        v-for="project in projects"
        :key="project.slug"
        :project="project"
      />
    </div>
  </div>
</template>
