import React, { useEffect, useState } from "react";
import { CiDark } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";
function Nav() {
  // //toggle button passed here
  // //state to change the ui
  // const [mode, setMode] = useState("light-theme");
  // //change mode here
  // const change = () => {
  //   mode === "dark-theme" ? setMode("light-theme") : setMode("dark-theme");
  // };
  // //why we used this
  // //this is basically used to after changing somehting into the ui
  // //for exp like once it's in the light mode then again click to change the dark mode
  // //kind of one step after another steps
  // useEffect(() => {
  //   //changing the mode
  //   document.body.className = mode;
  // }, [mode]);
  return (
    <>
      <nav class=" bg-slate-400 p-4">
        <div class="container mx-auto flex justify-between items-center">
          <div class="flex items-center flex-shrink-0 text-white mr-6">
            <span class="font-semibold text-xl tracking-tight">Mode</span>
          </div>
          <div class="block lg:hidden">
            <button
              id="nav-toggle"
              class="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-white hover:border-white"
            >
              <svg
                class="fill-current h-3 w-3"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>
          <div
            class="w-full  flex-grow lg:flex lg:items-center lg:w-auto"
            id="nav-content"
          >

         
          </div>


        </div>
      </nav>
    </>
  );
}

export default Nav;
