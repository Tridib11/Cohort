import React from 'react'
import { useEffect,useState } from 'react';
import './App.css'
import axios from 'axios';

function useTodos(){
  const[todos,setTodos]=useState([]);
  const[loading,setLoading]=useState(true)
  useEffect(()=>{
    axios.get("https://sum-server.100xdevs.com/todos")
    .then(res=>{
      setTodos(res.data.todos)
      setLoading(false)
    })

  },[])
  return {todos,loading}
}

function CustomTodoHook() {
  const {todos,loading}=useTodos()

  return (
    <div>
      {loading?<div>loading....</div>:todos.map(todo=><Track key={todo.id} todo={todo}/>)}
    </div>
  )
}

function Track({todo}){
  return <div>
    <h1>{todo.title}</h1><br />
    <h3>{todo.description}</h3>
  </div>
}

export default CustomTodoHook
