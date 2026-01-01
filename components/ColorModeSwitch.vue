<script setup lang="ts">
const colorMode = useColorMode()
const onClick = () => (colorMode.value === 'light'
  ? (colorMode.preference = 'dark')
  : (colorMode.preference = 'light'))
</script>

<template>
  <div class="inline-block">
    <AppButton
      aria-label="Color Mode"
      class="text-primary-800 dark:text-white"
      @click="onClick"
    >
      <ColorScheme placeholder="O">
        <Transition
          mode="out-in"
          name="scale"
        >
          <Icon
            v-if="colorMode.value === 'dark'"
            class="text-white text-xl w-5 h-5"
            name="ion:moon"
          />
          <Icon
            v-else
            class="text-primary-800 text-xl w-5 h-5"
            name="ion:sunny"
          />
        </Transition>
      </ColorScheme>
    </AppButton>
  </div>
</template>
