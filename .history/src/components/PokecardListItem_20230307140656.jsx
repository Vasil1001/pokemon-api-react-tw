import React from "react"

export default function PokecardListItem({ pokemon }) {
  return (
    <div className="flex flex-col gap-3 p-1 bg-slate-300 ">
        <p>{pokemon.name}</p>

    </div>
  )
}
