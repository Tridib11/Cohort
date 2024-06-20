import React, { useState } from 'react'

function Todo() {
  const [todo,setTodo]=useState([
    {
      id:1,
      title:"Gym",
      description:"Go to the gym"
    },
    {
      id:2,
      title:"DSA",
      description:"Do dsa"
    },
    {
      id:3,
      title:"Eat food",
      description:"Eat food from 7-8"
    }
  ])
  return (
    <div>
      {todo.map(todo => <TodoComponent key={todo.id} title={todo.title} description={todo.description}/> )}
    </div>
  )
}


function TodoComponent({title,description}){
    return <>
      <h1>
        {title}
      </h1>
      <h4>
        {description}
      </h4>
    </>
}

export default Todo
