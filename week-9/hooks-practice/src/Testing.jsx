import React, { useEffect, useState } from 'react'
import './App.css'
function Testing() {
  return (
    <div>
      <MyComponent/>
    </div>
  )
}


function MyComponent(){
  const[count,setCount]=useState(0)
  useEffect(()=>{
    console.log("Component Mounted")

    return ()=>{
      console.log("Component unmounted")
    }

  },[count])

  return <div>
    <h1>{count}</h1>
    <button onClick={()=>{
      setCount(count=>count+1)
    }}>Increase</button>
  </div>
}

export default Testing
