import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Dashboard } from './components/Dashboard'
import { Landing } from './components/Landing'

function App() {
  return (
    <div>
      <div style={{background:"black",color:"white"}}>
        This is a top bar

      </div>
    <BrowserRouter>
      <Routes>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/' element={<Landing/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
