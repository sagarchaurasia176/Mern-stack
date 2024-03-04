import React, { useEffect, useRef, useState } from "react";
//it is used to rendering the values kind of stuff
//the basic things is that ref is used as for rendering
export default function UseRefStart() {
  const [num, setNum] = useState("sagar");
  const values = useRef("");
  //increment the function values
  function move() {
    values.current.focus();
    values.current.style.backgroundColor = "red";
}
  function reset(){
    setNum('')
    values.current.focus();
    values.current.style.backgroundColor = 'gray'
    values.current.style.color = 'white'
}
  return (
    <div>
      {/* <p>{num}</p> */}
      <input
        style={{ padding: "1rem" }}
        type="text"
        value={num}
        ref={values}
        onChange={(e)=>{setNum(e.target.value)}}
      />
      <button
        onClick={move}
        style={{ padding: "1rem" }}
      >
        CLick to me{" "}
      </button>
      <button
        onClick={reset}
        style={{ padding: "1rem" }}
      >
        CLick to Reset
      </button>
    </div>
  );
}
