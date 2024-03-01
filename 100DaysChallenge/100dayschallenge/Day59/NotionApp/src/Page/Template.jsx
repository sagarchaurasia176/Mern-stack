import React from "react";
import Signup from "./Signup";
import Login from "./Login";
import Img from '../Img/Study.avif'

//we created this to pass the data directly to components

function Template({ title, desc1, desc2, formtype, setLoggedIn }) {
    return (
        //template data
        <div>
            <div>
                <h1>{title}</h1>
                <p>
                    <span>{desc1}</span>
                    <span>{desc2}</span>
                </p>
                {/* form logic here */}
                {formtype === "signup" ? <Signup /> : <Login />}
                <div>
                    <div></div>
                    <p>OR</p>
                    <div></div>
                </div>

                {/* login google btn */}
                <button>
                    <p>Sign up with Google</p>
                </button>
            </div>
            <div>
                <img src={Img} alt="" />
            </div>
        </div>
    );
}

export default Template;
