<script setup lang="ts">
defineProps({
  icon: {
    type: String,
    default: 'ion:warning'
  }
})
// text-secondary-600 dark:text-secondary-200 bg-secondary-100 dark:bg-secondary-900
</script>

<template>
  <div class="p-4 rounded-lg dark:bg-yellow-900 bg-yellow-50">
    <div class="flex">
      <div v-if="icon" class="flex-shrink-0 mr-3">
        <Icon class="w-5 h-5 text-yellow-900 dark:text-yellow-200" aria-hidden="true" :name="icon" />
      </div>
      <div>
        <h3 class="m-0 text-base font-medium text-yellow-900 dark:text-yellow-200">
          <ContentSlot :use="$slots.title" unwrap="p" />
        </h3>
        <div class="mt-2 text-sm text-yellow-700 dark:text-yellow-100">
          <ContentSlot :use="$slots.default" unwrap="p" />
        </div>
      </div>
    </div>
  </div>
</template>
