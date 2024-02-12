import React, { useState } from 'react'

function ArrayConcept() {
  //array concepts 
  const[inputVlaue  , setInput] = useState('');
  function passData(){

  }
  return (
    <div>
      <div id="dark" className=" bg-slate-50  p-2 m-2  h-auto text-black">
        <h2 className=" text-center bg- text-red-500">Dealing with the form</h2>
        {/* <p>the value is </p> */}
        <form className="mt-8 space-y-6" action="#" method="POST">
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email-address" className="sr-only">Email address</label>
              <input id="email-address" name="email" type="email"   
            autoComplete="email" required className="appearance-none
             rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500
              text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" 
              placeholder="Email address" 
              onChange={(e)=>{setInput(e.target.value)}}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">Password</label>
              <input id="password" name="password" type="password" autoComplete="current-password" required className=
              "appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" 
              placeholder="Password" 
              
              onChange={(e)=>{setInput(e.target.value)}}
              
              />
            </div>
          </div>
        </form>

        <button 
        onClick={passData}
        className=" bg-slate-500 p-2 text-white">
          click me
        </button>
      </div>
    </div>
  )
}

export default ArrayConcept