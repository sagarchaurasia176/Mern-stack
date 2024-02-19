import React from "react";
import { useContext } from "react";
import { ContextConcept } from "../Context/ContextApi";

function NextData() {
    //this is basically a receiever
    const { data, setData } = useContext(ContextConcept);

    return (
        <div className=" text-white  ">
            <p className=" text-center text-white">data values{data}</p>

            <button
                className=" bg-slate-200 text-black p-2"
                onClick={() => { setData(data + 1) }}>
                useContext
            </button>


        </div>
    );
}

export default NextData;
