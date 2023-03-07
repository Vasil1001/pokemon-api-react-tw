import React from "react"
import { useNavigate } from "react-router-dom"
import { IoChevronBackOutline } from "react-icons/io5"

export default function SelectedPokemonCard() {
  const navigate = useNavigate()

  return (
    <div className="min-w-screen min-h-screen h-screen-vh mx-auto p-5">
      <span className="mb-3 pt-5 flex items-center " onClick={() => navigate(-1)}>
        <IoChevronBackOutline className="cursor-pointer" />
        <span className="cursor-pointer">&nbsp;&nbsp;</span>
        <p className="text-md cursor-pointer tracking-wide">Back to listings</p>
      </span>
      THIS IS A SELECTED POKEMON CARD
    </div>
  )
}
