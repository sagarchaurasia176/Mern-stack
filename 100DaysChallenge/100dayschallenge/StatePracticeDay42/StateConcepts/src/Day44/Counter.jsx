import React, { useState } from "react";

function Counter() {
  const [num, setNum] = useState(0);
  function move() {
    setNum(num + 1);
  }

  function moves() {
    setNum(num - 1);
  }

  return (
    <div>
      <div className=" p-2 m-2 w-80  bg-white  h-32 text-black">
        <h2 className=" text-center text-red-500">counter</h2>
        <p>you're value is : {num} </p>
        <button onClick={move} className=" bg-slate-500 p-2 text-white">
          +
        </button>
        <button
          onClick={moves}
          className=" bg-slate-500 ml-3  p-2   w-7 text-white"
        >
          -
        </button>
      </div>
    </div>
  );
}

export default Counter;
