import React from "react";
import Mode from "./Mode";
function Nav() {
  return (
    <div>
      
      <nav class="bg-gray-800 p-4">
        <div class="container mx-auto flex justify-between items-center">
          <div class="flex items-center flex-shrink-0 text-white mr-6">
            <span class="font-semibold text-xl tracking-tight">DarkMode</span>
          </div>
          <div class="block lg:hidden">
            <button class="flex items-center px-3 py-2 border rounded text-gray-300 border-gray-400 hover:text-white hover:border-white">
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
          <div class="hidden lg:block">
           

          {/* dark modes */}
          <Mode/> 

          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
