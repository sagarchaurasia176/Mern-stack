import React from "react";
import { useState } from "react";
import './index.css';
export default function Score() {
    const [score , scoreCount] = useState(0);

    function addNum(){
        scoreCount(score + 1);
}
    let wkt = 0
    function addWkt(){
        wkt+=1;
    }

return (
    <>
      {/* start to apply the event  */}
      <div className="container">
        <h1>Score Kepper</h1>
            <p className=" text-center font-medium via-black  flex">{score} / {scoreCount}</p>
        <div className="btn">
          <button onClick={addNum}>0</button>
          <button onClick={()=>addNum(1)}>1</button>
          <button onClick={addNum(2)}>2</button>
          <button onClick={addNum(3)}>3</button>
          <button onClick={addNum(4)}>4</button>
          <button onClick={addNum(5)}>5</button>
          
          <button onClick={addWkt}>wicket</button>

        </div>
      </div>
    </>
  );
}
