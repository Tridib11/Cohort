import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil'
import { countAtom } from './store/atoms/count'

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
    </RecoilRoot>
  </div>
}

function CountRender(){
  const count=useRecoilValue(countAtom)
  return <div>
    {count} 
  </div>
}

function Buttons(){
  const [count,setCount]=useRecoilState(countAtom)
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
