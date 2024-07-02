import React, { useEffect, useState } from 'react'
import axios from 'axios'

function TodoID() {
  const [todo, setTodo] = useState({})
  const [todoID, setTodoID] = useState(0)

  useEffect(() => {
      axios.get(`https://sum-server.100xdevs.com/todo?id=${todoID}`)
        .then((response) => {
          setTodo(response.data.todo)
        })  
  }, [todoID])

  return (
    <div>
      <button onClick={()=>{
        setTodoID(1)
      }}>1</button>
      <button onClick={()=>{
        setTodoID(2)
      }}>2</button>
      <button onClick={()=>{
        setTodoID(3)
      }}>3</button>
      <button onClick={()=>{
        setTodoID(4)
      }}>4</button>
      <button onClick={()=>{
        setTodoID(5)
      }}>5</button>
      <br />
      <br /><br />
      <input
        onChange={(e) => {
          setTodoID(e.target.value)
        }}
        type="text"
        placeholder='Enter the Todo ID'
      />

      {todo ? (
        <DisplayTodo title={todo.title} description={todo.description} />
      ) : (
        <p>No todo found for the given ID.</p>
      )}
    </div>
  )
}

function DisplayTodo({ title, description }) {
  return (
    <div>
      <h1>{title}</h1>
      <h3>{description}</h3>
    </div>
  )
}

export default TodoID