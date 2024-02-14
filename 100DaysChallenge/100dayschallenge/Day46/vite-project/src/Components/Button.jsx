import React from "react";

function Buttons(props) {
  const btnData = props.btnData;
  return (
    <div>
      {btnData.map((values) => (
        <button
          key={values.id}
          className="
            text-white
            ml-10  pointer"
        >
          {values.name}
        </button>
      ))}
    </div>
  );
}

export default Buttons;
