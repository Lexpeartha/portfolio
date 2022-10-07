<script lang="ts" setup>
const { data: navigation } = await useAsyncData('navigation', () => fetchContentNavigation())

const appConfig = useAppConfig()
</script>

<template>
  <div class="flex justify-between items-center max-w-2xl px-4 py-4 mx-auto sm:px-8">
    <!-- Navigation -->
    <div class="text-primary-700 dark:text-primary-200">
      <NuxtLink
        v-for="link of navigation"
        :key="link._path"
        :to="link._path"
        active-class="font-bold"
        class="mr-6"
      >
        {{ link.title }}
      </NuxtLink>
    </div>
    <!-- Social icons & Color Mode -->
    <div class="flex items-center justify-center gap-x-1.5 transition text-primary-500">
      <AppButton
        v-if="appConfig.socials.twitter"
        is-link
        class="flex items-center justify-center"
        aria-label="Twitter"
        target="_blank"
        :to="`https://twitter.com/${appConfig.socials.twitter}`"
      >
        <Icon name="ion:logo-twitter" class="p-0 text-primary-800 dark:text-white text-xl w-5 h-5" />
      </AppButton>
      <AppButton
        v-if="appConfig.socials.github"
        is-link
        class="flex items-center justify-center"
        aria-label="Github"
        target="_blank"
        :to="`https://github.com/${appConfig.socials.github}`"
      >
        <Icon name="ion:logo-github" class="p-0 text-primary-800 dark:text-white text-xl w-5 h-5" />
      </AppButton>
      <ColorModeSwitch class="dark:text-primary-100 hover:text-primary-700 dark:hover:text-primary-300" />
    </div>
  </div>
</template>
