import React, { useEffect, useState } from "react";
import Buttons from "./Button";
import btnData from "./ButtonData";
import CardsData from "./CardsData";
import FinderSearch from "./FinderSearch";
// import FliterDataPass from "./FliterDataPass";

//this is the ui page here

function MainUi() {
  const alpha = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "P",
    "Q",
  ];


  const [url, setUrl] = useState("https://www.themealdb.com/api/json/v1/1/search.php?f=f");
  const [item, setItem] = useState(null);

  const[search , searchItm] = useState('')

  useEffect(() => {
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        return setItem(data.meals);
      })
      .catch((error) => {
        return console.error("Error fetching data:", error);
      });
  }, [url]);

  //api data modify

  const setIndex = (alpha) => {
    setUrl(`https://www.themealdb.com/api/json/v1/1/search.php?f=${alpha}`);
  };


    //search call to the functions
    const searchCall = (search)=>{
      setUrl(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
  
}



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
      <FinderSearch searchCall = {searchCall} />
      {/* <FliterDataPass/> */}
      <br></br>
      <CardsData alpha={alpha} setIndex={setIndex} item = {item} searchCall = {searchCall} />
    </>
  );
}

export default MainUi;
