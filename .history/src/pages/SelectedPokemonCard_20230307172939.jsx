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
    <div className="min-w-screen min-h-screen h-screen-vh mx-auto p-5 lg:w-10/12 md:w-12/12 xl:w-8/12 sm:w-12/12 ">
      <div className="mb-10  flex items-center " onClick={() => navigate(-1)}>
        <IoChevronBackOutline className="cursor-pointer" />
        <span className="cursor-pointer">&nbsp;&nbsp;</span>
        <p className="text-md cursor-pointer tracking-wide ">
          Back to listings
        </p>
      </div>
      <span
        style={{ fontFamily: "Pokemon-Hollow" }}
        className="text-yellow-400 text-5xl  mb-4"
      >
        Pokemon
      </span>
      {selectedPokemon.id && (
        <div>
          <p
            style={{ fontFamily: "Pokemon-Hollow" }}
            className=" text-8xl mb-20"
          >
            {selectedPokemon.name}
          </p>
          <div className="grid grid-cols-6 gap-6 text-slate-800">
            <div className="flex flex-col col-span-6 sm:col-span-6 md:col-span-2 lg:col-span-2 xl:col-span-2 px-7 py-3 bg-slate-300 rounded-lg">
              {/* <img src={selectedPokemon.sprites.front_default} alt="" /> */}
              <div className="flex justify-between mb-5">
                <p className="font-bold text-xl">
                  {selectedPokemon.name.toUpperCase().slice(0, 1)}
                  {selectedPokemon.name.toLowerCase().slice(1)}
                </p>
                <p className="font-bold text-xl">#{selectedPokemon.id}</p>
              </div>
              <div>
                <img
                  src={selectedPokemon.sprites.other.dream_world.front_default}
                  className="w-full h-full"
                  alt="front-cover"
                />
              </div>
            </div>
            <div className="flex flex-col font-bold text-xl text-slate-800 gap-4 col-span-6 sm:col-span-6 md:col-span-4 lg:col-span-4 xl:col-span-4 px-7 py-3 bg-green-400 rounded-lg">
              Stats
              <div className="flex text-base gap-2 justify-between">
                <p className="text-base">Hp</p>
                <progress
                  className="progress progress-warning w-full h-6"
                  value="0"
                  max="100"
                ></progress>
                <p className="text-lg">60</p>
              </div>
              <div className="flex text-base gap-2 justify-between">
                <p className="text-base">Attack</p>
                <progress
                  className="progress progress-warning w-full h-6"
                  value="0"
                  max="100"
                ></progress>
                <p className="text-lg">60</p>
              </div>
              <div className="flex text-base gap-2 justify-between">
                <p className="text-base">Defence</p>
                <progress
                  className="progress progress-warning w-full h-6"
                  value="0"
                  max="100"
                ></progress>
                <p className="text-lg">60</p>
              </div>
              <div className="flex text-base gap-2 justify-between">
                <p className="text-base">Sp.Atk</p>
                <progress
                  className="progress progress-warning w-full h-6"
                  value="0"
                  max="100"
                ></progress>
                <p className="text-lg">60</p>
              </div>
              <div className="flex text-base gap-2 justify-between">
                <p className="text-base">Sp.Def</p>
                <progress
                  className="progress progress-warning w-full h-6"
                  value="0"
                  max="100"
                ></progress>
                <p className="text-lg">60</p>
              </div>
              <div className="flex text-base gap-2 justify-between">
                <p className="text-base">Speed</p>
                <progress
                  className="progress progress-warning w-full h-6"
                  value="0"
                  max="100"
                ></progress>
                <p className="text-lg">60</p>
              </div>
            </div>

            <div className="flex col-span-3 p-10 bg-green-500 rounded-lg">
              a
            </div>
            <div className="flex col-span-3 p-10 bg-green-400 rounded-lg">
              a
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
