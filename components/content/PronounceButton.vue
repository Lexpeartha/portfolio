<script setup lang="ts">
const props = defineProps<{
    audioSrc: string
}>()

const audio = ref<HTMLAudioElement>()

const { playing } = useMediaControls(audio, { src: props.audioSrc })

const onClick = () => {
  if (playing.value) { return }

  playing.value = true
}
</script>

<template>
  <ClientOnly fallback-tag="span">
    <button v-bind="$attrs" aria-label="Play Audio" class="inline-block" @click="onClick">
      <Icon class="p-0 h-4 w-4 inline" name="ion:megaphone" />
    </button>
    <audio ref="audio" class="hidden" />
    <template #fallback>
      ...
    </template>
  </ClientOnly>
</template>
