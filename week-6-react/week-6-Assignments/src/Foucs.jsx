import React, { useEffect, useRef } from 'react'

function Foucs() {
  const inputRef=useRef()


  useEffect(()=>{
    inputRef.current.focus()
  },[])
  function handleButtonCLick(){
    inputRef.current.focus()
  }
  return (
    <div>
      <input ref={inputRef} type="text" placeholder='Enter text here'/>
      <button onClick={handleButtonCLick}>Click to focus</button>
    </div>
  )
}

export default Foucs
