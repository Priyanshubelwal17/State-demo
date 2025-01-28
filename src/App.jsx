import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter'
import Dumbo from './Dumbo'
import ScoreKeeper from './ScoreKeeper'
import EmojiClicker from './EmojiClicker'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <EmojiClicker />
      {/* <ScoreKeeper /> */}
      {/* <Dumbo />
      <h1>state Demo!</h1>
      <Counter /> */}
    </>
  )
}

export default App
