<script setup>
defineProps({
	movies: {
		type: Array,
		required: true
	}
})

const emitir = defineEmits(['select-movie'])
</script>

<template>
	<v-list>
		<v-list-item v-for="pelicula in movies":key="pelicula.imdbID":title="pelicula.Title"
		:subtitle="`${pelicula.Year} · ${pelicula.Type}`" @click="emitir('select-movie', pelicula.imdbID)">
			<template #prepend>
				<v-avatar rounded="0">
					<v-img v-if="pelicula.Poster !== 'N/A'" :src="pelicula.Poster" cover />
				</v-avatar>
			</template>
		</v-list-item>
	</v-list>
</template>
