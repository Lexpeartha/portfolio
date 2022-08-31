<script setup lang="ts">
const props = withDefaults(defineProps<{
    type?: 'regular' | 'cta'
  }>(), {
  type: 'regular'
})

const styleClasses = props.type === 'regular'
  // Regular button
  ? 'text-white dark:text-primary-800 hover:bg-primary-200 focus:outline-none focus:ring-2 focus:ring-primary-200 dark:hover:bg-primary-700 dark:focus:ring-primary-700'
  // CTA button
  : 'text-secondary-600 dark:text-secondary-200 bg-secondary-100 dark:bg-secondary-900 focus:outline-none focus:ring-2 focus:ring-secondary-600 dark:hover:bg-secondary-800 dark:focus:bg-secondary-800 hover:bg-secondary-200 focus:bg-secondary-100 dark:focus:ring-secondary-200'
</script>

<template>
  <button
    v-bind="$attrs"
    class="flex items-center justify-center text-center inline-block rounded-lg p-2 transition-colors duration-200 ease-out"
    :class="styleClasses"
  >
    <slot />
  </button>
</template>
