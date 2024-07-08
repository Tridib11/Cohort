import React from 'react'

function App() {
  return (
    <div>

      <div className='flex justify-center'>
        <div className='bg-red-500'>Hi</div>
        <div className='bg-green-500'>Hi</div>
        <div className='bg-yellow-500'>Hi</div>
        <div className='bg-blue-500'>Hi</div>
          
      </div>
      <Grids/>
      
    </div>
  )
}

function Grids(){
  return <div className='grid grid-cols-3 mt-4'>
      <div className='bg-red-500'>Hi</div>
      <div className='bg-green-500'>Hi</div>
      <div className='bg-yellow-500'>Hi</div>
      <div className='bg-blue-500'>Hi</div>
    </div>
}
export default App
