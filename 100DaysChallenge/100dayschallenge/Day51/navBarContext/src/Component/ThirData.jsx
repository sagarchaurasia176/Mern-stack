import React, { useContext } from "react";
import { ContextConcept } from "../Context/ContextApi";

function ThirData() {
  const { data, setData } = useContext(ContextConcept);

  return (
    <div className=" text-white ">
      ThirData - {data}
      
      <button
        onClick={() => {
          setData(data + 1);
        }}
        className=" bg-white p-2 text-black"
      >
        Check from the next btn
      </button>
    </div>
  );
}

export default ThirData;
