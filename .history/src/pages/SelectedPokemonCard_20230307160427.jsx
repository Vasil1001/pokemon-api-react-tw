import React from "react"
import { useNavigate, useParams } from "react-router-dom"
import { IoChevronBackOutline } from "react-icons/io5"

export default function SelectedPokemonCard() {
  const navigate = useNavigate()
  const params = useParams()

  useEffect(() => {
    const fetchSelectedPokemon = async () => {
      const docRef = doc(db, "listings", params.listingId)
      const docSnap = await getDoc(docRef)

      if (docSnap.exists()) {
        setListing(docSnap.data())
        setLoading(false)
      } else {
        console.log("No such document")
      }
    }

    fetchListing()
  }, [params.listingId])

  return (
    <div className="min-w-screen min-h-screen h-screen-vh mx-auto p-5 text-gray-100">
      <span className="mb-3  flex items-center " onClick={() => navigate(-1)}>
        <IoChevronBackOutline className="cursor-pointer" />
        <span className="cursor-pointer">&nbsp;&nbsp;</span>
        <p className="text-md cursor-pointer tracking-wide">Back to listings</p>
      </span>
      THIS IS A SELECTED POKEMON CARD
      <p></p>
    </div>
  )
}
