<script setup lang="ts">
const appConfig = useAppConfig()
</script>

<template>
  <div class="flex gap-2.5 h-10">
    <AppButton
      is-link
      type="cta"
      aria-label="Send me an email"
      target="_blank"
      to="mailto:contact@lexpeartha.com"
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
