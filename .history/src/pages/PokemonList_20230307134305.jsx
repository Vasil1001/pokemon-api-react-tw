import React, { useEffect } from "react"
import PokecardListItem from "../components/PokecardListItem"
import PokemonCard from "./SelectedPokemonCard"

export default function PokemonList() {
    useEffect(() => {
      const fetchPokemonsList
    }, [])
    
  return (
    <div className="p-3 bg-slate-800">
      <PokecardListItem />
    </div>
  )
}
