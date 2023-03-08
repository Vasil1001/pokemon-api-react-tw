import React, { useEffect, useRef, useState } from "react"
import PokecardListItem from "../components/PokecardListItem"
import Searchbar from "../components/Searchbar"
import PokemonCard from "./SelectedPokemonCard"

export default function PokemonList() {
  const [pokemons, setPokemons] = useState([])
  const [selectedPokemon, setSelectedPokemon] = useState([])
  const [pokemonDetails, setPokemonDetails] = useState([])
  
  const [searchText, setSearchText] = useState("")
  
  const filterPokemons = pokemonDetails.filter(pokemon => {pokemon.name.toLowerCase().includes(searchText.toLowerCase())})
  const dataFetchedRef = useRef(false)

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
        setPokemonDetails((prev) => [...prev, data])
      })
    }
    fetchEachPokemonDetails(data.results)
  }

  useEffect(() => {
    if (dataFetchedRef.current) return
    dataFetchedRef.current = true
    getAllPokemons()
  }, [])

  return (
    <div className="mx-auto xl:w-7/12 lg:w-10/12 md:w-12/12"> 
      <Searchbar handleSearch={setSearchText} />
      <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-7 px-5 bg-slate-800">
      
      {/* {pokemonDetails.filter((pokemon) => {pokemon.name.toLowerCase().includes(searchText.toLowerCase())})} */}
      {pokemonDetails.filter().map((pokemon, index) => (
          <PokecardListItem pokemon={pokemon} key={index} id={pokemon.id} />
        ))}
      </div>
    </div>
  )
}
