import React from "react"
import { Link } from "react-router-dom"

export default function PokecardListItem({ pokemon }) {
  const name = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)
  return (
    <div className="mx-auto flex flex-col min-w-full min-h-full gap-3 p-2 bg-slate-300 rounded-xl">
      
      <Link to={`/pokemons/${pokemon.name}/$`}>
        <p className="text-xl font-bold text-slate-700">
          {pokemon.id}. {name}
        </p>
      </Link>
      <img
        src={pokemon.sprites.other["official-artwork"].front_default}

        alt="front-cover"
      />
      <div className="flex gap-3">
                {pokemon.types
                  ? pokemon.types.map((type, index) => (
                      <div>
                        <p className=" px-2 py-1 font-bold  text-black rounded-lg bg-green-400">
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
