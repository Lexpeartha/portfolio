<script setup lang="ts">
definePageMeta({
  layout: 'full-width',
})
const { params } = useRoute()

const slug = typeof params.slug === 'string' ? params.slug : params.slug[0]
</script>

<template>
  <NuxtLayout>
    <ProjectMarkdown
      :slug="slug"
      collection="archive"
    />
  </NuxtLayout>
</template>
