import React, { useReducer } from "react";

function UseReducer() {
  const[data , dispatch] = useReducer(reducer , {age :2})
  
  return (
    <div>

      <p>it is used to manage the state</p>
      UseReducer
      syntax
      <br></br>

    </div>
  );
}

export default UseReducer;
