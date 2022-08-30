<script setup lang="ts">
const props = withDefaults(defineProps<{
    type?: 'regular' | 'cta'
  }>(), {
  type: 'regular'
})

const styleClasses = props.type === 'regular'
  ? 'text-white dark:text-primary-800 hover:bg-primary-200 focus:outline-none focus:ring-2 focus:ring-primary-200 dark:hover:bg-primary-700 dark:focus:ring-primary-700'
  : 'text-primary-800 bg-secondary-400 dark:bg-secondary-500 focus:outline-none focus:ring-2 focus:ring-secondary-200 dark:hover:bg-secondary-400 hover:bg-secondary-500 dark:focus:ring-secondary-700'
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
