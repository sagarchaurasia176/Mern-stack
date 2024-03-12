import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../Slice/Slices";

// home of the page

function Home() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <p>{count} </p>
      <button onClick={() => dispatch(decrement())}>decrement</button>
    </div>
  );
}

export default Home;
