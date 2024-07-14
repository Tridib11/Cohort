import React, { useEffect } from 'react'

function NewApp() {
  return (
    <div>
      <MyComponent/>
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
