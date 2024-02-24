import React from 'react'

function Mode() {
    const chageMode=()=>{
         
    }

    return (
        <div>
            <i 
            onClick={chageMode}
            class="fa-solid fa-star-of-life"
                style={{ backgroundColor: 'black', color: 'white' , cursor:'pointer' }}
            ></i>

        </div>
    )
}

export default Mode