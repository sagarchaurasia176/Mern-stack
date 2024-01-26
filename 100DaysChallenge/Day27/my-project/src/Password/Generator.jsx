import React, { useCallback, useEffect, useRef, useState } from "react";
import "../App.css";
export default function Generator() {
  const [length, setLength] = useState(8);
  const [number, setNumber] = useState(false);
  const [charaters, setCharacters] = useState(false);
  const [Password, setPasswords] = useState("");

  //use callback functions                         //it's dependencey pass in the array
  const PasswordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWYZ";
    let number = "";
    if (number) str += "0123456789";
    if (charaters) str += "@#!&*%$^$[]~";

    //used the loop here

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPasswords(pass);
  }, [length, number, charaters, setPasswords]);

  //useffect hook
  useEffect(() => {
    PasswordGenerator();
  }, [length, number, charaters, PasswordGenerator]);

  //take the useRef for ref the variable
  const passwordRef = useRef(null);

  const copyPasswordToBoard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 8);
    //copy to clipboard
    window.navigator.clipboard.writeText(Password);
  }, [Password]);

  return (
    <>
      <div className="container w-1/2 bg-white rounded-lg my-8  p-2 m-auto shadow-md ">
        <p className=" text-center text-xl font-semibold capitalize text-black">
          Password Generator
        </p>
        <input
          type="text"
          className=" border  text-orange-700  w-10/12 p-2 m-auto ml-4 rounded-md outline-none"
          value=""
          //no one can write
          readOnly
          ref={passwordRef}
        />

        <button
          onClick={copyPasswordToBoard}
          className=" bg-blue-600 text-white p-2 rounded w-10"
        >
          <i className="fa-regular fa-copy"></i>
        </button>

        <div className="slidecontainer flex justify-evenly">
          <input
            type="range"
            min={8}
            max={100}
            value={length}
            className="slider text-orange-700 p-2 cursor-pointer"
            onChange={(e) => {
              setLength(e.target.value);
            }}
          />

          <p className=" text-blue-500">Length : {length} </p>

          <input
            type="checkbox"
            name="Number"
            className="p-2  text-orange-700 "
            defaultChecked={number}
            onChange={() => {
              setNumber((prev) => !prev);
            }}
          />

          <p className=" text-orange-600">Numbers</p>

          <input
            type="checkbox"
            name="charaters"
            id=""
            className="p-2  text-orange-700 "
            defaultChecked={charaters}
            onChange={() => {
              setCharacters((prev) => !prev);
            }}
          />
          <p className=" text-red-700">Characters</p>
        </div>
      </div>
    </>
  );
}
