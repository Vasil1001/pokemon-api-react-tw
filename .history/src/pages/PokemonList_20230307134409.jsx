import React, { useEffect } from "react"
import PokecardListItem from "../components/PokecardListItem"
import PokemonCard from "./SelectedPokemonCard"

export default function PokemonList() {
    const 
    useEffect(() => {
      const fetchPokemonsList = async () => {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
        const data = await response.json()
        console.log(data)
      }
      fetchPokemonsList()
    }, [])
    
  return (
    <div className="p-3 bg-slate-800">
      <PokecardListItem />
    </div>
  )
}