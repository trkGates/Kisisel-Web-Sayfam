import React from "react";
import DarkLightMode from "./navBarPages/DarkLightMode";
import Language from "./navBarPages/Language";
import "./CSS/NavBar.css";
import NavBarMenü from "./navBarPages/NavBarMenü";
const NavBar = () => {
  return (
    <div >
      <div id="NavBar1">
      <DarkLightMode />
      <p id="NavbarAyirac">|</p>
      <Language/>
      </div>
      <div id="NavBar2">
      <NavBarMenü />
      </div>
    </div>
  );
};

export default NavBar;
