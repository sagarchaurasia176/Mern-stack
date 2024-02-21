import React, { useState } from "react";
import Login from "./CheckPurpose/DataGather/Login";
import { dataPass } from "./CheckPurpose/DataCheck/Data";

function App() {
  const [datas, setDatas] = useState();

  return (
    <>
      <dataPass.Provider value={{ datas, setDatas }}>
        <Login />
      </dataPass.Provider>
    </>
  );
}

export default App;
