<script setup lang="ts">
useHead({
  titleTemplate: (chunk: string) => {
    return `${chunk} - Personal Website`
  },
  charset: 'utf-8'
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

/* Overlay texture */
// body::after {
//   content: '';
//   opacity: 8%;
//   display: block;
//   height: 100vh;
//   width: 100vw;
//   position: fixed;
//   pointer-events: none;
//   top: 0;
//   left: 0;
//   z-index: 1000;
//   background-image: url('@/assets/pattern.png');
//   background-repeat: repeat;
// }

.light body::after {
  opacity: 11%;
}
</style>
