import React from 'react'

function WrapperComponent() {
  return (
    <div>
      <Wrapper innerComponent={<TextComponent/>}/><br />
      <Wrapper innerComponent={<TextComponent/>}/><br />
      <Wrapper innerComponent={<TextComponent/>}/>
    </div>
  )
}


function Wrapper({innerComponent}){
  return <div style={{border:"2px solid black", padding:20}}>
    {innerComponent}
  </div>
}


function TextComponent(){
  return <div>
     Hi there
  </div>
}

export default WrapperComponent
