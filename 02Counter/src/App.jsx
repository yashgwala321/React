import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {

  let [counter , setCounter] = useState(0)

  // let counter = 1;

  const addvalue = () => {
    if(counter < 12){
      setCounter(counter + 1)
    }
  }

  const removevalue = () => {
    if(counter > 0){
      setCounter(counter - 1)
    }

  }
  return (
    <>
      <h1>Yash | Gwala</h1>
      <h2>Counter Value: {counter}</h2>

      <button onClick={addvalue}>Add Value</button><br/>
      <button onClick={removevalue}>Remove Value</button>
    </>
  )
}

export default App
