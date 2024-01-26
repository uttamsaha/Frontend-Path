import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UseRefExample from './Pages/UseRefExample'
import UseRefForm from './Pages/UseRefForm'
import ExampleForwardRef from './Pages/ExampleForwardRef'
import { TThemeContext, ThemeContext } from './context/ThemeProvider'
import { MenuItem, MenuList } from './components/Menu'

function App() {
  const {dark, setDark}= useContext(ThemeContext) as TThemeContext
  console.log(dark)

  return (
    <>
      <main>
        {/* <UseRefExample/> */}
        {/* <UseRefForm/> */}
        {/* <ExampleForwardRef/> */}
        <button onClick={() => setDark(!dark)}>Click</button>
        <MenuList>
          <MenuItem/>
        </MenuList>
      </main>
    </>
  )
}

export default App
