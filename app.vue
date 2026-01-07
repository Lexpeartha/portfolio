<script setup lang="ts">
useSeoMeta({
  titleTemplate: (chunk) => {
    return chunk ? `${chunk} - Portfolio` : 'Portfolio'
  },
  description:
    'Portfolio of Aleksa, a software engineer specializing in full-stack development, AI/LLMs, and modern web technologies.',
  ogTitle: 'Aleksa - Software Engineer Portfolio',
  ogImage: 'https://lexpeartha.com/images/projects/portfolio-website.png',
  ogDescription:
    'Portfolio of Aleksa, a software engineer specializing in full-stack development, AI/LLMs, and modern web technologies.',
  twitterCard: 'summary_large_image',
})
</script>

<template>
  <div class="lg:px-28 xl:px-60 sm:pt-6 sm:pb-10">
    <Html lang="en" />

    <AppLoadingBar />
    <AppNavbar />
    <NuxtPage />
    <AppFooter />
  </div>
</template>

<style lang="scss">
body {
  @apply transition-colors duration-150 bg-primary-50 dark:bg-primary-900;
}
</style>
