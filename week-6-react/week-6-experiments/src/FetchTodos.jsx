import React, { useEffect, useState } from 'react'

function FetchTodos() {
  const [todos,setTodos]=useState([])
  useEffect(()=>{
    fetch("https://sum-server.100xdevs.com/todos")
    .then(async function(res){
      const json=await res.json()
      setTodos(json.todos);
    })
  },[])
  return (
    <div>
      {todos.map(todo=><Todos key={todo.id} title={todo.title}  description={todo.description}/>)}
    </div>
  )
}


function Todos({title,description}){
  return <div>
    <h1>{title}</h1><br />
    <h3>{description}</h3>
  </div>
}

export default FetchTodos
