import React from "react";
export default function AndOperatorRendering() {
  let userLoggiedIn = true;
  let userLoggiedOut = false;
  return (
    <>
      <h1>UserLogin</h1>
      {userLoggiedIn && <p>Try again</p>}
      <h2>{userLoggiedOut || <p>log out</p>}</h2>
    </>
  );
}
