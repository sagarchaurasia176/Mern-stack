import React from 'react'
import { FaLaptopCode } from "react-icons/fa";
import { FaUserGraduate } from "react-icons/fa";
import { PiCertificate } from "react-icons/pi";
import { FaUsers } from "react-icons/fa";


function NextHeader() {
  return (
    <>
        <div className="container bg-green-300 size-16 flex justify-around p-3">
                <FaLaptopCode/>
                <FaUserGraduate/>
                <PiCertificate/>
                <FaUsers/>
        </div>
    </>
  )
}

export default NextHeader