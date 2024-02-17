import React from "react";

function CardsData(props) {

const {alpha , setIndex , item } = props;

  return (
    <div className="container m-autorounded-lg">

      <div className="twice-box h-auto flex p-4 m-auto  bg-slate-50">
        <div className="box-1 text-center font-semibold">
          {alpha.map((value, index) => (
            <div
              className="numsBox"
              onClick={() => setIndex(value)}
              key={index}
            >
              <p className="bg-yellow-100 cursor-pointer size-12">{value}</p>
            </div>
          ))}
        </div>

        <div className="box-2 w-full grid grid-cols-4  gap-3">
          {item &&
            item.map((val) => (
              <div
                className="card bg-slate-900  m-auto text-white text-center p-4"
                key={val.idMeal}
              >
                <img
                  className="  size-72 rounded-md"
                  src={val.strMealThumb}
                  alt={val.strMeal}
                />
                <span>{val.strMeal}</span>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default CardsData;
