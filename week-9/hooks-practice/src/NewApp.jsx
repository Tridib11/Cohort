import React, { useEffect, useState } from 'react'
import './App.css'
function NewApp() {
  const[render,setRender]=useState(true)

  useEffect(()=>{
    setInterval(()=>{
      setRender(render=>!render)
    },10000)
  },[])

  return (
    <div>
      {render? <MyComponent/>:<div></div>}
    </div>
  )
}



function MyComponent(){
  console.log("Compoenent Mounts")
  useEffect(()=>{
      return ()=>{
        console.log("Component Unmounts")
      }
  },[])
  return <div>
    From inside My compoennrt
  </div>
}

export default NewApp
