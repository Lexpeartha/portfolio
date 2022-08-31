<script setup lang="ts">
// Utils from Nuxt Content
const { flatUnwrap } = useUnwrap()

defineProps({
  icon: {
    type: String,
    default: 'ion:checkbox'
  }
})
</script>

<template>
  <ul class="p-0">
    <li v-for="(item, index) of flatUnwrap($slots.default(), ['ul'])" :key="index" class="flex pl-0 space-x-2">
      <Icon :name="icon" class="flex-shrink-0 w-6 h-6 mt-1 highlight" />
      <span><ContentSlot :use="() => item" unwrap="li" /></span>
    </li>
  </ul>
</template>
