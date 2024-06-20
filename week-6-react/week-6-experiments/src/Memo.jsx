import { memo, useState } from "react"

{/* Memo helps you skip unnecessary rerenders */}


function Memo() {
  const[name,setName]=useState("Rohan")
  return (
    <div>
      <button onClick={()=>{
        setName(Math.random())
      }}>Click me to change this title</button>
      <Header title={name}/>
      <Header title="Tridib"/>
      <Header title="Tridib"/>
      <Header title="Tridib"/>
      <Header title="Tridib"/>
    </div>
  )
}

const Header=memo(function Header({title}){
  return <div>
    My name is {title}
  </div>
})


export default Memo