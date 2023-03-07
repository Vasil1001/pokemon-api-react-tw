import { useState } from 'react'
import './App.css'
import PokemonList from './pages/PokemonList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Searchbar />

      <PokemonList />
    </div>
  )
}

export default App
