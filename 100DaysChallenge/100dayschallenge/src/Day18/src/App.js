import "./styles.css";
import React from 'react'
import UserDtl from "./Hero";
import SkillData from "./Skills";
import AboutUser from "./About";

const App = () => {
  return (
    <>
      <div className="container">

        <UserDtl />
        <SkillData />
        <AboutUser />
      </div>

    </>

  )
}
export default App