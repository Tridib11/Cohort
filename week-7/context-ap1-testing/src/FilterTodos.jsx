import React, { useState,useMemo } from 'react';

const ALL_WORDS = [
  {
    id: 1,
    title: "HELP",
    description: "Help me"
  },
  {
    id: 2,
    title: "GYM",
    description: "GO GYM"
  },
  {
    id: 3,
    title: "DSA",
    description: "DO DSA"
  }
];

function FilterTodos() {
  const [todos, setTodos] = useState(ALL_WORDS);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [filter, setFilter] = useState("");

  const handleAddTodo = () => {
    const newTodo = {
      id: todos.length + 1,
      title: title,
      description: description
    };
    setTodos([...todos, newTodo]);
    setTitle("");
    setDescription("");
  };

  const filteredTodos = useMemo(()=>todos.filter(todo => 
    todo.title.toLowerCase().includes(filter.toLowerCase())
  ),[filter]);

  return (
    <div>
      <h1>Todo List</h1>
      <div>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        /> <br/>
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        /> <br/>
        <button onClick={handleAddTodo}>Add Todo</button>
      </div>
      <br/>
      <br/>
      <div>
        <input
          type="text"
          placeholder="Filter by Title"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
      </div>
      <ul>
        {filteredTodos.map((todo) => (
          <li key={todo.id}>
            <h2>{todo.title}</h2>
            <p>{todo.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FilterTodos;
