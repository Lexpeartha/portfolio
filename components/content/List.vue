<script setup lang="ts">
import { resolveComponent } from "vue";

const { flatUnwrap, unwrap } = useUnwrap();

const slots = useSlots();

function renderListElements() {
	return flatUnwrap(slots.default!(), ["ul"]).map((element: any) =>
		h(resolveComponent("MDCSlot"), { use: () => element, unwrap: "li" }),
	);
}

defineProps({
	icon: {
		type: String,
		default: "ion:checkbox",
	},
});
</script>

<template>
	<ul class="p-0 list-none">
		<li class="flex p-0" v-for="(el, i) in renderListElements()" :key="i">
			<Icon
				:name="icon"
				class="flex-shrink-0 min-w-6 min-h-6 pt-0.5 mr-2 highlight"
			/>
			<span>
				<component :is="() => unwrap(el, ['li'])" />
			</span>
		</li>
	</ul>
</template>
