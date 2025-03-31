# PokeSearch

Uma aplicação de Pokédex construída com Vue 3 e Pinia, para aplicar a arquitetura FLUX.

## 🎮 Visão Geral

Esta aplicação permite aos usuários pesquisar Pokémon pelo nome, exibindo seus sprites e estatísticas básicas. A interface foi projetada para oferecer uma experiência visual nostálgica.

## 🚀 Tecnologias

- **Vue 3**: Framework JavaScript
- **Pinia**: Gerenciamento de estado para Vue
- **PokeAPI**: API pública para dados de Pokémon

## 📋 Recursos

- Busca de Pokémon por nome
- Exibição de sprite do Pokémon
- Visualização de estatísticas básicas
- Interface responsiva

## 🛠️ Instalação

```bash
# Clonar o repositório
git clone https://github.com/seu-usuario/pokedex-vue.git
cd pokedex-vue

# Instalar dependências
npm install

# Executar servidor de desenvolvimento
npm run serve
```

## ⚙️ Estrutura do Projeto

```
src/
├── assets/
│   └── main.css           # Arquivo CSS principal com estilo anime
├── components/
│   └── PokemonSearch.vue  # Componente de busca de Pokémon
├── stores/
│   └── pokemonStore.js    # Store Pinia para gerenciamento de estado
├── App.vue                # Componente raiz
└── main.js               # Ponto de entrada da aplicação
```

## 🔍 Como Usar

1. Digite o nome de um Pokémon no campo de busca
2. Clique no botão "Buscar"
3. Veja as informações e o sprite do Pokémon

## 🙏 Créditos

- [PokeAPI](https://pokeapi.co/) por fornecer dados de Pokémon
- [Google Fonts](https://fonts.google.com/) pela fonte Press Start 2P
