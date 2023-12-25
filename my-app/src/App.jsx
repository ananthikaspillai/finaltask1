import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


import BubbleSortComponent from './components/BubbleSortComponent'
import VisualizerComponent from '../src/components/VisualizerComponent'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BubbleSortComponent/>
    <VisualizerComponent/>
    </>
  )
}

export default App
