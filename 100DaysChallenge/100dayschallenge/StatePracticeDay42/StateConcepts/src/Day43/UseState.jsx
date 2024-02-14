import React, { useState } from "react";
import TextChange from "./TextChange";
import Counter from "../Day44/Counter";
import ArrayConcept from "../Day44/ArrayConcepts";
import DataPass from "../Day44/DataPass";
import State from "../Day45/UseEffects";
import States from "../Day46/States";
// import Random from "../Day44/Random";
function UseState() {
  const [number, setNumber] = useState(0);
  return (
    <>
      <h1 className=" text-center font-medium ">Hooks Series</h1>
      <div className=" grid  grid-cols-3   bg-blue-500 ">
        <div className="  bg-white  m-2 w-auto   h-32 text-black">
          <h2 className=" text-center text-red-500">simple counter</h2>
          <p>the value is {number}</p>
          <button
            className=" bg-slate-600 p-2 text-white"
            onClick={() => {
              setNumber(number + 1);
            }}
          >
            click me
          </button>
        </div>
        <TextChange />
        {/* <Torch/> */}
        <Counter />
        <ArrayConcept />
        <DataPass />
        <br />
      </div>
      <State/>
            <States/>
            
      {/* <Random/> */}
    </>
  );
}

export default UseState;
