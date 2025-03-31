<script setup>
import { ref } from 'vue'
import { usePokemonStore } from '@/stores/pokemonStore'

const store = usePokemonStore()
const search = ref('')
</script>

<template>
  <div class="pokemon-app">
    <h1 class="title">Pokédex</h1>
    
    <div class="search-container">
      <input v-model="search" placeholder="Digite o nome do Pokémon" />
      <button @click="store.fetchPokemon(search.toLowerCase())">Buscar</button>
    </div>

    <div v-if="store.isLoading" class="loading">Carregando...</div>
    
    <div v-else-if="store.pokemon" class="pokemon-card">
      <h2 class="pokemon-name">{{ store.pokemon.name }}</h2>
      <img 
        :src="store.pokemon.sprites.front_default" 
        alt="Imagem do Pokémon" 
        class="pokemon-image"
      />
      
      <div class="pokemon-stats">
        <div class="stat-item" v-for="stat in store.pokemon.stats" :key="stat.stat.name">
          <span class="stat-name">{{ stat.stat.name }}: </span>
          <span class="stat-value">{{ stat.base_stat }}</span>
        </div>
      </div>
    </div>
    
    <div v-else class="error-message">Nenhum Pokémon encontrado.</div>
  </div>
</template>