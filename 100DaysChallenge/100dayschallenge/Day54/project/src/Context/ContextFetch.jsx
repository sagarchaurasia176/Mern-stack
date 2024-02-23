import React, { useContext } from 'react'
import userContexts from './Data'

function ContextFetch({children}) {
  const{data , setData} = useContext(userContexts);
    return (

    <div>
        <userContexts>
            {children}
        </userContexts>
    </div>
  )
}

export default ContextFetch