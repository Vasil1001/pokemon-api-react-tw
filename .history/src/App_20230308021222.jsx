import { useEffect, useRef, useState } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import "./App.css"
import Searchbar from "./components/Searchbar"
import PokemonList from "./pages/PokemonList"
import SelectedPokemonCard from "./pages/SelectedPokemonCard"

function App() {
  const [pokemonDetails, setPokemonDetails] = useState([])
  const [pokemons, setPokemons] = useState([])
  const [searchText, setSearchText] = useState("")
  const dataFetchedRef = useRef(false)

  const getAllPokemons = async () => {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
    const data = await response.json()
    setPokemons(data.results)

    function fetchEachPokemonDetails(result) {
      result.forEach(async (pokemon) => {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
        )
        const data = await response.json()
        setPokemonDetails((prev) => [...prev, data])
      })
    }
    fetchEachPokemonDetails(data.results)
  }

  useEffect(() => {
    if (dataFetchedRef.current) return
    dataFetchedRef.current = true
    getAllPokemons()
  }, [])
  return (
    <div className="mx-auto bg-slate-800">
      <Router>
        <Routes>
          <Route
            path="/"
            element={<PokemonList pokemonDetails={pokemonDetails} />}
          />
          <Route
            path="/pokemons/:pokemonName"
            element={<SelectedPokemonCard />}
          />
        </Routes>
      </Router>
    </div>
  )
}

export default App
