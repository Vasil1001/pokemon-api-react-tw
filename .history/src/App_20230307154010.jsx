import { useState } from "react"
import { Route, Router, Routes } from "react-router-dom"
import "./App.css"
import Searchbar from "./components/Searchbar"
import PokemonList from "./pages/PokemonList"
import PokemonCard from "./pages/SelectedPokemonCard"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="mx-auto bg-slate-800">
      <Router>
        <Searchbar />
        <Routes>
          <Route path="/" element={<PokemonCard />} />
          <Route path="/asd" element={<PokemonCard />} />
        </Routes>
        <PokemonList />
      </Router>
    </div>
  )
}

export default App
