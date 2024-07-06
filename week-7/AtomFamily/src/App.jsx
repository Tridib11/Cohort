import React, { useEffect } from 'react'
import { RecoilRoot, useRecoilValue, useSetRecoilState } from 'recoil'
import { todoFamily } from './atom'
import './index.css'
import './App.css'

function App() {
  return (
    <div>
      <RecoilRoot>
        <UpdaterComponent/>
        <Todo id={1}/>
        <Todo id={2}/>
        <Todo id={2}/>
        <Todo id={2}/>
        <Todo id={2}/>
        <Todo id={2}/>
      </RecoilRoot>
    </div>
  )
}


function UpdaterComponent(){
  const updateTodo=useSetRecoilState(todoFamily(2))

  useEffect(()=>{
    setTimeout(()=>{
      updateTodo({
        id:2,
        title:"new todo",
        description:"new description"
      })
    },5000)
  },[])
}

function Todo({id}){
  const curentTodo=useRecoilValue(todoFamily(id))
  return <div>
    Title : {curentTodo.title}, <br />
    Description : {curentTodo.description} <br />
  </div>
}

export default App
