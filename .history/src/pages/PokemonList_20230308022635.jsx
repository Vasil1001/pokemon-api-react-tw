import React, { useEffect, useRef, useState } from "react"
import PokecardListItem from "../components/PokecardListItem"
import Searchbar from "../components/Searchbar"
import PokemonCard from "./SelectedPokemonCard"

export default function PokemonList({pokemonDetails}) {
  const [selectedPokemon, setSelectedPokemon] = useState([])
  

  return (
    <div className="mx-auto xl:w-7/12 lg:w-10/12 md:w-12/12"> 
      <Searchbar handleSearch={setSearchText} />
      <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-7 px-5 bg-slate-800">
      
      {/* {pokemonDetails.filter((pokemon) => {pokemon.name.toLowerCase().includes(searchText.toLowerCase())})} */}
      {pokemonDetails.map((pokemon, index) => (
          <PokecardListItem pokemon={pokemon} key={index} id={pokemon.id} />
        ))}
      </div>
    </div>
  )
}
