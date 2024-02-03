import React from "react";
import { FcLikePlaceholder } from "react-icons/fc";
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
          className="cardComponents flex flex-wrap rounded-md shadow-lg 
       bg-slate-700 text-white   cursor-pointer p-3 text-center  "
        >
         
          <div className="text w-80 relative  bg-slate-50 text-black p-2 rounded-md">
            <img className=" w-auto   ml-1 rounded-md" src={cardDatas.image.url} />
            
            {/* click the like button */}
            <div className=" grid place-items-center w-[30px] h-[30px] bg-white rounded-full absolute top-[149.4px] right-2">
            <FcLikePlaceholder/>
            </div>



            <span className=" text-center text-black  p-2   space-y-3 font-semibold ">{cardDatas.title}</span>
            <p className=" text-center">{cardDatas.description}</p>
          <button className=" bg-blue-800 rounded-md shadow-md text-white p-2 w-full m-auto">
            Check Now
          </button>
          </div>

        </div>
      ))}
    </>
  );
}

export default Card;
