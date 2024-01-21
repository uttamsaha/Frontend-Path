import { useState } from 'react'
import './App.css'

import UseStateExample from './assets/Pages/UseStateExample'
import Form from './assets/Pages/Form';

function App() {
  const [counter, setCounter] = useState(0);
  return (
    <>
      <UseStateExample counter={counter} setCounter={setCounter}/>
      <Form/>
    </>
  )
}

export default App
