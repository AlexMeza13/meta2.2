<template>
      <v-container class="pa-8">
        <v-row>
          <v-col cols="12">
            <h1 class="text-h3 mb-6 text-center">🎬 Buscador de Peliculas</h1>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12" md="4">
            <movie-search 
              @search-movies="handleSearch"
              @clear-results="handleClear"
            />
          </v-col>

          <v-col cols="12" md="8">
            <loading-spinner :loading="loading" />
            
            <movie-list 
              v-if="movies.length > 0"
              :movies="movies"
              @select-movie="handleMovieSelect"
            />

            <movie-details 
              v-if="selectedMovie"
              :pelicula="selectedMovie"
              @close-details="handleCloseDetails"
            />

            <v-alert
              v-if="error"
              type="error"
              class="mt-4"
            >
              {{ error }}
            </v-alert>
          </v-col>
        </v-row>
      </v-container>
    </template>

<script setup>
import { ref } from 'vue'
import MovieSearch from './MovieSearch.vue'
import MovieList from './MovieList.vue'
import MovieDetails from './MovieDetails.vue'
import LoadingSpinner from './LoadingSpinner.vue'
import { searchMovies, getMovieDetails } from '../../services/movieApi.js'

const movies = ref([])
const selectedMovie = ref(null)
const loading = ref(false)
const error = ref('')

const handleSearch = async (searchParams) => {
  loading.value = true
  error.value = ''
  
  try {
    const response = await searchMovies(searchParams)
    if (response.Search) {
      movies.value = response.Search
    } else {
      movies.value = []
      error.value = 'No se encontraron películas'
    }
  } catch (err) {
    error.value = 'Error al buscar películas'
    console.error(err)
  } finally {
    loading.value = false
  }
}

const handleMovieSelect = async (imdbID) => {
  loading.value = true
  try {
    selectedMovie.value = await getMovieDetails(imdbID)
  } catch (err) {
    error.value = 'Error al cargar detalles de la película'
    console.error(err)
  } finally {
    loading.value = false
  }
}

const handleCloseDetails = () => {
  selectedMovie.value = null
}

const handleClear = () => {
  movies.value = []
  selectedMovie.value = null
  error.value = ''
}
</script>
