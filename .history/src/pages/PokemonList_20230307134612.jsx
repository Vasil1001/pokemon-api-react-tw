import React, { useEffect, useState } from "react"
import PokecardListItem from "../components/PokecardListItem"
import PokemonCard from "./SelectedPokemonCard"

export default function PokemonList() {
    const [pokemons, setPokemons] = useState([])
    
    useEffect(() => {
      const fetchPokemonsList = async () => {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
        const data = await response.json()
        
        setPokemons(data.results)
      }
      fetchPokemonsList()
      console.log(data.results)
    }, [])
    
  return (
    <div className="p-3 bg-slate-800">
      <PokecardListItem />
    </div>
  )
}
