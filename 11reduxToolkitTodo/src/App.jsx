import { useState } from 'react'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'
function App() {

  return (
    <>
        <h1>Learn About Redux Toolkit</h1>
        <AddTodo />
        <Todos />
    </>
  )
}

export default App
