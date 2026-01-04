<script lang="ts" setup>
const route = useRoute()
const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection('content').path(route.path).first()
})

if (!page.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page not found',
  })
}

// Set page metadata from frontmatter
useHead({
  title: page.value.meta.head?.title || page.value.title,
})
</script>

<template>
  <NuxtLayout :name="page!.meta?.layout as any || 'default'">
    <ContentRenderer :value="page!" />
  </NuxtLayout>
</template>
