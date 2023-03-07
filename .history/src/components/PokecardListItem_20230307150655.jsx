import React from "react"

export default function PokecardListItem({ pokemon }) {
  return (
    <div className="mx-auto flex flex-col min-w-full min-h-full  m-2 gap-3 p-2 bg-slate-300 ">
        <p>{pokemon.name}</p>
        <img src=""https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/147.png"" alt="" />
    </div>
  )
}