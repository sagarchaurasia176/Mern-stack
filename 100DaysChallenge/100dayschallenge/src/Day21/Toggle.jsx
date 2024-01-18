import "./Components.css";
import Navabar from "./Components/Navabar";
import HeroPage from "./Components/HeroSection";

export default function Togle() {
  return (
    <>
      <div className=" container">
        <Navabar />
        <HeroPage />
      </div>
    </>
  );
}
