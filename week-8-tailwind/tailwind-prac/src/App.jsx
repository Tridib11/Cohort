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
      <GridsSpan/>
      <FlexSpan/>
      <Responsive/>
      <ResponsiveColor/>
      <ResponsiveColorDivs/>
    </div>
  )
}

function Grids(){
  return <div className='grid grid-cols-2 mt-4'>
      <div className='bg-red-500'>Hi</div>
      <div className='bg-green-500'>Hi</div>
      <div className='bg-yellow-500'>Hi</div>
      <div className='bg-blue-500'>Hi</div>
    </div>
}

function GridsSpan(){
  return <div className='grid grid-cols-10 mt-4'>
      <div className='bg-red-500 col-span-4'>Hi</div>
      <div className='bg-green-500 col-span-4'>Hi</div>
      <div className='bg-yellow-500 col-span-2'>Hi</div>
      
    </div>
}
function FlexSpan(){
  return <div className='flex mt-4'>
      <div className='bg-red-500 w-[40%]'>Hi</div>
      <div className='bg-green-500 w-[40%]'>Hi</div>
      <div className='bg-yellow-500 w-[20%]'>Hi</div>
      
    </div>
}

function Responsive(){
  return <div>
    <div className='text-center sm:text-left bg-red-500 mt-1'>Experiment</div>
  </div>
}
function ResponsiveColor(){
  return <div>
    <div className='text-center bg-red-500 sm:bg-yellow-300 md:bg-green-500 mt-1'>Experiment</div>
  </div>
}
function ResponsiveColorDivs(){
  return <div className='mt-2 grid grid-cols-1 md:grid-cols-3'>
    <div className='bg-red-500'>hi</div>
    <div className='bg-green-500'>Hi</div>
    <div className='bg-blue-700'>hi</div>
  </div>
}
export default App
