import React, { useState } from "react";

function StateConcepts1() {
    //state management apply
    const [imgChange, setImg] = useState("hi");

    return (
        <>
            <button
                onClick={() => {
                    setImg("sadgar")
                }}
                style={{
                    fontFamily: "inherit",
                    textAlign: "center",
                    display: "flex",
                    justifyContent: "center",
                }}
            >

                click me
            </button>
        </>
    );
}

export default StateConcepts1;
