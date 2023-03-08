import React from "react"

export default function Searchbar() {
  return (
    <div className="p-5 bg-slate-800 text-yellow-400">
      <p className="font-bold text-2xl mb-5">Pokedex React</p>
      <input
        type="text"
        className="border-2 w-1/2 border-slate-500  bg-slate-700 rounded-lg p-2"
        placeholder="Search for a pokemon..."
      />
    </div>
  )
}
