<script setup lang="ts">
const { openInNewWindow } = useProjectUtils()

const openMail = () => {
  openInNewWindow('mailto:portfolio@lexpeartha.com')
}
</script>

<template>
  <div class="flex gap-2.5 h-10">
    <AppButton type="cta" aria-label="Send email" @click="openMail">
      Send me an email
    </AppButton>
    <AppButton
      icon="cib:linkedin"
      class="px-2.5"
      icon-classes="text-secondary-700 dark:text-white w-4 h-4"
      aria-label="LinkedIn"
      @click="openInNewWindow('https://www.linkedin.com/in/aleksa-sevi%C4%87/')"
    />
    <AppButton
      icon="cib:upwork"
      class="px-2.5"
      icon-classes="text-secondary-700 dark:text-white w-4 h-4"
      aria-label="Upwork"
      @click="openInNewWindow('https://www.upwork.com/freelancers/~011091f31d7d6c3e5e')"
    />
  </div>
</template>
