import './App.css'
import { Routes, Route } from "react-router-dom";
import About from './Components/About';
import Contact from './Components/Contact';
import Home from './Components/Home';
import Navbar from './Components/Navbar';

function App() {
  return (
    <>
      <div className=" w-full p-2">
        <Navbar />
      </div>

      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/Contact" element={<Contact />}></Route>
      </Routes>




    </>
  )
}

export default App
