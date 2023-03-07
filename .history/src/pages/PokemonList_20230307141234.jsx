import React, { useEffect, useState } from "react"
import PokecardListItem from "../components/PokecardListItem"
import PokemonCard from "./SelectedPokemonCard"

export default function PokemonList() {
    const [pokemons, setPokemons] = useState([])
    
    useEffect(() => {
      const fetchPokemonsList = async () => {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
        const data = await response.json()
        console.log(data.results)
        setPokemons(data.results)
      }
      fetchPokemonsList()
    }, [])
    
  return (
    <div className="mx-auto lg:w-10/12 md:w-12/12 grid grid-cols-2 md:grid-cols-3 grid-cols-2 gap-7 p-5 bg-slate-800">
      {pokemons.map((pokemon) => (
        <PokecardListItem pokemon={pokemon}/>
      ))}
      
    </div>
  )
}
