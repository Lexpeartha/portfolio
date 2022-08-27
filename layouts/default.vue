<template>
  <div class="z-0 max-w-2xl px-4 py-10 m-auto bg-white sm:px-8 sm:shadow dark:bg-primary-800 sm:rounded">
    <main class="prose prose-stone dark:prose-invert max-w-none">
      <slot />
    </main>
  </div>
</template>

<style lang="scss">
/* Customize headers to remove default underline */
.prose h2 a,
.prose h3 a {
  @apply no-underline;
  &:hover {
    @apply underline decoration-wavy decoration-0 decoration-neutral-600 dark:decoration-neutral-300;
  }
}
</style>
