import React, { useState } from "react";
function Rendering() {
    //writing the css into the jsx
    const card = {
        margin: " 0 auto",
        width: "300px",
        boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
        transition: "0.3s",
        padding: "2rem",
        boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
        transition: "0.3s",
        borderRadius: "5px" /* 5px rounded corners */,
    };
    const container = {
        padding: "1px 1px",
    };

    const img = {
        img: "border-radius: 5px 5px 0 0",
    };

    const main = {
        display: "flex",
    };

    const [msg, setMsg] = useState(["data-1", "data-2", "data-3"]);
    //handler of the btn
    const removed = (id) => {
    let removedData = msg.filter(values !== values.id);
    console.log("card removed");
    setMsg(removedData);
    };

    //reomve the card
 
    return (
        <>

            <h1 className=" text-lg text-white bg-black p-2">User-Details </h1>
            <div style={main}>
                <div
                    className="card-1" id="data-1" style={card}>
                    <img
                        style={img}
                        src="https://www.w3schools.com/howto/img_avatar.png"
                        alt="Avatar"
                    />
                    <div style={container}>
                        <h4>
                            <b>John Doe</b>
                        </h4>
                        <p>Architect & Engineer</p>
                    </div>

                    <button onClick={removed} className=" bg-red-100 text-black p-2">
                    
                    </button>
                </div>







                <div className="card-2"
                id="data-2"
                style={card}>
                    <img
                        style={img}
                        src="https://www.w3schools.com/howto/img_avatar.png"
                        alt="Avatar"
                    />
                    <div style={container}>
                        <h4>
                            <b>John Doe</b>
                        </h4>
                        <p>Architect & Engineer</p>
                    </div>
                    <button className=" bg-red-100 text-black p-2">
                        {" "}
                        click to remove
                    </button>
                </div>

                <div
                id="data-3"
                className="card-3" style={card}>

                    <img
                        style={img}
                        src="https://www.w3schools.com/howto/img_avatar.png"
                        alt="Avatar"
                    />
                    <div style={container}>
                        <h4>
                            <b>John Doe</b>
                        </h4>
                        <p>Architect & Engineer</p>
                    </div>
                    <button className=" bg-red-100 text-black p-2">
                        click to remove
                    </button>
                </div>



            </div>
        </>
    );
}

export default Rendering;
