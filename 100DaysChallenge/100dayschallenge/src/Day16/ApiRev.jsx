import React, { useState } from "react";

export default function ApiPracticeeUsingUseState() {
  const [set, setState] = useState([]);

  async function apiData() {
    try {
      const fetching = await fetch("https://randomuser.me/api");
      const resp = await fetching.json();
      setState(resp);
    } catch {
      console.log("error");
    }
  }

    function btn(){
        apiData()
    }



  return (
    <>
      <div className="container">
        <button onClick={btn}>Click me</button>
        {set.map((userDtl) => (
          <>
            <h1 key={userDtl.name}></h1>
            <p>{userDtl.city}</p>
            <h3>{userDtl.country}</h3>
          </>
        ))}
      </div>
    </>
  );
}
