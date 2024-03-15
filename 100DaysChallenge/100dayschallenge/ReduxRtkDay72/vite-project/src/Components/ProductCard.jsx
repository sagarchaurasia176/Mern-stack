import React from "react";

function ProductCard({ values }) {
  return (
    <div>
      <div
        className="flex flex-col cursor-pointer items-center justify-between
      transition duration-300 ease-in gap-3
       p-3 mt-10 ml-5 
       rounded-xl outline"
      >
        <div>
          <p className="text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1">
            {values.title}
          </p>
        </div>

        <div className="h-[180px]">
          <img src={values.image} className="h-full w-full " />
        </div>
        <div>
          <p className="w-auto text-black  font-normal text-[10px] text-center">
            {values.description.slice(0, 100)}
          </p>
        </div>
        <div className="flex justify-between gap-12 items-center w-full mt-5">
          <div>
            <p className="text-green-600 font-semibold">{values.price}</p>
          </div>
          <button className=" bg-slate-200 p-2">Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
