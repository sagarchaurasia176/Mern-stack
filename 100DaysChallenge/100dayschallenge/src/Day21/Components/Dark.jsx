import { useEffect, useState } from "react";
import "../Components.css";

export default function ButtonDark() {
    //apply the usestate concepts
    const [theme, setTheme] = useState(false);
    let handler = () => {
            setTheme( ()=>{} )
    }
  

    return (
        <>
            {/* //apply the conditions */}
            <div className="handlers" onClick={handler}>
                {theme ? <i class="fa-solid fa-lightbulb"></i>
                    : <i class="fa-regular fa-lightbulb"></i>}
            </div>

        </>
    );

}
