import React from 'react'
import { useEffect,useState } from 'react';
import './App.css'
import axios from 'axios';

function useTodos(n){
  const[todos,setTodos]=useState([]);
  const[loading,setLoading]=useState(true)
  
  useEffect(()=>{
    const value=setInterval(()=>{
      axios.get("https://sum-server.100xdevs.com/todos")
    .then(res=>{
      setTodos(res.data.todos)
      setLoading(false)
    })
    },n*1000)
    axios.get("https://sum-server.100xdevs.com/todos")
    .then(res=>{
      setTodos(res.data.todos)
      setLoading(false)
    })

    return ()=>{
      console.log("Unmounted")
      clearInterval(value)
    }

  },[n])
  return {todos,loading}
}

function CustomTodoHook() {
  const[input,setInput]=useState(2)
  const {todos,loading}=useTodos(Number(input))

  return (
    <div>
      <InputComponent setInput={setInput} />
      {loading?<div>loading....</div>:todos.map(todo=><Track key={todo.id} todo={todo}/>)}
    </div>
  )
}


function InputComponent({ setInput }) {
  return (
    <input 
      type="text"  
      onChange={(e) => {
        setInput(e.target.value);
      }}
    />
  );
}


function Track({todo}){
  return <div>
    <h1>{todo.title}</h1><br />
    <h3>{todo.description}</h3>
  </div>
}

export default CustomTodoHook
