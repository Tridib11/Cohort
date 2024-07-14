import { useState } from 'react'
import './App.css'

function App() {
  return (
    <>
     <MyConponent/>
    </>
  )
}



function MyConponent(){
  const[count,setCount]=useState(0);
  return <div>
    <h1>{count}</h1>
    <button onClick={()=>{
      setCount(count=>count+1)
    }}>Click me</button>
  </div>
}

export default App
