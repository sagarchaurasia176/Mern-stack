import React from 'react'

function Headin(props) {
    const{name} = props;
  return (
    <div>
        <h2 className=' text-center
         font-semibold  bg-white  capitalize
           text-orange-600  text-lg p-3 aspect-auto '>{name}</h2>
    </div>
  )
}

export default Headin