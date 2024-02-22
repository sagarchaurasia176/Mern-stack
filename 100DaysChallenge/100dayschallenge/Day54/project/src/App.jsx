import { useState } from "react";
import "./App.css";
import Login from "./Components/Login";
import Nav from "./Components/Nav";

//this is your providers
import userContexts from "./Context/Data";
// import Profile from "./Components/Profile";
//create state here and then passed to the next files
function App() {
const [data, setData] = useState("");

  return (
    <>
      <userContexts.Provider value={{ data, setData }}>
        <Nav />
        <Login />
        {/* <Profile/> */}
      </userContexts.Provider>
    </>
  );
}

export default App;
