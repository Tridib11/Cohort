
import { RecoilRoot, useRecoilState } from 'recoil'
import './App.css'

import React from 'react'
import { todosAtomFamily } from './atoms'

function App() {
  return (
    <RecoilRoot>
    <div>
      <Todo id={1}/>
    </div>
    </RecoilRoot>
  )
}


function Todo({id}){
  const[todo,setTodo]=useRecoilState(todosAtomFamily(id))
  return <div>
    {todo.title},
    {todo.description}
  </div>
}

export default App
