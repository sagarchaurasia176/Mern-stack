import React, { useState } from 'react'
import './State.css';
const ImgBird = [
    {
        img: 'https://media.istockphoto.com/id/626132614/photo/blue-fronted-redstart-the-beautiful-blue.webp?b=1&s=612x612&w=0&k=20&c=CYacMgTzOKn6u4-NJ4V_51naGbw1MZM12DeDERalSh4=',
    }, {

        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCa3UENecCTxHZs345D9STF4B9HW5po4lzFRvB84fUKiVwaUuEL7hdDRHAi49-RVtHkUE&usqp=CAU',
    }, {
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSatJf8XNdqVGTLah4ZFmNZtTbS0GeOXZ1hPNc5iVb-Vxdeh2fRPsRmbU0OmVMczOeiH7I&usqp=CAU'
    }
]
 
export default function StateConcepts() {
    const [set , setImg] = useState(0);
    setImg((image)=>(image))
    return (
        <>
            <div className="container">
                <p><b>
                    Apply the concepts of useState
                </b>
                </p>

                <button onClick={change}>Click to change</button>

            </div>
        </>

    )
}