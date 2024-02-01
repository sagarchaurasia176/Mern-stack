import React, { useState } from 'react'
function State() {
    const [change , setChange] = useState('');
    
    const handler = () =>{
        setChange( "Youre future company is Amazon , flipkart , uber")
    }

  return (
    <div>
        <h1 className=' text-center text-white capitalize p-2'>{change}</h1>
        <button className=' bg-white m-auto flex p-2 ' 
        onClick={handler}>click me here I will change tell your future company</button>     

    </div>
  )
}

export default State