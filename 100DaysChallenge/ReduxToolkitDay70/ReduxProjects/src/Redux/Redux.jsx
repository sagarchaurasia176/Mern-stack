import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { validName } from '../Slices/sliceData'

function Redux() {
    const select = useSelector((getData) => {
        getData.counterSlice.value

    })
    const pass = useDispatch();
    
    return (
        <div>
            <button onClick={ ()=>pass(validName)}>click</button>

        </div>
    )
}

export default Redux