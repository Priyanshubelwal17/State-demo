import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter'
import Dumbo from './Dumbo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Dumbo />
      <h1>state Demo!</h1>
      <Counter />
    </>
  )
}

export default App
