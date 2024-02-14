import React from 'react'

function Buttons(props) {
    const btnData = props.btnData;
  return (
    <div>
            {btnData.map((values)=>(
            <button
            className='
            text-white
            ml-10  pointer'
            >{values.name}</button>

            ))}

    </div>
  )
}

export default Buttons