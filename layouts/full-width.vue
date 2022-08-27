<template>
  <div class="py-10 m-auto bg-white sm:px-8 sm:shadow dark:bg-primary-800 sm:rounded">
    <main class="max-w-2xl px-4 mx-auto prose sm:px-8 prose-stone dark:prose-invert">
      <slot>
        <h1 class="text-2xl">
          Page not found
        </h1>
      </slot>
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
