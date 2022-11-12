<script setup lang="ts">
useHead({
  titleTemplate: (chunk) => {
    return chunk ? `${chunk} - Personal Website` : 'Personal Website'
  }
})
</script>

<template>
  <div class="lg:px-28 xl:px-60 sm:pt-6 sm:pb-10">
    <Html lang="en" />

    <AppLoadingBar />
    <AppNavbar />
    <NuxtPage />
  </div>
</template>

<style lang="scss">
body {
  @apply transition-colors duration-150 bg-primary-50 dark:bg-primary-900;
}
</style>
