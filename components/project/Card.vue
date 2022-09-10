<script setup lang="ts">
defineProps<{
    project: Project
}>()
// const descriptionLimit = 82

// Function that will shorten the description
// const shortenDescription = (description: string) => {
//   if (description.length > descriptionLimit) {
//     let shortened = description.slice(0, descriptionLimit).trim()

//     const blacklisted = ['.', ',', '!', '?', ':', ';']
//     if (blacklisted.includes(shortened.at(-1))) {
//       // Remove last character
//       shortened = shortened.slice(0, -1)
//     }

//     return shortened + '...'
//   }

//   return description
// }
</script>

<template>
  <NuxtLink
    class="group max-h-[120px] bg-white hover:bg-secondary-50 dark:bg-primary-800 dark:hover:bg-secondary-900 relative block rounded-lg no-underline border border-primary-700 dark:border-white hover:border-primary-800 duration-[400ms] overflow-hidden"
    :to="`/project/${project.slug}`"
  >
    <img
      class="clip absolute transition-all my-0 top-0 left-0 object-cover group-hover:scale-110"
      :alt="project.title"
      :src="project.image"
    >
    <div class="relative py-1 px-4 w-3/5 h-full">
      <h3 class="transition-all text-lg group-hover:text-xl highlight">
        {{ project.title }}
      </h3>
      <p class="text-base bg-clip-text text-transparent bg-gradient-to-r from-primary-800 dark:from-white">
        Click to read more
      </p>
    </div>
  </NuxtLink>
</template>

<style lang="scss" scoped>
  .clip {
    clip-path: polygon(65% 0, 100% 0, 100% 100%, 30% 100%);
  }
</style>
