import React, { useState } from "react";
import Login from "./CheckPurpose/DataGather/Login";

function App() {
  const [set, dataSet] = useState("");

  return (
    <>
      <Login />
    </>
  );
}

export default App;
