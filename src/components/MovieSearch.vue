<script setup>
import { onMounted, ref } from 'vue'

const consulta = ref('')
const tipo = ref('movie')
const anio = ref('')
const campoBusqueda = ref(null)

const emit = defineEmits(['search-movies', 'clear-results'])

const buscar = () => {
	if (consulta.value.trim()) {
		emit('search-movies', { query: consulta.value.trim(), type: tipo.value, year: anio.value })
	}
}

const limpiar = () => {
	consulta.value = ''
	anio.value = ''
	emit('clear-results')
}

onMounted(() => {
	campoBusqueda.value?.focus()
})
</script>

<template>
	<v-card>
		<v-card-title>Buscar películas</v-card-title>
		<v-card-text>
			<v-text-field ref="campoBusqueda" v-model="consulta" label="Título" @keyup.enter="buscar" />
			<v-select v-model="tipo" label="Tipo" :items="['movie', 'series', 'episode']" />
			<v-text-field v-model="anio" label="Año" type="number" />
			<v-btn color="primary" class="mr-2" @click="buscar">Buscar</v-btn>
			<v-btn variant="text" @click="limpiar">Limpiar</v-btn>
		</v-card-text>
	</v-card>
</template>
