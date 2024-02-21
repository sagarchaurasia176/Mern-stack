import React, { useContext } from 'react'
import { dataPass } from '../DataCheck/Data'
function Content() {
   const dataVl =  useContext(dataPass);
  return (
    <>  
        <p>{dataVl}</p>
    </>
    )
}

export default Content