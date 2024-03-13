import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar'
import Cart from './Components/DataApi'

function App() {

  return (
    <>
      <Routes>
        {/* routes is linking paths */}
        <Route path='/' element={<Navbar />}>
        </Route>
      </Routes>
      <Cart/>
      {/* <Cart/> */}

    </>
  )
}

export default App
