import React, { useState } from 'react'
import './App.css'

function App() {
  return (
    <>
     {/* <MyConponent/> */}
     <MyClassComponent/>
    </>
  )
}



function MyConponent(){
  const[count,setCount]=useState(0);
  return <div>
    <h1>{count}</h1>
    <button onClick={()=>{
      setCount(count=>count+1)
    }}>Click me</button>
  </div>
}


class MyClassComponent extends React.Component{
  constructor(props){
    super(props)
    this.state={count:0}
  }

  incrementCount=()=>{
    this.setState({count:this.state.count+1})
  }


  render(){
    return(
      <div>
        <p>{this.state.count}</p>
        <button onClick={this.incrementCount}>Increment</button>
      </div>
    )
  }
}

export default App
