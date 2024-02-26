import "./App.css";
// import Student from "./Form/Student";
import Home from "./Nav/About";
import Contact from "./Nav/Contact";
import Nav from "./Nav/RouterNav";
import { Routes, Route } from "react-router-dom";

function App() {
  // const [count, setCount] = useState(0)
  return (
    <>
    <Nav/>
      {/* crate the routes , then after that create the route  */}
      <Routes>
        <Route path="/Home" element={<Home/>}></Route>
        <Route path="/Contact" element={<Contact/>}></Route>
      </Routes>
    </>


  );
}

export default App;
