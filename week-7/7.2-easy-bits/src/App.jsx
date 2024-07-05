import React from 'react'
import { RecoilRoot, useRecoilValue } from 'recoil'
import { networkAtom } from './atoms'

function App() {
  return <RecoilRoot>
      <MainApp/>
  </RecoilRoot>
}


function MainApp(){
  const notificationCount=useRecoilValue(networkAtom)
  
  return (
    <div>
      <button>Home</button>
  
      <button>My Networks ({notificationCount>100?"99+":notificationCount})</button>
      <button>Jobs ()</button>
      <button>Messaging ()</button>
      <button>Notifications ()</button>
  
      <button>Me</button>
    </div>
  )

}

export default App
