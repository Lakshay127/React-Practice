import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter, setCounter]  = useState(15)

  //let counter = 15

  const addValue = () => {
    // counter = counter + 1
    // setcounter(counter = counter + 1)
    setCounter(prevCounter => prevCounter + 1)    
    setCounter(prevCounter => prevCounter + 1 )
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
    
    // Made a arrow function, Took calls again and again by passing references, First the counter worked same steps so was called just once, now Refrence is passed. prevCounter name can be used any variable name. Takes previous state then update value. 
  }

  const removeValue = () => {
    setCounter(counter - 1)
  }
  
  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value: {counter}</h2>

      <button
      onClick={addValue}
      >Add value {counter}</button> 
      <br />
      <button
      onClick={removeValue}
      >remove value {counter}</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
