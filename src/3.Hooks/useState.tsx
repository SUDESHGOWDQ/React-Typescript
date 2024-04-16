import React, { useState } from 'react'

const App = () => {
  const[name,setName] = useState<string>('')
  const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
    setName(e.target.value)
  }
  return (
    <div>
      <input type='text' onChange={handleChange}></input>
      <h1>My name is {name}</h1>
    </div>
  )
}

export default App
