import React, { useState } from "react";
// import { DataPass } from "../Context/Datas";
// import CartData from "./CartData";
import { DataPass } from "../Context/Datas";
import "../App.css";
import CartData from "./CartData";


function Data() {
    const [set, setData] = useState(0);

  return (

    <div>
      <p className=" text-center">sagar</p>
      {/* <DataPass.Provider value={{ set, setData }}> */}
      <DataPass.Provider value={ {set , setData} }>
        <CartData />
      </DataPass.Provider>

      {/* </DataPass.Provider> */}
    </div>
  );
}

export default Data;
