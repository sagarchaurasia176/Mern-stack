import React from 'react'
const ConditionCheck=()=>{
        let loggedIn = true;
        let userName = 'sagar';
        let time = 23;

        return(
                 <>
                    <h1>
                        {loggedIn ? userName : 'sagar' || time}
                    </h1>
                     </>

        )

}

export default ConditionCheck;