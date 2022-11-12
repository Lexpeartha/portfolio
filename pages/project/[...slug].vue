<script setup lang="ts">
definePageMeta({
  layout: 'full-width',
  documentDriven: {
    page: false,
    surround: false
  }
})
const { params } = useRoute()

const slug = typeof params.slug === 'string' ? params.slug : params.slug[0]
</script>

<template>
  <NuxtLayout>
    <ProjectMarkdown :slug="slug" />
  </NuxtLayout>
</template>
