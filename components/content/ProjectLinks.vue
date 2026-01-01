<script setup lang="ts">
withDefaults(defineProps<{
  demoLink?: string
  codeLink?: string
}>(), {
  demoLink: '',
  codeLink: '',
})
</script>

<template>
  <div class="flex gap-2">
    <AppButton
      v-if="demoLink"
      is-link
      aria-label="Open project demo"
      type="cta"
      target="_blank"
      :to="demoLink"
    >
      Open Demo
    </AppButton>

    <AppButton
      v-if="codeLink"
      is-link
      aria-label="Open code repository"
      type="cta"
      target="_blank"
      :to="codeLink"
    >
      Open code repository
    </AppButton>
  </div>
</template>
