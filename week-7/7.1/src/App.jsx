import React from 'react'
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
import  Dashboard  from './components/Dashboard'
import  Landing  from './components/Landing'

function App() {

  return (
    <div>
    <BrowserRouter>
    <Navigatior/>
      <Routes>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/' element={<Landing/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  )
}

function Navigatior(){
  const navigate=useNavigate()
  return <div>

        <button onClick={()=>{
          navigate("/")
        }}>Landing Page</button>
        <button onClick={()=>{
          navigate('/dashboard')
        }}>Dashboard</button>
  
  </div>
}

export default App
