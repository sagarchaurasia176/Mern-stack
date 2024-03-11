import React from 'react'
import { CiShoppingCart } from "react-icons/ci";

function Navbar() {
  return (
    <div>

<nav className="  bg-slate-200 p-4">
    <div className="flex items-center justify-between">
      <div className="flex items-center">
        <img src=" 
        https://fakestoreapi.com/icons/logo.png
        " alt="Logo" className="w-10 h-10 mr-2"/>
        <a href="#" className="text-black font-bold text-lg">ShopyMart</a>
      </div>
      <ul className="flex space-x-4">
    <CiShoppingCart
    style={{color:'green', fontSize:'2rem'}}
    />
      </ul>
    </div>
  </nav>
    </div>
  )
}

export default Navbar