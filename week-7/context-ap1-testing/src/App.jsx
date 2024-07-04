import React, { useContext, useState } from 'react'
import { CountContext } from './context'

function App() {
  const[count,setCount]=useState(0)
  return (
    <div>
      <CountContext.Provider value={count}>
        <CountRender setCount={setCount}/>
      </CountContext.Provider>
    </div>
  )
}

function CountRender({setCount}){
  const count=useContext(CountContext)
  return <div>
    {count} <br />
    <button onClick={()=>{
      setCount(count+1)
    }}>Click me</button>
  </div>
}

export default App
