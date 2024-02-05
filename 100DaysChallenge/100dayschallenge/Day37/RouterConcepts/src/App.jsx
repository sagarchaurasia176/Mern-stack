import './App.css'
import { Routes, Route } from "react-router-dom";
import About from './Components/About';
import Contact from './Components/Contact';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Product from '../src/Components/ProductPage'


function App() {
  return (
    <>
        <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/Contact" element={<Contact />}></Route>
        <Route path="/Product" element={<Product/>}></Route>
      </Routes>


      




    </>
  )
}

export default App
