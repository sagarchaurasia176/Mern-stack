import React, { useState } from "react";
import TextChange from "./TextChange";
import Torch from "./Torch";
import ApiState from "./ApiState";
function UseState() {
  const [number, setNumber] = useState(0);
  return (
    <>
      <h1 className=" text-center font-medium ">Hooks Series</h1>
      <div className=" grid  grid-cols-3  bg-blue-500 ">
      <div className="  bg-white  p-2 m-2 w-80   h-32 text-black">
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
          <TextChange/>
          <Torch/>
          <ApiState/>
      </div>


    </>
  );
}

export default UseState;
