import "./App.css";
import Header from "./Components/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./Page/Home";
import Contact from "./Page/Contact";
import About from "./Page/About";
import Dashboard from "./Page/Dashboard";
import Login from "./Page/Login";
import Signup from "./Page/Signup";

function App() {
  return (
    <>
      {/* nav components */}
      <div className=" container w-full  text-white">

      <Header />
      </div>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Contact" element={<Contact />}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/Dashboard" element={<Dashboard />}></Route>
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/Singup" element={<Signup />}></Route>
      </Routes>
    </>
  );
}

export default App;
