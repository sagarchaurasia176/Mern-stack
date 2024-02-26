import React from 'react'
import { NavLink } from 'react-router-dom'
function Nav() {
  return (
    <div>
      <div className="container bg-black text-white  p-7 w-full">
        <span>Techify</span>
        <ul>
          <li>
          <NavLink to = '/'> Home</NavLink>
          </li>
          <li>
          <NavLink to ='/Contact'>Contact</NavLink>
          </li>
          <li>
          <NavLink to = '/About'>About</NavLink>

          </li>
        </ul>

      </div>


    </div>
  )
}

export default Nav