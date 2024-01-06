import React from "react";
import { useState } from "react";
import './index.css';
export default function Score() {
    const [score , scoreCount] = useState(0);

    function addNum(){
        scoreCount(score + 1);
}
  return (
    <>
      {/* start to apply the event  */}
      <div className="container">
        <h1>Score Kepper</h1>
            <p className=" text-center font-medium via-black  flex">{score} / {scoreCount}</p>
        <div className="btn">
          <button onClick={addNum}>0</button>
          
          <button>wicket</button>

        </div>
      </div>
    </>
  );
}
