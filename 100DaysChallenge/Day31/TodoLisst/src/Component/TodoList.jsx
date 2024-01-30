import React from 'react'
import SearchItem from './SearchItem'
import './Comp.css'
export default function TodoList() {
  return (
    <div>
        <div className="todoBox  w-1/2 h-auto  m-auto p-2 bg-white my-2">
            <h2 className=' text-center p-2 font-medium  text-red-800 capitalize '> Todify | Add Your Today Works | </h2>
                <SearchItem/>
                <div className="card-1 flex p-1 justify-evenly">
                </div>
        </div>  


    </div>
  )
}
