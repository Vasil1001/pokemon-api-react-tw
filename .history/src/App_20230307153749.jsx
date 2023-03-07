import { useState } from "react"
import { Route, Router, Routes } from "react-router-dom"
import "./App.css"
import Searchbar from "./components/Searchbar"
import PokemonList from "./pages/PokemonList"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="mx-auto bg-slate-800">
      <Router>
        <Searchbar />
        <Routes>
          <Route path="/" element={<Explore />} />
        </Routes>
        <PokemonList />
      </Router>
    </div>
  )
}

export default App
