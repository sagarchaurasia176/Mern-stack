import React from "react";
function Card({ id, name, image, info, price ,  notInterestedHandlers}) {

  return (
    <div
      className="cardComponents
     bg-slate-50 p-1 w-5/6 "
    >
      <div className="img-of-card">
        <img className=" w-80  ml-1 rounded-md" src={image} alt="" />
      </div>
      <div className="text w-80 my-1">
        <span>{name}</span>
        <p>{info}</p>
      </div>
      <em>₹{price}</em>
      <span className=" text-blue-500 cursor-pointer">Read More</span>
      {/* <button className=" bg-red-600 rounded-md shadow-md text-white p-2 w-4/6 justify-center ml-12 flex">
        Interested{" "}
      </button> */}
      <button
        onClick={ ()=>{notInterestedHandlers(id)} }
         className=" bg-blue-800 rounded-md shadow-md text-white p-2 w-4/6 justify-center ml-12 flex ">
        Not-Interested
      </button>
    </div>
  );
}
export default Card;
