import React, { useContext } from "react";
import "../App.css";
import { DataPass } from "../Context/Datas";
function CartData() {
    //context data fetch
    // const { set, setData } = useContext(DataPass);
        const {set , setData} = useContext(DataPass);
    return (
        <div>
            <p> counter data is -{set} </p>
            <button onClick={()=> setData(set + 1)}> click</button>
              {/* <button onClick= { ()=>{setData(set + 1 ) } }>Click me</button> */}
        </div>
    );
}

export default CartData;
