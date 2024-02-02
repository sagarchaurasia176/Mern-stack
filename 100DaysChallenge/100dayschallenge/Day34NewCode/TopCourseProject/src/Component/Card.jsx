import React from "react";

function Card(props) {
  let data = props.course;
  return (
    <>
      <div
        className="cardComponents
       bg-slate-50 p-3 w-5/6 m-auto "
      >
        <div className="img-of-card">
          <img
            className=" w-80  ml-1 rounded-md"
            src={data.image.url}
          />
        </div>
        <div className="text w-80 my-1">
          <span>{data.title}</span>
          <p>
            {data.description}
          </p>
        </div>
        <button className=" bg-blue-800 rounded-md shadow-md text-white p-2 w-4/6 justify-center ml-12 flex ">
          Check Now
        </button>
      </div>


    </>
  );
}

export default Card;
