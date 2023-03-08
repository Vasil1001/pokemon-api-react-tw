import React, { useEffect, useRef, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { IoChevronBackOutline } from "react-icons/io5"

export default function SelectedPokemonCard() {
  const [selectedPokemon, setSelectedPokemon] = useState([])
  const [typeDetails, setTypeDetails] = useState([])
  const type = selectedPokemon.type.url.slice(0, -3)
  const dataFetchedRef = useRef(false)

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
    if (dataFetchedRef.current) return
    dataFetchedRef.current = true
    fetchSelectedPokemon()

    // const fetch_type_details = async () => {
    //   const response = await fetch(
    //     `${selectedPokemon.types[0].type.url}`

    //   )
    //   const data = await response.json()
    //   setTypeDetails(data)
    //   console.log(data)
    // }
    // fetch_type_details()

    async function fetch_type_details() {
      const response = await fetch(`https://pokeapi.co/api/v2/type/${type}`)
      const data = await response.json()
      setTypeDetails(data)
      console.log(data)
    }
    fetch_type_details()
  }, [params.pokemonName])

  return (
    <div className="min-w-screen min-h-screen h-screen-vh mx-auto p-5 lg:w-10/12 md:w-12/12 xl:w-6/12 sm:w-12/12 ">
      <div className="mb-10  flex items-center " onClick={() => navigate(-1)}>
        <IoChevronBackOutline className="cursor-pointer" />
        <span className="cursor-pointer">&nbsp;&nbsp;</span>
        <p className="text-md cursor-pointer tracking-wide ">
          Back to listings
        </p>
      </div>
      <span
        style={{ fontFamily: "Pokemon-Hollow" }}
        className="flex justify-between text-yellow-400 text-5xl  mb-4"
      >
        Pokemon
        <p className="text-5xl">#{selectedPokemon.id}</p>
      </span>
      {selectedPokemon.id && (
        <div key={selectedPokemon.id}>
          <p
            style={{ fontFamily: "Pokemon-Hollow" }}
            className=" text-8xl mb-14 text-red-400"
          >
            {selectedPokemon.name}
          </p>
          <div className="grid grid-cols-6 gap-3 text-slate-800">
            <div className="flex flex-col justify-between col-span-6 sm:col-span-6 md:col-span-2 lg:col-span-2 xl:col-span-2 px-7 py-3 bg-slate-300 rounded-lg">
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
                  src={
                    selectedPokemon.sprites.other["official-artwork"]
                      .front_default
                  }
                  className="w-full h-full "
                  alt="front-cover"
                />
              </div>
              <p className="font-bold text-xl"></p>
            </div>
            <div className="bg-slate-300 flex flex-col justify-between font-bold text-xl text-slate-800 gap-3 col-span-6 sm:col-span-6 md:col-span-4 lg:col-span-4 xl:col-span-4 px-7 py-3 rounded-lg">
              Stats
              <div className="flex text-base gap-2 justify-between items-center">
                <p className="text-base w-20">Hp</p>

                <progress
                  className="progress progress-info w-full h-6"
                  value={selectedPokemon.stats[0].base_stat}
                  max="154"
                ></progress>
                <p className="text-lg">{selectedPokemon.stats[0].base_stat}</p>
              </div>
              <div className="flex text-base gap-2 justify-evenly items-center">
                <p className="text-base w-20">Attack</p>
                <progress
                  className="progress progress-info   w-full h-6"
                  value={selectedPokemon.stats[1].base_stat}
                  max="154"
                ></progress>
                <p className="text-lg">{selectedPokemon.stats[1].base_stat}</p>
              </div>
              <div className="flex text-base gap-2 justify-evenly items-center">
                <p className="text-base w-20">Defense</p>
                <progress
                  className="progress progress-info  w-full h-6"
                  value={selectedPokemon.stats[2].base_stat}
                  max="154"
                ></progress>
                <p className="text-lg">{selectedPokemon.stats[2].base_stat}</p>
              </div>
              <div className="flex text-base gap-2 justify-between items-center">
                <p className="text-base w-20">Sp.Atk</p>
                <progress
                  className="progress progress-info  w-full h-6"
                  value={selectedPokemon.stats[3].base_stat}
                  max="154"
                ></progress>
                <p className="text-lg">{selectedPokemon.stats[3].base_stat}</p>
              </div>
              <div className="flex text-base gap-2 justify-between items-center">
                <p className="text-base w-20">Sp.Def</p>
                <progress
                  className="progress progress-info  w-full h-6"
                  value={selectedPokemon.stats[4].base_stat}
                  max="154"
                ></progress>
                <p className="text-lg">{selectedPokemon.stats[4].base_stat}</p>
              </div>
              <div className="flex text-base gap-2 justify-between items-center">
                <p className="text-base w-20">Speed</p>
                <progress
                  className="progress progress-info  w-full h-6"
                  value={selectedPokemon.stats[5].base_stat}
                  max="154"
                ></progress>
                <p className="text-lg">{selectedPokemon.stats[5].base_stat}</p>
              </div>
            </div>

            <div className="flex flex-col bg-slate-300 px-7 py-3 col-span-3 p-10 rounded-lg">
              <p className="font-bold text-xl mb-1">Type Details</p>

              <div className="flex gap-3">
                {selectedPokemon.types
                  ? selectedPokemon.types.map((type, index) => (
                      <div>
                        <p className="p-1 px-3 font-bold  ring-2 ring-slate-700 shadow-lg rounded-lg bg-yellow-300">
                          {selectedPokemon.types[index].type.name}
                        </p>
                      </div>
                    ))
                  : "Types not available"}
              </div>

              <p className="font-bold mb-1 mt-5">Double Damage to </p>
              <div className="flex flex-wrap gap-3">
                {typeDetails.damage_relations
                  ? typeDetails.damage_relations.double_damage_to.map(
                      (type, index) => (
                        <div>
                          <p className="p-1 px-2 font-bold  ring-2 ring-slate-700 shadow-lg rounded-lg bg-green-400">
                            {type.name}
                          </p>
                        </div>
                      )
                    )
                  : "Types not available"}
              </div>

              

              <p className="font-bold mb-1 mt-5">Weaknesses (Half Damage)</p>
              <div className="flex flex-wrap gap-3">
                {typeDetails.damage_relations
                  ? typeDetails.damage_relations.half_damage_to.map(
                      (type, index) => (
                        <div>
                          <p className="p-1 px-2 font-bold  ring-2 ring-slate-700 shadow-lg rounded-lg bg-red-400">
                            {type.name}
                          </p>
                        </div>
                      )
                    )
                  : "Types not available"}
              </div>

              <p className="font-bold mb-1 mt-5">Counters - No damage to </p>
              <div className="flex flex-wrap gap-3">
                {typeDetails.damage_relations
                  ? typeDetails.damage_relations.no_damage_to.map(
                      (type, index) => (
                        <div>
                          <p className="p-1 px-2 font-bold  ring-2 ring-slate-700 shadow-lg rounded-lg bg-gray-400">
                            {type.name}
                          </p>
                        </div>
                      )
                    )
                  : "Types not available"}
              </div>
            </div>

            
            <div className="flex flex-col overflow-x-auto bg-slate-300 px-7 py-3 col-span-3 p-10 rounded-lg">
              <p className="font-bold text-xl">Images</p>

              <div className="flex">
                <div className="flex-shrink-0">
                  <img
                    src={
                      selectedPokemon.sprites.other.dream_world.front_default
                    }
                    className="w-full h-full"
                    alt="front-cover"
                  />
                </div>

                <div className="flex-shrink-0">
                  <img
                    src={selectedPokemon.sprites.other.home.front_default}
                    className="w-56 h-56 "
                    alt="front-cover"
                  />
                </div>
                <div className="flex-shrink-0">
                  <img
                    src={selectedPokemon.sprites.other.home.front_shiny}
                    className="w-56 h-56 "
                    alt="front-cover"
                  />
                </div>
                <div className="flex-shrink-0">
                  <img
                    src={selectedPokemon.sprites.front_default}
                    className="w-56 h-56 "
                    alt="front-cover"
                  />
                </div>
                <div className="flex-shrink-0">
                  <img
                    src={selectedPokemon.sprites.back_default}
                    className="w-56 h-56 "
                    alt="front-cover"
                  />
                </div>
                <div className="flex-shrink-0">
                  <img
                    src={
                      selectedPokemon.sprites.other["official-artwork"]
                        .front_default
                    }
                    className="w-56 h-56 "
                    alt="front-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
