import React from "react";
import "../App.css";
import ButtonStata from "./ButtonStata";

export default function State(props) {
  const { imageLink } = props;
  return (
    <>
      <div className=" container m-auto w-2/4 h-auto">
        <img className=" w-3/6" src={imageLink} alt="" />
        <ButtonStata />
      </div>
    </>
  );
}
