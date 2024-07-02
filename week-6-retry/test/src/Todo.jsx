import React, { useState } from 'react'

function Todo() {

  const[todo,setTodo]=useState([

    {
      id:1,
      title:"Gym",
      description:"Go to gym 8-9"
    },
    {
      id:2,
      title:"DSA",
      description:"Study DSA"
    },
    {
      id:3,
      title:"eat",
      description:"Eat food"
    }
  ]
  )
  return (
    <div>
      {todo.map(todos=><DisplayTodo title={todos.title} description={todos.description}/>)}
    </div>
  )
}


function DisplayTodo({title,description}){
  return <div>
    <h1>
      {title}
    </h1>

    <h2>
      {description}
    </h2>
  </div>
}

export default Todo
