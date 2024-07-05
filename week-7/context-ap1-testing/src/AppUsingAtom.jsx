import { useContext} from 'react'
import { CountContext } from './context'

function AppUsingAtom() {
  
  return (
    <div>
      
        <Count/>
   
    </div>
  )
}

function Count(){
  console.log("rendered")
  return <div>
    <CountRender/>
    <Buttons/>
  </div>
}

function CountRender(){
  const count=0
  return <div>
    {count} 
  </div>
}

function Buttons(){
  const count=0
  return <div>
    <br />
    <button onClick={()=>{
      setCount(count+1)
    }}>Increase</button>
    
    <button onClick={()=>{
      setCount(count-1)
    }}>Decrease</button>
  </div>
}

export default AppUsingAtom
