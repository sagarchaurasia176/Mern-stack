import React from "react";
//import two things
//selector
//dispatch
import { useSelector , useDispatch } from "react-redux";
import { alerts, prompts } from "../Components/Data";

//CREATE SLICES
function createSlices() {
    const msg = useSelector((recv) =>{recv.storeDataPass.state})
    const dispatch = useDispatch()

  return (
    <>
      <p>

      </p>


    {/* dispatch the values */}
      <button onClick={()=>{
        dispatch(alerts());
      }}>
        click
      </button>

      {/* prompts values  */}

      <button onClick={()=>{
            dispatch(prompts());
      }}>

click

      </button>

    </>
  );
}

export default createSlices;
