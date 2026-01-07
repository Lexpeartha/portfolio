<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps({
  error: Object as () => NuxtError,
})

const appConfig = useAppConfig()

const is404 = computed(() => props.error?.statusCode === 404)

useHead({
  title: is404.value ? 'Page not found' : 'An error occurred',
})
</script>

<template>
  <div class="lg:px-28 xl:px-60 sm:pt-6 sm:pb-10">
    <Html lang="en" />

    <AppLoadingBar />
    <AppNavbar />
    <NuxtLayout name="default">
      <template v-if="is404">
        <h1 class="md:text-3xl text-2xl font-semibold">
          Page you were looking for
          <span class="highlight">wasn't found</span>
        </h1>
        <p>
          It seems that you got lost... Go back to the homepage, or contact me on
          <NuxtLink
            v-if="appConfig.socials.x"
            :to="`https://x.com/${appConfig.socials.x}`"
            target="_blank"
            external
          >X</NuxtLink>
          <template v-if="appConfig.socials.x && appConfig.socials.bluesky">
            or
          </template>
          <NuxtLink
            v-if="appConfig.socials.bluesky"
            :to="`https://bsky.app/profile/${appConfig.socials.bluesky}`"
            target="_blank"
            external
          >Bluesky</NuxtLink>
          if you think there should be a page here!
        </p>
        <AppButton
          type="cta"
          is-link
          to="/"
        >
          Go to the homepage
        </AppButton>
      </template>
      <template v-else>
        <h1 class="md:text-3xl text-2xl font-semibold">
          <span class="highlight">An error occurred</span>
        </h1>
        <p v-if="error?.statusMessage">
          {{ error.statusMessage }}
        </p>
        <p v-else-if="error?.message">
          {{ error.message }}
        </p>
        <p v-else>
          Something went wrong. Please try again later.
        </p>
        <AppButton
          type="cta"
          is-link
          to="/"
        >
          Go to the homepage
        </AppButton>
      </template>
    </NuxtLayout>
    <AppFooter />
  </div>
</template>
