import React from 'react'

export default function PokecardListItem({ pokemonData }) {
  return (
    <div className="p-3 bg-slate-300">
        {pokemonData.results && pokemonData.results.map((pokemon, index) => {}}
    </div>
  )
}
