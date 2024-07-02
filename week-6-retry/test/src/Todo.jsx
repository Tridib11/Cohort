import React, { memo, useState } from 'react'

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
      <button onClick={()=>{
        setTodo([...todo,{
          id:todo.length+1,
          title:"Random Title",
          description:"Random description"
        }])
      }}>Add Todo</button>
      {todo.map(todos=><DisplayTodo key={todos.id} title={todos.title} description={todos.description}/>)}
    </div>
  )
}


const DisplayTodo=memo(({title,description})=>{
  return <div>
    <h1>
      {title}
    </h1>

    <h2>
      {description}
    </h2>
  </div>
})
  


export default Todo
