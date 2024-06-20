import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import WrapperComponent from './WrapperComponent'
import FetchTodos from './FetchTodos'
// import Memo from './Memo.jsx'
// import Todo from './Todo.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Memo/> */}
    {/* <Todo/> */}
    {/* <WrapperComponent/> */}
    <FetchTodos/>
  </React.StrictMode>,
)

