import React from "react"
import { Link } from "react-router-dom"

export default function PokecardListItem({ pokemon }) {
  const name = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)
  return (
    <div className="mx-auto flex flex-col min-w-full min-h-full m-2 gap-3 p-2 bg-slate-300 ">
      <Link to={`/pokemons/${pokemon.name}`}>
        <p className="text-xl font-bold text-slate-700">
          {pokemon.id}. {name}
        </p>
      </Link>
      <img
        src={pokemon.sprites.other["official-artwork"].front_default}

        alt="front-cover"
      />
      <div className="flex gap-3">
                {pokemons.types
                  ? pokemons.types.map((type, index) => (
                      <div>
                        <p className="p-3 font-bold  ring-2 ring-slate-700 shadow-lg rounded-lg bg-yellow-300">
                          {pokemon.types[index].type.name}
                        </p>
                      </div>
                    ))
                  : "Types not available"}
              </div>
      {/* <img src={pokemon.sprites.other.dream_world.front_default} alt={pokemon.name} /> */}
    </div>
  )
}
