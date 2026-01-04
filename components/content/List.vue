<script setup lang="ts">
import { h } from 'vue'
import type { VNode } from 'vue'

const props = defineProps({
  icon: {
    type: String,
    default: 'ion:checkbox',
  },
})

const slots = useSlots()

const Icon = resolveComponent('Icon')
const MDCSlot = resolveComponent('MDCSlot')

const processSlot = () => {
  const slotContent = slots.default?.()
  if (!slotContent || !slotContent.length) return null

  // Check if first node is the AsyncComponentWrapper with ul tag
  const firstNode = slotContent[0] as any

  // If it has children.default (a slot function), call it to get the li elements
  if (firstNode?.children?.default && typeof firstNode.children.default === 'function') {
    const liElements = firstNode.children.default() as VNode[]

    if (Array.isArray(liElements) && liElements.length > 0) {
      return h('ul', { class: 'p-0 list-none' },
        liElements.map((liNode: VNode, index: number) =>
          h('li', { key: index, class: 'flex items-start p-0 my-1' }, [
            h(Icon, { name: props.icon, class: 'flex-shrink-0 w-6 h-6 min-w-6 min-h-6 translate-y-0.5 mr-2 highlight' }),
            h('span', { class: 'flex-1' }, [
              h(MDCSlot, { use: () => liNode, unwrap: 'li' }),
            ]),
          ]),
        ),
      )
    }
  }

  // Fallback
  return slotContent
}
</script>

<template>
  <component :is="() => processSlot()" />
</template>

<style scoped>
/* Style nested lists */
:deep(.list-component),
:deep(ul) {
  @apply pl-4 mt-2 list-none;
}
</style>
