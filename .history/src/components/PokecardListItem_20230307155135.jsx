import React from "react"
import { Link } from "react-router-dom"

export default function PokecardListItem({ pokemon }) {
  return (
    <div className="mx-auto flex flex-col min-w-full min-h-full  m-2 gap-3 p-2 bg-slate-300 ">
        <Link to={`/SelectedPokemonCard/${pokemon.id}`}>
        
        <p>{pokemon.id}. {pokemon.name}</p></Link>
        <img src={pokemon.sprites.front_default} alt="" />

        {/* <img src={pokemon.sprites.other.dream_world.front_default} alt={pokemon.name} /> */}
    </div>
  )
}
