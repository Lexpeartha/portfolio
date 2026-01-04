<script setup lang="ts">
const props = defineProps<{
  slug: string
}>()

const { data } = await useAsyncData(`project-${props.slug}`, () =>
  queryCollection('projects').where('slug', '=', props.slug).first(),
)

if (!data.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Project not found',
    fatal: false,
  })
}

const { extractProjectFromContent } = useProjectUtils()

const project = extractProjectFromContent(data.value ?? null)

useHead({
  title: project?.title || 'Work project',
})
</script>

<template>
  <div>
    <article v-if="project">
      <div class="flex justify-between items-center mb-16 h-5">
        <div class="flex items-center gap-1">
          <Icon name="ion:arrow-undo" />
          <NuxtLink to="/work">
            Go back
          </NuxtLink>
        </div>
        <p>
          Created: <i>{{ project?.creationDate?.toLocaleDateString('en-UK', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
          }) }}</i>
        </p>
      </div>
      <ContentRenderer :value="data as Record<string, any>" />
      <hr>
      <p>
        Finished reading? <NuxtLink to="/work">
          Go back
        </NuxtLink>
      </p>
    </article>
  </div>
</template>
