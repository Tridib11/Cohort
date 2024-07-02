import React, { useMemo, useState } from 'react'

function SumOneToN() {
  const[input,setInput]=useState(1);
  let count=useMemo(()=>{
    let finalCount=0;
    for(let i=1;i<=input;i++){
      finalCount+=i;
    }
    return finalCount;
  },[input])
  return (
    <div>
      <input onChange={(e)=>{
        setInput(e.target.value)
      }} type="text" placeholder='Enter the Value' />
      <br />

      Sum from 1 to {input} is {count}
    </div>
  )
}



export default SumOneToN
