import React, { useState } from 'react'
import '../App.css'
import Navbar from './Navbar'
import CardData from './CardData'
import CourseBtn from './CourseBtn'
import { filterData , ApiUrl } from './Filter'

const [apiDatas , setData] = useState(ApiUrl);

function TopCoursePage() {
  return (
   <>
    <div className="container-1 w-5/6 m-auto bg-slate-800">
        <Navbar/>
        <CourseBtn filterData = {filterData}/>
        <div className=" grid grid-cols-3 grid-rows-3">
        <CardData apiDatas = {apiDatas}/>
    </div>


    </div>
   </>
  )
}

export default TopCoursePage