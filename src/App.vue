<script setup>
import { onMounted, ref } from 'vue'
import Index from './components/Index.vue'
import About from './components/About.vue'

const paginaActual = ref('principal')

onMounted(() => {
  document.title = 'Buscador de Películas'
})
</script>

<template>
  <v-app>
    <v-app-bar>
      <v-app-bar-title>
        Alexis Mayorga
      </v-app-bar-title>

      <div style="position: absolute; left: 50%; transform: translateX(-50%);">
        Buscador de Películas
      </div>

      <div style="display: flex; margin-left: auto;">
        <v-btn @click="paginaActual = 'principal'">Principal</v-btn>
        <v-btn @click="paginaActual = 'about'">About</v-btn>
      </div>
    </v-app-bar>

    <v-main>
      <Index v-if="paginaActual === 'principal'" />
      <About v-else />
    </v-main>
  </v-app>
</template>

