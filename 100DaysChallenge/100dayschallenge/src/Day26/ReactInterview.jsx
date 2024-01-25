import React, { useState } from 'react'
export default function ReactInterview() {
    const [counter, setCounter] = useState(0);

    const changeHandler = () => {

        setCounter(prev => prev + 1);
        setCounter(prev => prev + 1);
        setCounter(prev => prev + 1);
    }
    const changeHandler1 = () => {
        setCounter(counter > 0 ? counter - 1 : 0);

    }
    return (
        <>
            <p className=' text-center text-red-600'>{counter}</p>
            <button onClick={changeHandler}>click to counter</button>
            <button onClick={changeHandler1}>click to counter for decrement</button>

        </>
    )
}
