import React, { useEffect, useState } from "react"
import PokecardListItem from "../components/PokecardListItem"
import PokemonCard from "./SelectedPokemonCard"

export default function PokemonList() {
  const [pokemons, setPokemons] = useState([])
  const [selectedPokemon, setSelectedPokemon] = useState([])
  const [pokemonDetails, setPokemonDetails] = useState([])

  const getAllPokemons = async () => {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
    const data = await response.json()
    setPokemons(data.results)

    function fetchEachPokemonDetails(result) {
        result.forEach(async (pokemon) => {
          const response = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
          )
          const data = await response.json()
          setPokemonDetails(prev => [...prev, data])
        })
      }
      fetchEachPokemonDetails(data.results)
  }

  useEffect(() => {
    
    getAllPokemons()
  }, [])

  return (
    <div className="mx-auto lg:w-10/12 md:w-12/12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-7 p-5 bg-slate-800">
      {pokemonDetails.map((pokemon, index) => (
        <PokecardListItem pokemon={pokemon} />
      ))}
    </div>
  )
}
