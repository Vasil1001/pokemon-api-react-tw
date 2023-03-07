import React, { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { IoChevronBackOutline } from "react-icons/io5"

export default function SelectedPokemonCard() {
  const [selectedPokemon, setSelectedPokemon] = useState([])

  const navigate = useNavigate()
  const params = useParams()

  useEffect(() => {
    const fetchSelectedPokemon = async () => {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${params.pokemonName}`
      )
      const data = await response.json()
      setSelectedPokemon(data)
      console.log(data)
    }

    fetchSelectedPokemon()
  }, [params.pokemonName])

  return (
    <div className="min-w-screen min-h-screen h-screen-vh mx-auto p-5 text-gray-100">
      <span className="mb-3  flex items-center " onClick={() => navigate(-1)}>
        <IoChevronBackOutline className="cursor-pointer" />
        <span className="cursor-pointer">&nbsp;&nbsp;</span>
        <p className="text-md cursor-pointer tracking-wide">Back to listings</p>
      </span>
      <p className="text-5xl mb-5">Pokemon</p>
      <p className="text-8xl mb-5">{pokemon.name}</p>
      <div className="grid grid-cols-6 gap-7">
        <div className="flex col-span-2 p-10 bg-green-500 rounded-lg">a</div>
        <div className="flex col-span-4 p-10 bg-green-400 rounded-lg">a</div>

        <div className="flex col-span-3 p-10 bg-green-500 rounded-lg">a</div>
        <div className="flex col-span-3 p-10 bg-green-400 rounded-lg">a</div>
      </div>
      THIS IS A SELECTED POKEMON CARD
      <p>{selectedPokemon.name}</p>
    </div>
  )
}
