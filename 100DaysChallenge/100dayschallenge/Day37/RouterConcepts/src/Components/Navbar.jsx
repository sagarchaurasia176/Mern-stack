import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../Logo/logog1.png";
import { FaLocationArrow } from "react-icons/fa";

function Navbar() {
  return (
    <>
      <div
        className="bg-white border-b-2 flex  justify-between text-black w-full
      p-2"
      >
        <div className=" w-28">
          <img className=" w-60" src={Logo} alt="" />
        </div>
        <ul className=" text-black font-medium text- flex justify-center  space-x-20">
          <li>
            <NavLink to="/">Home </NavLink>
          </li>
          <li>
            <NavLink to="/About">About </NavLink>
          </li>
          <li>
            <NavLink to="/Contact">Testimonials</NavLink>
          </li>

          <li>
            <NavLink to="/Contact">Course</NavLink>
          </li>
        </ul>

        <button className=" flex bg-orange-600 text-white p-2 rounded-md  text-center w-24">
          <p className=" flex transition-all  animate-pulse">
            Login
            <FaLocationArrow />
          </p>
        </button>
      </div>
    </>
  );
}

export default Navbar;
