import React from "react"

export default function PokecardListItem({ pokemon }) {
  return (
    <div className="flex flex-col w-20 h-20 gap-3 p-2 bg-slate-300 ">
        <p>{pokemon.name}</p>

    </div>
  )
}
