import { useState } from "react";
import "../Components.css";

export default function ButtonDark() {
    //apply the usestate concepts
    const [change, setChange] = useState();
    const toggleChange = () => {
        change == 'light' ? setChange('dark') : setChange('');
    };
    return (
        <>
            <div>
                {/* //apply the conditions */}
              
              
                <button className={change ? "dark" : "white"}>
                    {change ? (
                        <i class="fa-regular fa-lightbulb"></i>
                    ) : (
                        <i class="fa-solid fa-lightbulb"></i>
                    )}
                </button>



            </div>
        </>
    );
}
