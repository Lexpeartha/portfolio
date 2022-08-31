<script setup lang="ts">
defineProps<{
    project: Project
}>()
</script>

<template>
  <NuxtLink class="block border border-secondary-500 rounded-lg px-4 py-2 no-underline" :to="`/project/${project.slug}`">
    <h3>
      {{ project.title }}
    </h3>
    <p>{{ project.creationDate }}</p>
  </NuxtLink>
</template>
