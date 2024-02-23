import React, { useContext } from "react";
import userContexts from "../Context/Data";

function Profile() {
    const { data } = useContext(userContexts);

    if (!data)
        return (
            <div>
                <p>please login</p>
            </div>
        );

    return (
        <div>
            <b>welcome to my web {data.userName}</b>
        </div>
    );
}

export default Profile;
