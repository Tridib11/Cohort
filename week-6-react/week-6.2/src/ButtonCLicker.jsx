import React, { useEffect, useState } from 'react'
import axios from 'axios'
function ButtonCLicker() {
  const[id,setId]=useState(1)
  return (
    <div>
      <button onClick={()=>{
        setId(1)
      }} >1</button>
      <button onClick={()=>{
        setId(2)
      }} >2</button>
      <button onClick={()=>{
        setId(3)
      }} >3</button>
      <button onClick={()=>{
        setId(4)
      }} >4</button>
      <Todo id={id}/>
    </div>
  )
}



function Todo({id}){
  const[todos,setTodos]=useState([])
  useEffect(()=>{
    axios.get("https://sum-server.100xdevs.com/todo?id="+id)
    .then((response)=>{
      setTodos(response.data.todo)
    })
  },[id])


  return <div>
    <h1>{todos.title}</h1> <br />
    <h3>{todos.description}</h3>
  </div>
}

export default ButtonCLicker
