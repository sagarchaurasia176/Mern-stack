import React from "react";
import { NavLink } from "react-router-dom";
// import {BroserRouter}

function Navbar() {
  return (
    <>
      <div className=" p-3 bg-teal-300 text-black  flex justify-center">
        <ul className=" flex justify-evenly space-x-16">
          <span className=" font-semibold text-black">Router concepts</span>
          <li>
            <NavLink to="/">Home </NavLink>
          </li>
          <li>
            <NavLink to="/About">About </NavLink>
          </li>
          <li>
            <NavLink to="/Contact">Contact</NavLink>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
