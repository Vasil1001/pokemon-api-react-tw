import React from "react"
import { Link } from "react-router-dom"

export default function PokecardListItem({ pokemon }) {
  return (
    <div className="mx-auto flex flex-col min-w-full min-h-full m-2 gap-3 p-2 bg-slate-300 ">
      <Link to={`/pokemons/${pokemon.name}`}>
        <p className="text-xl font-bold text-slate-700">
          {pokemon.id}. {pokemon.name}
        </p>
      </Link>
      <img
        src={pokemon.sprites.other["official-artwork"].front_default}

        alt="front-cover"
      />

      {/* <img src={pokemon.sprites.other.dream_world.front_default} alt={pokemon.name} /> */}
    </div>
  )
}
