<script lang="ts" setup>
const route = useRoute()

const { data: page } = await useAsyncData(route.path, () =>
  queryCollection('content').path(route.path).first(),
)

if (!page.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page not found',
  })
}

useHead({
  title: page.value?.meta?.head?.title || page.value?.title || 'Page',
})
</script>

<template>
  <NuxtLayout
    v-if="page"
    :name="(page.meta?.layout as any) || 'default'"
  >
    <ContentRenderer :value="page" />
  </NuxtLayout>
</template>
