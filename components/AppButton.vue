<script setup lang="ts">
const props = withDefaults(defineProps<{
    type?: 'regular' | 'cta'
    icon?: string
    iconClasses?: string
  }>(), {
  type: 'regular',
  icon: null,
  iconClasses: ''
})

const styleClasses = props.type === 'regular'
  // Regular button
  ? 'text-white dark:text-primary-800 hover:bg-primary-200 outline-none focus:outline-none focus:ring-2 focus:ring-primary-200 dark:hover:bg-primary-700 dark:focus:ring-primary-700 p-2'
  // CTA button
  : 'text-secondary-700 dark:text-secondary-200 bg-secondary-100 dark:bg-secondary-900 focus:outline-none focus:ring-2 focus:ring-secondary-600 dark:hover:bg-secondary-800 dark:focus:bg-secondary-800 hover:bg-secondary-200 focus:bg-secondary-200 dark:focus:ring-secondary-200 px-3 py-1.5'
</script>

<template>
  <button
    v-bind="$attrs"
    class="flex items-center justify-center text-center inline-block rounded-lg transition-colors duration-200 ease-out"
    :class="styleClasses"
  >
    <slot />
    <Icon
      v-if="props.icon"
      :name="props.icon"
      :class="$slots.default ? `ml-2 ${iconClasses}` : iconClasses"
    />
  </button>
</template>
