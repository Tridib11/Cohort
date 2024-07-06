import React from 'react'
import { RecoilRoot, useRecoilValue } from 'recoil'
import { todoFamily } from './atom'

function App() {
  return (
    <div>
      <RecoilRoot>
        <Todo id={1}/>
        <Todo id={2}/>
      </RecoilRoot>
    </div>
  )
}

function Todo({id}){
  const curentTodo=useRecoilValue(todoFamily(id))
  return <div>
    Title : {curentTodo.title}, <br />
    Description : {curentTodo.description} <br />
  </div>
}

export default App
