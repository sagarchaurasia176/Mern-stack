import React from 'react'
import urlApi from './Api'
function Random({ picture }) {
    return (
        <div>

            <div className="data">
                <h1 className=" bg-black  text-center font-medium  p-3">RandomUsers concepts [using useState and useEffect]</h1>
                <div className="  bg-white  m-2 w-auto   h-32 text-black">
                    <img src={picture} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Random