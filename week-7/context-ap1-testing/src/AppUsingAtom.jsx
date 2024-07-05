import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import  countAtom  from './store/atoms/countAtom'

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
    <RecoilRoot>
      <CountRender/>
      <Buttons/>
      <EvenHandler/>
    </RecoilRoot>
  </div>
}


function EvenHandler(){
  
  const count=useRecoilValue(countAtom)
  return <div>
    {count%2==0? "It is even":"It is odd"}  
  </div>
}

function CountRender(){
  const count=useRecoilValue(countAtom)
  return <div>
    {count} 
  </div>
}

function Buttons(){
  // const [count,setCount]=useRecoilState(countAtom)
  const setCount=useSetRecoilState(countAtom)
  return <div>
    <br />
    <button onClick={()=>{
      setCount(count=>count+1)
    }}>Increase</button>
    
    <button onClick={()=>{
      setCount(count=>count-1)
    }}>Decrease</button>
  </div>
}

export default AppUsingAtom
