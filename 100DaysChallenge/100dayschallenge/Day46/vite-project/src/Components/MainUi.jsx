import React from "react";
import Buttons from "./Button";
import btnData from "./ButtonData";
import CardsData from "./CardsData";
import FliterDataPass from "./FliterDataPass";
//this is the ui page here

function MainUi() {
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
      <FliterDataPass/>
      <br></br>
      <CardsData />
    </>
  );
}

export default MainUi;
