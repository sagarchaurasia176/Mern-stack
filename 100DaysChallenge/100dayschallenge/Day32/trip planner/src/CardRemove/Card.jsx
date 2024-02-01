import React from 'react'
import { useState } from 'react'
import UserData from './User';
function Card() {

  const [card, setCard] = useState(UserData);



  return (
    <>
      {UserData.map(() => {
        <div className="container-card grid  grid-cols-3 bg-white text-black w-64">
          <div className="box-q">
            <h1>{UserData.name}</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe ullam eligendi ipsam.</p>
            <button className=' bg-red-700 p-2 w-64 text-white'>click</button>
          </div>
        </div>

      })}



    </>
  )
}

export default Card