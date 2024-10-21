
import './App.css'
import Usear from './componets/Usear'

function App() {
 localStorage.setItem("cart",JSON.stringify('13'))

  return (
    <>
     
      <h1>Vite + React</h1>
      <Usear></Usear>
      
    </>
  )
}

export default App
