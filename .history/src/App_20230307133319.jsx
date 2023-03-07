import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Searchbar />

      <Pokecards-List
    </div>
  )
}

export default App
