<script setup>
import { onUnmounted } from 'vue'

defineProps({
	pelicula: {
		type: Object,
		required: true
	}
})

const emitir = defineEmits(['close-details'])

onUnmounted(() => {
	console.log('Los detalles de la película se cerraron')
})
</script>

<template>
	<v-card class="mt-4">
		<v-card-title style="display: flex; justify-content: space-between; align-items: center;">
			{{ pelicula.Title }}
			<v-btn @click="emitir('close-details')">X</v-btn>
		</v-card-title>
		<v-card-text>
			<v-img v-if="pelicula.Poster !== 'N/A'" :src="pelicula.Poster" max-height="300" contain />
			<p class="mt-4">{{ pelicula.Plot }}</p>
		</v-card-text>
	</v-card>
</template>
