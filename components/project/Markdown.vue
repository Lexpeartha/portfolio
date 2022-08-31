<script setup lang="ts">
const props = defineProps<{
    slug: string
}>()

const { data } = await useAsyncData(`project-${props.slug}`, () => queryContent('/projects').where({
  slug: props.slug
}).find())
</script>

<template>
  <div>
    <ContentRenderer v-if="data[0]" :value="data[0]" />
    <DocumentDrivenNotFound v-else>
      Project you were looking for
      <span class="text-secondary-600 dark:text-secondary-500">wasn't found</span>
    </DocumentDrivenNotFound>
  </div>
</template>
