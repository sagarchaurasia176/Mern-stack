import React from 'react'
import { FaLaptopCode } from "react-icons/fa";
import { FaUserGraduate } from "react-icons/fa";
import { PiCertificate } from "react-icons/pi";
import { FaUsers } from "react-icons/fa";

function NextHeader() {
    return (
        <>
            <div className=" bg-green-200  flex justify-around p-3 h-auto w-full">

                <FaLaptopCode
                    className=' size-14 bg-opacity-40  bg-white  rounded-2xl p-2  text-white' />
                <span className=''> 3020 Online COurses</span>
                <FaUserGraduate
                    className=' size-14   bg-opacity-50  bg-white   rounded-2xl p-2  text-white'
                />
                <span className=''>Top Instructors</span>
                <PiCertificate
                    className=' size-14 bg-opacity-50  bg-white rounded-2xl p-2  text-white'
                />
                <span className=''> Online Certificates</span>
                <FaUsers
                    className=' size-14  bg-opacity-50  bg-white   rounded-2xl p-2  text-white'
                />
                <span className=' '> 6000 + Membership</span>
            </div>
        </>
    )
}

export default NextHeader