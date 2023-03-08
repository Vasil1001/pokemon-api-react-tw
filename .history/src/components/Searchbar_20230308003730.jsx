import React from 'react'

export default function Searchbar() {
  return (
    <div className="p-3 bg-slate-800 text-yellow-400">
    <p >Pokedex React</p>
    <input type="text" className="border-2 w-1/2 border-slate-500 rounded-lg p-2" placeholder='Search for a pokemon...'/>
    </div>
  )
}
