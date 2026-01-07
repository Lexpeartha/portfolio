<script setup lang="ts">
const { type = 'warning', icon = '' } = defineProps<{
  type?: 'info' | 'warning' | 'error'
  icon?: string
}>()

const config = {
  info: {
    icon: 'ion:information-circle',
    bg: 'bg-cyan-50 dark:bg-cyan-900',
    iconColor: 'text-cyan-900 dark:text-cyan-200',
    titleColor: 'text-cyan-900 dark:text-cyan-200',
    textColor: 'text-cyan-700 dark:text-cyan-100',
  },
  warning: {
    icon: 'ion:warning',
    bg: 'bg-yellow-50 dark:bg-yellow-900',
    iconColor: 'text-yellow-900 dark:text-yellow-200',
    titleColor: 'text-yellow-900 dark:text-yellow-200',
    textColor: 'text-yellow-700 dark:text-yellow-100',
  },
  error: {
    icon: 'ion:alert-circle',
    bg: 'bg-rose-50 dark:bg-rose-900',
    iconColor: 'text-rose-900 dark:text-rose-200',
    titleColor: 'text-rose-900 dark:text-rose-200',
    textColor: 'text-rose-700 dark:text-rose-100',
  },
}

const currentConfig = config[type]
const displayIcon = icon || currentConfig.icon
</script>

<template>
  <div
    class="p-4 rounded-lg"
    :class="currentConfig.bg"
  >
    <div class="flex">
      <div
        v-if="displayIcon"
        class="flex-shrink-0 mr-3"
      >
        <Icon
          class="w-5 h-5"
          :class="currentConfig.iconColor"
          aria-hidden="true"
          :name="displayIcon"
        />
      </div>
      <div>
        <h3
          class="m-0 text-base font-medium"
          :class="currentConfig.titleColor"
        >
          <slot
            name="title"
            mdc-unwrap="p"
          />
        </h3>
        <div
          class="mt-2 text-sm"
          :class="currentConfig.textColor"
        >
          <slot mdc-unwrap="p" />
        </div>
      </div>
    </div>
  </div>
</template>
