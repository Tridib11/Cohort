
import { RecoilRoot, useRecoilState, useRecoilStateLoadable } from 'recoil'
import './App.css'

import React from 'react'
import { todosAtomFamily } from './atoms'

function App() {
  return (
    <RecoilRoot>
    <div>
      <Todo id={1}/>
      <Todo id={2}/>
      <Todo id={3}/>
      <Todo id={4}/>
    </div>
    </RecoilRoot>
  )
}


function Todo({id}){
  //const[todo,setTodo]=useRecoilState(todosAtomFamily(id))
  const[todo,setTodo]=useRecoilStateLoadable(todosAtomFamily(id))
  // console.log(todo.state)
  if(todo.state==="loading"){
    return <div>
      Loading...
    </div>
  }else if(todo.state==="hasValue"){

  return <div>
    {todo.contents.title},
    {todo.contents.description}
  </div>
  }
}

export default App
