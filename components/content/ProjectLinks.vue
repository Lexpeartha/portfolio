<script setup lang="ts">
withDefaults(defineProps<{
    demoLink?: string;
    codeLink?: string;
}>(), {
  demoLink: '',
  codeLink: ''
})

const { openInNewWindow } = useProjectUtils()

</script>

<template>
  <div class="flex gap-2">
    <AppButton
      v-if="demoLink"
      aria-label="Open project demo"
      type="cta"
      @click="openInNewWindow(demoLink)"
    >
      Open Demo
    </AppButton>

    <AppButton
      v-if="codeLink"
      aria-label="Open code repository"
      type="cta"
      @click="openInNewWindow(codeLink)"
    >
      Open code repository
    </AppButton>
  </div>
</template>
