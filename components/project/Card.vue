<script setup lang="ts">
const props = defineProps<{
  project: Project
  basePath?: string
}>()

const linkPath = props.basePath || '/project'
</script>

<template>
  <NuxtLink
    class="group max-h-[140px] sm:max-h-[120px] bg-white hover:bg-secondary-100 hover:border-secondary-100 dark:bg-primary-800 dark:hover:bg-secondary-900 dark:hover:border-secondary-900 relative rounded-lg no-underline border-2 border-primary-200 dark:border-primary-700 duration-[400ms] overflow-hidden"
    :to="`${linkPath}/${project.slug}`"
  >
    <img
      class="clip absolute transition-all my-0 top-0 left-0 object-cover group-hover:scale-110"
      :alt="project.title"
      :src="project.image"
    />
    <div class="relative py-1 px-4 w-4/5 sm:w-3/5 h-full">
      <h3 class="transition-all my-5 text-base highlight">
        {{ project.title }}
      </h3>
      <p
        class="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary-800 dark:from-white"
      >
        Click to read more...
      </p>
    </div>
  </NuxtLink>
</template>

<style lang="scss" scoped>
.clip {
  clip-path: polygon(65% 0, 100% 0, 100% 100%, 30% 100%);
}
</style>
