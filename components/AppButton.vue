<template>
  <button
    v-bind="$attrs"
    class="flex items-center justify-center text-center inline-block rounded-lg p-2 text-white hover:bg-primary-200 focus:outline-none focus:ring-2 focus:ring-primary-200 dark:text-primary-800 dark:hover:bg-primary-700 dark:focus:ring-primary-700"
  >
    <slot />
  </button>
</template>
