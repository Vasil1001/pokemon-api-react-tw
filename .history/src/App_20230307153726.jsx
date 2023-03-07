import { useState } from 'react'
import './App.css'
import Searchbar from './components/Searchbar'
import PokemonList from './pages/PokemonList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="mx-auto bg-slate-800">
     <Router>
     <Routes>
              <Route path="/" element={<Explore />} />
      <Searchbar />

      <PokemonList />
      </Router>
    </div>
  )
}

export default App
