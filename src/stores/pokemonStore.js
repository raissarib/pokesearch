import { defineStore } from 'pinia'
import { ref } from 'vue'

export const usePokemonStore = defineStore('pokemon', () => {
  const pokemon = ref(null)
  const isLoading = ref(false)

  async function fetchPokemon(name) {
    isLoading.value = true
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      if (!response.ok) throw new Error('Pokémon não encontrado')
      pokemon.value = await response.json()
    } catch (error) {
      console.error(error)
      pokemon.value = null
    } finally {
      isLoading.value = false
    }
  }

  return { pokemon, isLoading, fetchPokemon }
})