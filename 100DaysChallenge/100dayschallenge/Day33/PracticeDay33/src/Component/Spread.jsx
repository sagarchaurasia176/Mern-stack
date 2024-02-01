import React from 'react'
import UserData from './Data';
import UserUi from './UserUi';
function Spread(props) {
    const { name } = props;
    return (
        <>
            <h1 className=' text-lg capitalize'>{name}</h1>
            {/* used the map function to retrive datas */}
             {UserData.map((userDtl) => {
                // here we used the spread operator 
                return <UserUi {...userDtl}></UserUi>

            })}
        </>

    )
}

export default Spread