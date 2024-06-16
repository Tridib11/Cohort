import './App.css'
import {useState} from 'react'
function App() {
  const [count,setCount]=useState(0);
  return (
    <>
        <button onClick={()=>{
            setCount(count+1)
        }}>CLick me {count} </button>
    </>
  )
}

export default App
mongodb+srv://admin:admin@cluster0.pcgvjbl.mongodb.net/