import { useState } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import "./App.css"
import Searchbar from "./components/Searchbar"
import PokemonList from "./pages/PokemonList"
import SelectedPokemonCard from "./pages/SelectedPokemonCard"

function App() {
  return (
    <div className="mx-auto bg-slate-800">
      <Router>
        <Searchbar />
        <Routes>
          <Route path="/pokemons/:pokemonId" element={<SelectedPokemonCard />} />

          <Route path="/pokemon/:pokemonId" element={<SelectedPokemonCard />} />
        </Routes>
        <PokemonList />
      </Router>
    </div>
  )
}

export default App
