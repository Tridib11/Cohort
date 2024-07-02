import React, { memo, useCallback, useState } from 'react'


/*
Used to memoise functions across rerenders
*/
function Callback() {
  const[count,setCount]=useState(0);

  const Help=useCallback(()=>{
    console.log("HI")
  },[])
  return (
    <div>
      <ButtonComponent inputFunction={Help} />
      <button onClick={()=>{
        setCount(count+1)
      }}>Click me {count}</button>
    </div>
  )
}


const ButtonComponent=memo(({inputFunction})=>{
  console.log("rendered")
})

export default Callback
