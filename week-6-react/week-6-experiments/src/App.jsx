
function App() {

  return (
    <div>
      <Header title="Rohan"/>
      <Header title="Tridib"/>
    </div>
  )
}

function Header({title}){
  return <div>
    {title}
  </div>
}

export default App
