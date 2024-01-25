import { useState } from "react";
import "./App.css";
function App() {
  const [colorChange, setcolorChange] = useState("white");
  return (
    <>
      <h1 className=" text-center">color changer</h1>
      <div className=" h-screen w-full p-3  inset-x-3  px-1  inline-grid"
        style={{ backgroundColor: colorChange }} >

        <button
          onClick={() => {
            setcolorChange("red");
          }}
          className=" text-center  text-white p-3 rounded-full w-20 capitalize font-medium"
          //style simple inline into the react 
          style={{
            backgroundColor: "red",
          }}
        >red</button>
        <button
          onClick={() => {
            setcolorChange("blue");
          }}

          className=" text-center  text-white p-3 rounded-full w-20 capitalize font-medium"
          //style simple inline into the react 
          style={{ backgroundColor: "blue" }}
        >Blue</button>
        <button
          onClick={() => {
            setcolorChange("green");
          }}
          className=" text-center  text-white p-3 rounded-full w-20 capitalize font-medium"
          //style simple inline into the react 
          style={{ backgroundColor: "green" }}
        >Green</button>

        <button
          onClick={() => {
            setcolorChange("yellow")
          }}

          className=" text-center  text-white p-3 rounded-full w-20 capitalize font-medium"
          //style simple inline into the react 
          style={{ backgroundColor: "yellow" }}
        >Yellow</button>
        <button
          onClick={() => {
            setcolorChange("black");
          }}
          className=" text-center  text-white p-3 rounded-full w-20 capitalize font-medium"
          //style simple inline into the react 
          style={{ backgroundColor: "black" }}
        >Black</button>
        <button
          onClick={() => {
            setcolorChange("aqua");
          }}
          className=" text-center  text-white p-3 rounded-full w-20 capitalize font-medium"
          //style simple inline into the react 
          style={{ backgroundColor: "aqua" }}
        >aqua</button>

      </div>
    </>
  )
}

export default App;
