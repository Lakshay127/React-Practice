import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
function Github() {
  const[data, setData] = useState("")
  useEffect(() => {
    fetch('https://api.github.com/users/Lakshay127')
    .then(res => res.json())
    .then(data => setData(data))
  }, [])
  
  return (
    <div className='text-center m-6 bg-gray-600 text-white p-5 text-4xl'>Github Followers: {data.following}
      <img src={data.avatar_url} alt="Git Picture " />
    </div>
  )
}

export default Github