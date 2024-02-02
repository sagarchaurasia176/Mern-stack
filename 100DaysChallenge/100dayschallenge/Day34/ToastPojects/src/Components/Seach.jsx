import React, { useState } from 'react'
function Seach() {
const [set ,setChange] = useState('');

    const textValue = (e) =>{
            setChange(e.target.value)
            console.log(set)
    }

  return (
        <>
        <input type="text" value={set} placeholder='name' onChange={textValue}/>
    </>
  )
}

export default Seach