import React, { useState } from "react";
import { ContextConcept } from "../Context/ContextApi";

import NextData from "./NextData";
// import ThirData from "./ThirData";

function HowToUsed() {


  //it is the useState concepts that is mostly used into the  change the mangagement
  const [data, setData] = useState(0);


  return (
    <div>
      {/* this is all the data here are the presents  */}
      {/* this context provider is basically passsed all the data from the components */}


        {/* this is basically my providers where the data is send  */}
      <ContextConcept.Provider value={{ data, setData }}>
        <NextData />
        {/* <ThirData /> */}
      </ContextConcept.Provider>
    </div>
  );
}

export default HowToUsed;
