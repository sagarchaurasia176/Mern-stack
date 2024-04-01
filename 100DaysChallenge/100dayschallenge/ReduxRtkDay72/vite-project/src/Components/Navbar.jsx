import React from "react";
import { CiShoppingCart } from "react-icons/ci";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

function Navbar() {
  const { cartRedux } = useSelector((state) => state);

  return (
    <div>
      <nav className=" bg-white shadow-lg p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <NavLink to={"/home"}>
              <div>
                <img
                  src="https://fakestoreapi.com/icons/logo.png"
                  alt="Logo"
                  className="w-10 h-10 mr-2"
                />
              </div>
            </NavLink>

            {/* IT MOVES TO THE HOME PAGE */}
            <NavLink to={"/home"}>
              <div className=" text-black">ShopyMart

              </div>
              <div className="">
                <ul className=" flex justify-evenly m-auto items-center space-x-4">
              <li>Home</li>
              <li>Product</li>
              <li>Contact</li>
              <li>about</li>

                </ul>
              </div>
            </NavLink>
          </div>
          <ul className="">
            <li className=" flex">
              <NavLink to="/AddCart">
                {/* cart get the values from the  Redux sides*/}
                {cartRedux.length > 0 && (
                  <sup
                    className=" text-green-700 flex  justify-end  font-semibold 
                h-4 w-4 rounded-full items-center j  animate-bounce
               "
                  >
  
                    {cartRedux.length}
                  </sup>
                )}

                <CiShoppingCart className="  text-orange-600 size-6 cursor-pointer" />
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
