import React from "react";
import Card from "./Card";
import { useState } from "react";
import Data from "./data";
// const { notInterestedHandler, setNot } = useState(id);
function Tour({ tripData }) {
    const [notInterst, setNotInterest] = useState(Data);
    
    //how to pass the function into the another page by using the props
//   function notInterestedHandlers(id) {
//     let valuesOfData = notInterst.filter((tours) => tours.id !== id);
//     setNotInterest(valuesOfData);
//   }

    const notInterestedHandlers = (id) => {
    const updatedData = notInterst.filter(tour => tour.id !== id);
    setNotInterest(updatedData);
  };


  


  return (
    <>
      <div className="container grid-cols-3 grid  gap-3">
        {tripData.map((valueOFData) => {
          //all the data are passed from the objects
        return (<Card key={valueOFData.id} {...valueOFData} notInterestedHandlers = {notInterestedHandlers}></Card>);
        })}

      </div>
    </>
  );
}

export default Tour;
