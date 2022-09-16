<script setup lang="ts">
const { openInNewWindow } = useProjectUtils()

const appConfig = useAppConfig()

const openMail = () => {
  openInNewWindow('mailto:portfolio@lexpeartha.com')
}
</script>

<template>
  <div class="flex gap-2.5 h-10">
    <AppButton
      type="cta"
      aria-label="Send email"
      @click="openMail()"
    >
      Send me an email
    </AppButton>
    <AppButton
      is-link
      icon="cib:linkedin"
      class="px-2.5"
      icon-classes="text-secondary-700 dark:text-white w-4 h-4"
      aria-label="LinkedIn"
      target="_blank"
      :to="`https://www.linkedin.com/in/${appConfig.socials.linkedin}`"
    />
    <AppButton
      is-link
      icon="cib:upwork"
      class="px-2.5"
      icon-classes="text-secondary-700 dark:text-white w-4 h-4"
      aria-label="Upwork"
      target="_blank"
      :to="`https://www.upwork.com/freelancers/${appConfig.socials.upworkId}`"
    />
  </div>
</template>
