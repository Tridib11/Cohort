import React, { useEffect, useState } from 'react'
import axios from 'axios'


function IdEndoint() { 
  return <div>
      <Todo id={3}/>
    </div>
  
}


function Todo({id}){
  const [todo,setTodos]=useState([])
  useEffect(()=>{
    axios.get("https://sum-server.100xdevs.com/todo?id="+id)
    .then(function(response){
      setTodos(response.data.todo)
    })
  },[])


  return <div>
    <h1>

    {todo.title}
    </h1>
    <h3>

      {todo.description}
    </h3>
  </div>
}


export default IdEndoint
