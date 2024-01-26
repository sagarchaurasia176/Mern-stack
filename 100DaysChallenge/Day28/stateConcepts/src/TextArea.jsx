import React, { useCallback, useRef, useState } from "react";
import "./App.css";
export default function TextArea(props) {
  //it's in the form of objects
  const { heading } = props;

  const [text, setText] = useState("");
  const upperCaseHandler = () => {
    setText(text.toUpperCase());
  };
  const LowerCaseHandler = () => {
    setText(text.toLowerCase());
  };
  //copy text
  const textCopyVlau = useRef(undefined);
  const copyToClip = useCallback(() => {
    textCopyVlau.current?.select();
    alert(" 😁 text are copied !");
    window.navigator.clipboard.writeText(text);
  }, [text]);

  return (
    <>
      <div className=" container w-7/12 h-screen m-auto p-1">
        <h1 className=" text-center text-lg text-white font-mono ">
          {heading}
        </h1>
        <textarea
          className=" justify-center ml-0 h-auto outline-dashed max-[1200px] p-1"
          rows={25}
          cols={100}
          value={text}
          onChange={(userTextTarget) => {
            setText(userTextTarget.target.value);
          }}
        ></textarea>

        <div className="forBtn flex justify-between ">
          <button
            onClick={upperCaseHandler}
            className=" bg-black text-white p-2 rounded-r-md w-23  m-auto"
          >
            Convert To UpperCase
          </button>
          <button
            onClick={LowerCaseHandler}
            className="  bg-red-600 text-white p-2 rounded-r-md w-23 m-auto"
          >
            Convert To LowerCase
          </button>
          <button
            onClick={copyToClip}
            className="text-white bg-blue-400 p-2 rounded-r-md w-23 m-auto"
          >
            Copy Text
          </button>
        </div>
      </div>
    </>
  );
}
