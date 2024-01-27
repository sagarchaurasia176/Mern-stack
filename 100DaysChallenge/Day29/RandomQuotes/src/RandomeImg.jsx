import React from 'react'
import './App.css'
export default function RandomeImg() {

  const RandomMotivationImg = async () => {
    try {
      const apiUrl = 'https://buddha-api.com/api/random?by=buddha';
      const convertResp = await fetch(apiUrl);
      const getResultOFImg = await convertResp.json();
      console.log(getResultOFImg)
    }
    catch {
      throw new Error("error in your code");
    }

  }

  return (
    <>
      <div className=' container w-6/12 bg-slate-50 p-2 text-center m-auto h-auto'>
        <h1 className=' text-center font-serif text-red-600 '>Random Quotes</h1>
          <div className="container-1 w-1/4 p-2">
            <button onClick={RandomMotivationImg}>click me</button>
              {/* <p><b>{getResultOFImg.text}</b></p>
              <img src= {getResultOFImg.byImage} alt="" /> */}
          </div>

      </div>

    </>
  )
}
