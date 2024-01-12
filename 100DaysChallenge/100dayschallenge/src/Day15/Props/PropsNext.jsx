import React, { useState } from "react";
export default function PropsConcpt() {
    
    const [set , setState] = useState([]);

  async function propsUserDat() {
    try {
      const url = "https://jsonplaceholder.typicode.com/users";
      const data = await fetch(url);
      const resp = await data.json();
        //set state basically used to  update the functions
      setState(resp);
    } catch {
      console.log("error");
    }
}
  function onCLicks() {
    propsUserDat();
  }

  return (
    <>
      <div className="items">
        <button onClick={onCLicks}>Click Me</button>
        {set.map((userDtl) => (
          <>
            <div className="name">{userDtl.title}</div>
            <div className="product">{userDtl.name}</div>
            <div className="price">{userDtl.email}</div>
          </>
        ))}
      </div>
    </>
  );
}
