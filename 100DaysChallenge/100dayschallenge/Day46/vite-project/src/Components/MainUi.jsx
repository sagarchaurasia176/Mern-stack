import React, { useEffect, useState } from "react";
import Buttons from "./Button";
import btnData from "./ButtonData";
import FinderSearch from "./FinderSearch";
// import CardMap from "./CardMap";

function MainUi() {
    const apiKey = "www.themealdb.com/api/json/v1/1/search.php?s=";
    //data get
    const [query, setQuery] = useState("");
    const [apiCheck, setCheck] = useState([]);
    const apiData = async () => {
        const url = apiKey + query;
        const dataLink = await fetch(url);
        const resp = await dataLink.json();
        console.log(resp);
        setCheck(resp.meals);
    };

    //USEeFFECT CONCEPTS
    useEffect(() => {
        apiData();
    }, []);
    return (
        <>
            <div className="btnBar w-full p-2  bg-slate-900 ">
                {/* btn data values  */}
                <h2 className=" font-semibold text-lg text-white">Foody ❤️ Hub</h2>
                <div
                    className="btn m-auto text-center
                 text-black font-medium  p-1"
                >
                    <Buttons btnData={btnData} />
                </div>
            </div>
            <br></br>
            <FinderSearch />
            <br></br>
            {/* <CardMap apiCheck={apiCheck} /> */}
            {/* <CardsData /> */}
        </>
    );
}

export default MainUi;
