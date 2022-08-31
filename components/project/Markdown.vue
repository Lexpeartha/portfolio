<script setup lang="ts">
const props = defineProps<{
    slug: string
}>()

const { data } = await useAsyncData(`project-${props.slug}`, () => queryContent('/projects').where({
  slug: props.slug
}).find())

const { extractProjectFromContent } = useProjectUtils()

const project = extractProjectFromContent(data.value[0])

useHead({
  title: project.title || 'Project'
})

</script>

<template>
  <div>
    <article v-if="data[0]">
      <div class="flex justify-between items-center mb-16 h-5">
        <div class="flex items-center gap-1">
          <Icon name="ion:arrow-undo" />
          <NuxtLink to="/work">
            Go back
          </NuxtLink>
        </div>
        <p>
          Created: <i>{{ project?.creationDate.toLocaleDateString('en-UK', {
            year: 'numeric',
            month: '2-digit',
            day: 'numeric'
          }) }}</i>
        </p>
      </div>
      <ContentRenderer :value="data[0]" />
      <hr>
      <p>
        Finished reading? <NuxtLink to="/work">
          Go back
        </NuxtLink>
      </p>
    </article>
    <DocumentDrivenNotFound v-else>
      Project you were looking for
      <span class="highlight">wasn't found</span>
    </DocumentDrivenNotFound>
  </div>
</template>
