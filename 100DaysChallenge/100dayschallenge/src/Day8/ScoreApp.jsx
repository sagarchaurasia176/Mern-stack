import React from "react";
import { useState } from "react";
import "./index.css";

let score = 0;
let scoreCount = 0;


  function addNum() {
  const [score, scoreCount] = useState(0);
    if (score > 10) {
      scoreCount(score + 1);
    }
  }
// that is the jsx way to write the code
const scoreBtn = () => (
  <div>
    <button onClick={addNum}>0</button>
    <button onClick={() => addNum(1)}>1</button>
    <button onClick={() => addNum(2)}>2</button>
    <button onClick={() => addNum(3)}>3</button>
    <button onClick={() => addNum(4)}>4</button>
    <button onClick={() => addNum(5)}>5</button>
    <button onClick={() => addWkt()}>Wicket</button>
  </div>
);

export default function Scores() {
  return (
    <>
      {/* start to apply the event  */}
      <div className="container">
        <h1>Score Kepper</h1>
        <p className=" text-center font-medium via-black  flex">
          {score} / {scoreCount}
        </p>
        <scoreBtn />
      </div>
    </>
  );
}
