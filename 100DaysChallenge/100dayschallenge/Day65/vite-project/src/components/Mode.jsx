import React, { useRef, useState } from "react";
function Mode() {
    //mode handler btn
    const [modes, setMode] = useState(false);
    //I think we should used here the useRef concepts let's check it's
    const modeChanger = useRef(null);
    const modeHandler = () => {
        if (modeChanger.current) {
            modeChanger.current.style.backgroundColor = modes ? 'white' : 'black    ';
        }
        setMode(!modes)

    }

    return (
        <>
            <div
                style={{ width: '400px', height: '34vh' }}
                className=" w-23rem" ref={modeChanger}>

                    
                </div>
            <button onClick={modeHandler}>{modes ? "dark" : "light"}</button>
        </>
    );
}

export default Mode;
