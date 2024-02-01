import React, { useState } from "react";
import "../App.css";
export default function State(props) {
    const [img, setImg] = useState(props.imageLink);

    const changeHandler = () => {
        setImg('https://imgupscaler.com/images/samples/animal-after.webp');
    }
    return (
        <>
            <div className=" container m-auto w-2/4 h-auto">
                <img className=" w-3/6" src={img} alt="" />
                <button className=" bg-white p-2 text-red-900 cursor-pointer" onClick={changeHandler}>click to change</button>
            </div>
        </>
    );
}
