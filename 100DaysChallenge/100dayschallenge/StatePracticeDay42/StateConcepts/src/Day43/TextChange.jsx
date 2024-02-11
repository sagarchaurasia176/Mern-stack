import React, { useState } from "react";

function TextChange() {
    const [text, setText] = useState("clicked");

    function change() {
            text ==='clicked' ? setText('not clicked') : setText ('clicked') 
        }

    return (
        <div className="  bg-white  p-2 m-2 w-80  h-32 text-black">
            <h2 className=" text-center text-red-500">Text Change</h2>
            <p>change to {text}</p>
            <button className=" bg-slate-600 p-2 text-white"
                onClick={change}>
                click me
            </button>
        </div>
    );
}

export default TextChange;
