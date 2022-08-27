<script setup lang="ts">
defineProps({
  icon: {
    type: String,
    default: 'ion:warning'
  }
})
</script>

<template>
  <div class="p-4 rounded-md dark:bg-amber-150 bg-amber-50">
    <div class="flex">
      <div v-if="icon" class="flex-shrink-0 mr-3">
        <Icon class="w-5 h-5 text-yellow-600" aria-hidden="true" :name="icon" />
      </div>
      <div>
        <h3 class="m-0 text-base font-medium text-yellow-800">
          <ContentSlot :use="$slots.title" unwrap="p" />
        </h3>
        <div class="mt-2 text-sm text-yellow-700">
          <ContentSlot :use="$slots.default" unwrap="p" />
        </div>
      </div>
    </div>
  </div>
</template>
