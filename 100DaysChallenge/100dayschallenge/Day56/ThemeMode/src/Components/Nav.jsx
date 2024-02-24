import React from 'react'

function Nav() {
  return (
    <div>

<nav class="bg-gray-800 p-4">
  <div class="container mx-auto flex justify-between items-center">
    <div class="flex items-center flex-shrink-0 text-white mr-6">
      <span class="font-semibold text-xl tracking-tight">My Navbar</span>
    </div>
    <div class="block lg:hidden">
      <button id="nav-toggle" class="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-white hover:border-white">
        <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
      </button>
    </div>
    <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto hidden" id="nav-content">
      <div class="text-sm lg:flex-grow">
        <a href="#" class="block mt-4 lg:inline-block lg:mt-0 text-gray-300 hover:text-white mr-4">
          Link 1
        </a>
        <a href="#" class="block mt-4 lg:inline-block lg:mt-0 text-gray-300 hover:text-white mr-4">
          Link 2
        </a>
        <a href="#" class="block mt-4 lg:inline-block lg:mt-0 text-gray-300 hover:text-white">
          Link 3
        </a>
      </div>
    </div>
  </div>
</nav>


    </div>
  )
}

export default Nav