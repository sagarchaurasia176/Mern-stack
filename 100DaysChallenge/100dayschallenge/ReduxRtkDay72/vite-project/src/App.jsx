import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar'
import Home from './Components/Home'

function App() {

  return (
    <>
      <Routes>
        {/* routes is linking paths */}
        <Route path='/' element={<Navbar />}>
        </Route>
      </Routes>
          <Home/>
      {/* <Cart/> */}

    </>
  )
}

export default App
