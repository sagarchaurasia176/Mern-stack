import React, { useEffect, useState } from "react";
import Buttons from "./Button";
import btnData from "./ButtonData";
import FinderSearch from "./FinderSearch";
import CardsData from "./CardsData";
// import CardMap from "./CardMap";


function MainUi() {
  
  //query
  const [query, setQuery] = useState("");
  const [receipes, setReceipes] = useState([]);
  // const[data , setDat] = useState();

  const apiKey = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
  
  const dataFetch = async () => {
    const resp = apiKey + query;
    const apiUrl = await fetch(resp);
    const conv = await apiUrl.json();
    console.log(conv);
    setReceipes(conv);
  };
  useEffect(() => {
    dataFetch();
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
      <CardsData/>

    </>
  );
}

export default MainUi;
