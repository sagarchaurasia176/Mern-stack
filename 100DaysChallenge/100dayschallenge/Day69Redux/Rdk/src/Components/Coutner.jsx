import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Increment, Decrement } from "../Redux/counterSlice";
// counter fucntions value
function Coutner() {
  //selector select the data
  const count = useSelector((state) => state.counterSlice.value);
  //dispactch pass the data
  const dispatch = useDispatch();

  return (
    <div>
      <button
        aria-label="Increment value"
        onClick={() => dispatch(Increment())}
      >
        Increment
      </button>
      <span>{count}</span>
      <button
        aria-label="Decrement value"
        onClick={() => dispatch(Decrement())}
      >
        Decrement
      </button>
    </div>
  );
}

export default Coutner;
