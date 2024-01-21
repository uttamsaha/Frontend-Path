import { useState } from 'react'
import './App.css'
import UseStateExample from './assets/Pages/UseStateExample'

function App() {
  const [counter, setCounter] = useState(0);
  return (
    <>
      <UseStateExample counter={counter} setCounter={setCounter}/>
    </>
  )
}

export default App
