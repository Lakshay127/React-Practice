import React from 'react';
import { useState } from 'react'

function App() {
  const [color, setColor] = useState("Olive")

  return (
    <>
      
      <div className="w-full h-screen duration-200" 
      style = {{backgroundColor : color}}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl '>
            <button onClick={() => setColor('Red')} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor : 'red'}}>
              Red
            </button>
            
            <button onClick={() => setColor('Green')} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor : 'Green'}}>
              Green
            </button>
            <button onClick={() => setColor('Blue')} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor : 'Blue'}}>
              Blue
            </button>
            <button onClick={() => setColor('Violet')} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor : 'Violet'}}>
              Violet
            </button>
            <button onClick={() => setColor('Black')} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor : 'Black'}}>
              Black
            </button>
            <button onClick={() => setColor('Gray')} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor : 'Gray'}}>
              Gray
            </button>
            <button onClick={() => setColor('Peachpuff')} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor : 'Peachpuff'}}>
              Peachpuff
            </button>
            <button onClick={() => setColor('Magenta')} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor : 'Magenta'}}>
              Magenta
            </button>
            <button onClick={() => setColor('Olive')} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor : 'Olive'}}>
              Olive
            </button>
          </div>
        </div>
      
      </div>
      
    </>
  )
}

export default App
