<!-- This component is used to show Markdown code block examples -->
<template>
  <pre class="overflow-x-auto"><ContentSlot :use="$slots.default" unwrap="p" /></pre>
</template>
