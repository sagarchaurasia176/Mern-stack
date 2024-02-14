import React from "react";

function CardsData() {
  return (
    <>
      <div className=" container m-auto  bg-black grid gap-2 grid-cols-4 w-9/12">
        <div className="cards w-56 bg-slate-600 p-1  ">
          <img src="data:image/jpeg;base64,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" alt="" />
          <div className="text-para">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo
              tempore incidunt iste.
            </p>
          </div>
          <div className="price-text">
            <p>₹12</p>
          </div>
        </div>
            
      </div>
    </>
  );
}

export default CardsData;
