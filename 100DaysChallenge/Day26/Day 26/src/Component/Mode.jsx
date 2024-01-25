import React from 'react'
import { useState } from 'react'

function Mode() {
    const [color, setColor] = useState(0);
    return (
        <>
            <div className=' bg-amber-50 w-full h-screen'
                style={{backgroundColor : color}}
            >
                <i onClick={ ()=> setColor("black") } className="fa-solid fa-lightbulb"
                    style={
                        {
                            padding: "1.2rem",
                            fontSize: "3rem",
                            cursor: 'pointer',
                            color: 'white'
                        }
                    }
                ></i>
                <i className="fa-regular fa-lightbulb"
                    style={
                        {
                            padding: "1.2rem",
                            fontSize: "3rem",
                            cursor: 'pointer'

                        }
                    }

                ></i>
            </div>

        </>

    )
}

export default Mode