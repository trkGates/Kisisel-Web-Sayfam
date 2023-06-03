import React from "react";
import NavBar from "../pages/NavBar";
import "./Home.css";
import Hero from "../pages/Hero";
import Skills from "../pages/Skills";
const Home = () => {
  return (
    <div id="MainContainer">
    <NavBar/>
    <Hero/>
    <Skills/>
    </div>
  );
};

export default Home;
