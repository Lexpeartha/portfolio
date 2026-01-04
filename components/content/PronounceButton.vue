<script setup lang="ts">
const props = defineProps<{
  audioSrc: string
}>()

const audio = ref<HTMLAudioElement>()

const { playing } = useMediaControls(audio, { src: props.audioSrc })

const onClick = () => {
  if (playing.value) {
    return
  }

  playing.value = true
}
</script>

<template>
  <ClientOnly fallback-tag="span">
    <button
      v-bind="$attrs"
      aria-label="Play Audio"
      class="inline-block"
      @click="onClick"
    >
      <Icon
        class="translate-y-0.5 h-4 w-4 inline-block my-auto"
        name="ion:megaphone"
      />
    </button>
    <audio
      ref="audio"
      class="hidden"
    />
    <template #fallback>
      <span class="inline-block">🔊</span>
    </template>
  </ClientOnly>
</template>
