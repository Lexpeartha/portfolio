<script setup lang="ts">
defineProps<{
    category: string
    projects: Project[]
}>()
</script>

<template>
  <div>
    <h2>{{ category[0].toUpperCase() + category.slice(1) }}: </h2>
    <ProjectCard v-for="project in projects" :key="project.slug" :project="project" />
  </div>
</template>
