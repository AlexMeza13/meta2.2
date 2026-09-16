<script setup>
defineProps({
	loading: {
		type: Boolean,
		required: true
	}
})
</script>

<template>
	<div v-if="loading" style="text-align: center; margin: 16px;">
		<v-progress-circular indeterminate />
	</div>
</template>
