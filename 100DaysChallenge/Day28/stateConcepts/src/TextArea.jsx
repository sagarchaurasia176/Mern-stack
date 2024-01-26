import React from 'react'
import './App.css'
export default function TextArea(props) {
    //it's in the form of objects
    const { heading } = props;


    return (
        <>

            <div className=' container w-7/12 h-screen m-auto p-1'>
                <h1 className=' text-center text-lg text-white font-mono '>
                    {heading}
                </h1>
                <textarea
                    className=' justify-center ml-0 h-auto outline-dashed max-[1200px] p-1'
                    rows={25} cols={100}>
                </textarea>

                <div className='forBtn flex justify-between '>
                    <button className=' bg-black text-white p-2 rounded-r-md w-23  m-auto'>Convert To UpperCase</button>
                    <button className='  bg-red-600 text-white p-2 rounded-r-md w-23 m-auto'>Convert To LowerCase</button>
                    <button className='text-white bg-blue-400 p-2 rounded-r-md w-23 m-auto'>Copy Text</button>

                </div>
            </div>


        </>
    )

}
