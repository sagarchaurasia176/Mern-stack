import React from "react";

function ButtonData(props) {
  let filterData = props.filterData;
  let cate = props.cate;
  let setCate = props.setCate;
    const btnHandler = (title)=>{
        setCate(title)
    }
  return (
    <>
      <div className="button-component m-auto bg-slate-900     p-3 flex">
        {filterData.map((value) => (
          <button
           onClick={ () => btnHandler (value.title) } 
           key={value.id} className=" m-auto w-54 text-white border-dotted 
           border p-3 rounded justify-center flex">
            {value.title}
          </button>
        ))}
      </div>
    </>
  );
}

export default ButtonData;
