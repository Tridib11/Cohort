import React, { useState } from 'react'


function Test() {
  const [title,setTitle]=useState("Rohan")
  return (
    <div>
      <button onClick={()=>{
        setTitle(Math.random())
      }}>Click me to change the header</button>
      <Header title={title}/>
      <Header title="Ram"/>
      <Header title="Ram"/>
      <Header title="Ram"/>
      <Header title="Ram"/>
    </div>
  )
}
const  Header=React.memo(({title})=>{
  return <div>
    My name is {title}
  </div>
});

export default Test
