import React, { useEffect, useState } from 'react'
import axios from "axios"

function Todos() {

  const[todos,setTodos]=useState([])

  useEffect(()=>{
    axios.get("https://sum-server.100xdevs.com/todos")
    .then((response)=>{
      setTodos(response.data.todos)
    })
  },[])


  
  return (
    <div>
      {todos.map(todo=><DisplayTodos title={todo.title} description={todo.description}/>)}
    </div>
  )
}

function DisplayTodos({title,description}){
  return <div>
    <h1>
      {title}
    </h1>

    <h3>
      {description}
    </h3>
  </div>
}

export default Todos
