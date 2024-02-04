import React from "react";
import testimonials from "./ApiData";
import DataOfApi from "./Data";
import Header from "./Header";

function MainPage() {
    return (
        <div className="  w-3/4 p-1 h-2/4 m-auto my-20">
            <Header/>
        <DataOfApi testimonials = {testimonials}/>
        </div>
    );
}

export default MainPage;
