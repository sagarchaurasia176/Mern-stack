import React from "react";
import Card from "./Card";
function Dataget(props) {
  //fetch props
  const { dataPass } = props.dataPass;
  return (
    <>
     
      {dataPass.map((val) => {
        return <Card key={val.id} {...dataPass}></Card>;
      })}


    </>
  );
}

export default Dataget;
