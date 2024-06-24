import React from 'react'
import { useMemo } from 'react'
import { useState } from 'react'

function App() {
  const[number,setNumber]=useState(0)

  const factorial=useMemo(()=>{
    let value=1;
    for(let i=1;i<=number;i++){
      value*=i;
    }
    return value;
  },[number])

  return (
    <div>
      <input onChange={(e)=>{
        setNumber(Number(e.target.value))
      }} type="number"/>
      <br />

      Factorial of {number} is {factorial}

    </div>
  )
}

export default App
