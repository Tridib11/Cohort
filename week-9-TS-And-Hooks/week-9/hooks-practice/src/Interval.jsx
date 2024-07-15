import React, { useEffect,useState } from 'react'
import './App.css'
function useInterval(fn,timeout){
  useEffect(()=>{
    const value=setInterval(()=>{
      fn()
    },timeout)

    return ()=>{
      clearInterval(value)
    }

  },[fn,timeout])

  
}


function Interval() {

  const[count,setCount]=useState(0)

  useInterval(()=>{
    setCount(count=>count+1)
  },2000)
  return (
    <div>
      <h1>count is {count}</h1>
    </div>
  )
}



export default Interval
