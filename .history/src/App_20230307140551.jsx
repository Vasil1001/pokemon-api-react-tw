import { useState } from 'react'
import './App.css'
import Searchbar from './components/Searchbar'
import PokemonList from './pages/PokemonList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="p-10">
      <Searchbar />

      <PokemonList />
    </div>
  )
}

export default App
