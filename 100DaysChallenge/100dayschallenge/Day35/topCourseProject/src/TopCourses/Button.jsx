import React from "react";

function ButtonData(props) {
  let filterData = props.filterData;
  return (
    <>
      <div className="button-component m-auto bg-black w-5/6   p-3 flex">
        {filterData.map((value) => (
          <button key={value.id} className=" bg-white m-auto w-54 text-black p-3 rounded justify-center flex">
            {value.title}
          </button>
        ))}
      </div>
    </>
  );
}

export default ButtonData;
