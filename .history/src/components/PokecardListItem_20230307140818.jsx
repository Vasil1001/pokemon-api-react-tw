import React from "react"

export default function PokecardListItem({ pokemon }) {
  return (
    <div className="mx-auto flex flex-col w-52 h-52  gap-3 p-2 bg-slate-300 ">
        <p>{pokemon.name}</p>

    </div>
  )
}
