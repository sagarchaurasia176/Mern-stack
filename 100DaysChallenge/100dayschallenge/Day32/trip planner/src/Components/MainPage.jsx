import React, { useState } from 'react'
import Data from './data';
// import Card from './Card'
import Headin from './Headin';
import Tour from './Tour';
function MainPage() {

  const [tripData, setData] = useState(Data);

  return (
    <>
      <Headin name="Trip planner" />
      <div className=' container
         w-10/12 m-auto bg-slate-100
          p-1  h-auto'>
        <Tour tripData={tripData} />
      </div>
    </>

  )
}

export default MainPage