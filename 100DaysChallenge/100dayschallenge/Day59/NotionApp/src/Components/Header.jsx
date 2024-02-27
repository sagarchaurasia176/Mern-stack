import React from "react";
//router-dom imp
import { NavLink } from "react-router-dom";
function Header() {
  return (
    <div>
      <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="text-white font-bold text-xl">
            JMS
          </a>

          {/* Mobile Menu Button */}
          <button className="block lg:hidden text-white focus:outline-none">
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>

          {/* Navigation Links */}
          <div className="hidden lg:flex flex-grow justify-end items-center">
            <ul className=" flex  text-center space-x-8 text-white">
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/Contact">Contact</NavLink>
              </li>
              <li>
                <NavLink to="/About">About</NavLink>
              </li>
              <li>
                <NavLink to="/Dashboard">DashBoard</NavLink>
              </li>
              <li>
                <NavLink to="/Login">Login</NavLink>
              </li>
              <li>
                <NavLink to="/Login">Signup</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
