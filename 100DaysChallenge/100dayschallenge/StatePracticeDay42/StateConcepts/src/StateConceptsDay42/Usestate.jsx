import React, { useState } from "react";

function Hooks() {
  //this is the intialized of the values
  const [text, setText] = useState("I'll tell you're future company !");
  const [btn , setBtn] = useState(true);
  const changeText = () => {
    //this is the modified the vlaues
    setText("Amazon , Google , flipkart , uber , paytm , microsoft ");
    //terniary oeprator concepts

    text === "I'll tell you're future company !"
      ? setText("Amazon , Google , flipkart , uber , paytm , microsoft ")
      : setText("I'll tell you're future company !");

    };

  return (
    <>
      <h1 className=" text-center">
        usState is used to manage the state of the web page
      </h1>

      <h2 className=" text-center">{text}</h2>
      <button className=" p-3" onClick={changeText}>
        click me 
      </button>


    </>
  );
}

export default Hooks;
