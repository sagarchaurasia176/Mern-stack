import React from "react";

function Card(props) {
  let apiDataset = props.apiDataset;
  //convert into the single array of object
  const convertDataIntoSingleArrayObj = () => {
    let apiConvertIntoSingleArray = [];

    Object.values(apiDataset).forEach((data) => {
      data.forEach((valueOfData) => {
        apiConvertIntoSingleArray.push(valueOfData);
      });
    });
    return apiConvertIntoSingleArray;
  };

  return (
    <>
      {convertDataIntoSingleArrayObj().map((cardDatas) => (
        <div
          key={cardDatas.id}
          className="cardComponents
       bg-slate-700 text-white  w-auto  cursor-pointer p-4 text-center  "
        >
          <div className="img-of-card">
            <img className=" w-80  ml-1 rounded-md" src={cardDatas.image.url} />
          </div>
          <div className="text w-80 my-1">
            <span className=" text-center">web dev</span>
            <p className=" text-center">{cardDatas.description}</p>
          </div>
          <button className=" bg-blue-800 rounded-md shadow-md text-white p-2 w-4/6 justify-center ml-12 flex ">
            Check Now
          </button>
        </div>
      ))}
    </>
  );
}

export default Card;
