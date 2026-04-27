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

const head = page.value?.meta?.head as any
usePortfolioSeo({
  title: head?.title || page.value?.title || 'Page',
  description: head?.description,
  image: String(page.value.meta?.image) ?? undefined,
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
