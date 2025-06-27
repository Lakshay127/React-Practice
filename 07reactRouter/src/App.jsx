// No use of App.jsx file in this project
// can be deleted even


import { useState } from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-600 p-4 text-center m-2'>React Router</h1>
    </>
  )
}

export default App
