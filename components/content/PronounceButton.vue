<script setup lang="ts">
const props = defineProps<{
    audioSrc: string
}>()

const onClick = async () => {
  const audio = new Audio(props.audioSrc)

  await audio.play()
}
</script>

<template>
  <button @click="onClick">
    <slot />
  </button>
</template>
