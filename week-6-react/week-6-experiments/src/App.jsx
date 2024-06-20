import { useState } from "react"

function App() {
  
  return (
    <div>
      <HeaderButton/>
      <Header title="Tridib"/>
    </div>
  )
}

function HeaderButton(){
  const[name,setName]=useState("Rohan")
  return <div>
    <button onClick={()=>{
      setName(Math.random())
    }}>Click me to change the header</button> <br />
    My name is {name}
  </div>

}

function Header({title}){
  return <div>
    My name is {title}
  </div>
}

export default App
