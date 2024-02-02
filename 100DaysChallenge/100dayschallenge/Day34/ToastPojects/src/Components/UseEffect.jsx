import React, { useEffect, useState } from "react";

function UseEffect() {
    const [set, setChange] = useState("");

    function change(e) {
        setChange(e.target.value);
        console.log(set);
    }
    //variation-1
    useEffect(() => {
        console.log("sagar");
    })

    //variation-2
    useEffect(() => {
        console.log("var-2")
    }, [])

    //variation-3
    useEffect(() => {
        console.log("var-3")
    }, [set]);

    //var-4 -> unMounting
    useEffect(() => {
        return (() => { console.log("value added") });
    }, []);

    return (
        <>
            <input type="text" onChange={change} placeholder="useEffect" />
        </>
    );
}

export default UseEffect;
