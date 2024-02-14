import React, { useEffect, useState } from "react";

function State() {
  const [set, setText] = useState("");
  const [name, setName] = useState("");

  function handle(e) {
    setText(e.target.value);
    console.log(set);
  }

  // three way to writing the useEffect
  // this is the first way to write the code

  useEffect(() => {
    //it run every time
    setText(set);
  });

  // this is the second way to write the code where you're  dependency  will be calling one time only
  // we use one dependecey only here
  useEffect(() => {
    // it run only one time
    setText(set);
    console.log("Dependecy");
  }, []);

  // this is the third way to write the code where you're dependecy will be changed by calling to the setText

  useEffect(() => {
    console.log("values....");
  }, [name]);

  //this is the fourth render change of the useEffect values

  //if you want to perform additional task in you're ui then that task is  called the useEffect

  return (
    <div>
      <input
        type="text"
        className=" p-2 w-3/4 text-black flex m-auto"
        placeholder="useEffect Practice series"
        onChange={handle}
      />
    </div>
  );
}

export default State;
