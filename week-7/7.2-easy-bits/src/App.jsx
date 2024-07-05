import React from 'react'
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { jobsAtom, messagingAtom, networkAtom, notificationsAtom, totalNotificationSelector } from './atoms'

function App() {
  return <RecoilRoot>
      <MainApp/>
  </RecoilRoot>
}


function MainApp(){
  const jobAtomCount=useRecoilValue(jobsAtom)
  const networkAtomCount=useRecoilValue(networkAtom)
  const notificationAtomCount=useRecoilValue(notificationsAtom)
  const messageAtomCount=useRecoilValue(messagingAtom)
  const totalNotificationCount=useRecoilValue(totalNotificationSelector)
  
  return (
    <div>
      <button style={{margin:"2px"}}>Home</button>
  
      <button style={{margin:"2px"}}>My Networks ({networkAtomCount>100?"99+":networkAtomCount})</button>
      <button style={{margin:"2px"}}>Jobs ({jobAtomCount})</button>
      <button style={{margin:"2px"}}>Messaging ({messageAtomCount})</button>
      <button style={{margin:"2px"}}>Notifications ({notificationAtomCount})</button>
  
      <button style={{margin:"2px"}}>Me({totalNotificationCount})</button>
      <br />
      <Button/>
    </div>
  )

}



function Button(){
  const setMessageAtomCount=useSetRecoilState(messagingAtom)
  return <div>
     <button onClick={()=>{
        setMessageAtomCount(c=>c+1)
      }}>Increase messages</button>
  </div>
}

export default App
