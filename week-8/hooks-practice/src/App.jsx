import { useState } from 'react'
import './App.css'

function App() {
  return (
    <>
      <MyComponent/>
    </>
  )
}

function MyComponent(){
  const[count,setCount]=useState(0)
  return <div>
    <p>{count}</p>
    <button onClick={()=>{
      setCount(count=>count+1)
    }}> CLick me </button>
  </div>
}

export default App
