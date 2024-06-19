import React, { useState } from "react";

function Todo() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Go to gym",
      description: "Gym from 8-9",
    },
    {
      id: 2,
      title: "DSA",
      description: "DSA from 6-8",
    },
  ]);

  function AddTodo(){
    setTodos([...todos,{
        title:"New Todo",
        description:"Desc of new todo"
    }])
  }
  return (
    <div>

      <button onClick={AddTodo}>Add a random todo</button>
      {/* {JSON.stringify(todos)} */}

      {/* <Todos title="Go to gym" description="Gym from 8-9"/>

      <Todos title="Go to gym" description="Gym from 8-9"/>
      <Todos title="Go to gym" description="Gym from 8-9"/>
      <Todos title="Go to gym" description="Gym from 8-9"/>
      <Todos title="Go to gym" description="Gym from 8-9"/> */}

      {todos.map(function (todo) {
        return <Todos title={todo.title} description={todo.description} />;
      })}
    </div>
  );
}

function Todos(props) {
  return (
    <>
      <h1>{props.title}</h1>
      <h2>{props.description}</h2>
    </>
  );
}

export default Todo;
