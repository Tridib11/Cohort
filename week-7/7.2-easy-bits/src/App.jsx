import React from 'react'
import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil'
import { jobsAtom, messagingAtom, networkAtom, notificationsAtom } from './atoms'

function App() {
  return <RecoilRoot>
      <MainApp/>
  </RecoilRoot>
}


function MainApp(){
  const jobAtomCount=useRecoilValue(jobsAtom)
  const [messageAtomCount,setMessageAtomCount]=useRecoilState(messagingAtom)
  const networkAtomCount=useRecoilValue(networkAtom)
  const notificationAtomCount=useRecoilValue(notificationsAtom)
  
  return (
    <div>
      <button style={{margin:"2px"}}>Home</button>
  
      <button style={{margin:"2px"}}>My Networks ({networkAtomCount>100?"99+":networkAtomCount})</button>
      <button style={{margin:"2px"}}>Jobs ({jobAtomCount})</button>
      <button style={{margin:"2px"}}>Messaging ({messageAtomCount})</button>
      <button style={{margin:"2px"}}>Notifications ({notificationAtomCount})</button>
  
      <button style={{margin:"2px"}}>Me</button>
      <br />
      <button onClick={()=>{
        setMessageAtomCount(c=>c+1)
      }}>Increase messages</button>
    </div>
  )

}

export default App
