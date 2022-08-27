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
  <div>
    <button class="inline" @click="onClick">
      <Icon class="p-0 h-4 w-4 inline" name="ion:megaphone" />
    </button>
    <audio ref="audio" class="hidden" />
  </div>
</template>
