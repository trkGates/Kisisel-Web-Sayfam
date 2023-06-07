import React, { useContext } from "react";
import NavBar from "../pages/NavBar";
import "./Home.css";
import Hero from "../pages/Hero";
import Skills from "../pages/Skills";
import Profile from "../pages/Profile";
import Projects from "../pages/Projects";
import Footer from "../pages/Footer";
import { DarkLightMod } from "../contexts/DarkLightContext";
const Home = () => {
  const { theme } = useContext(DarkLightMod);
  return (
    <div id="AnaContainer">
      <div id="MainContainer">
        <NavBar />
        <Hero />
        <Skills />
        <Profile />
        <Projects />
      </div>
      <div
        id="footerContact"
        style={{ background: theme === true ? "#F9F9F9" : "#141414" }}
      >
        <div id="Footerİc">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Home;
