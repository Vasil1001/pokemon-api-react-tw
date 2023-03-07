import { useState } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import "./App.css"
import Searchbar from "./components/Searchbar"
import PokemonList from "./pages/PokemonList"
import SelectedPokemonCard from "./pages/SelectedPokemonCard"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="mx-auto bg-slate-800">
      <Router>
        <Searchbar />
        <Routes>
          <Route path="/pokemon/:pokemonId" element={<SelectedPokemonCard />} />
        </Routes>
        <PokemonList />
      </Router>
    </div>
  )
}

export default App
