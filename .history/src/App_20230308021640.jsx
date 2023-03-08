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
    <div className="min-w-screen min-h-screen h-screen-vh mx-auto bg-slate-800 ">
    <div className="xl:w-7/12 lg:w-10/12 md:w-12/12"></div>
    <Searchbar handleSearch={setSearchText} />
      <Router>
        <Routes>
          <Route
            path="/"
            element={<PokemonList pokemonDetails={pokemonDetails.filter((pokemon) => pokemon.name.toLowerCase().includes(searchText.toLowerCase()))} p/>}
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
