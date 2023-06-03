import React, { useContext, useEffect, useState } from "react";

import "./CSS/NavBarMenü.css";
import { LanguageVerisi } from "../../contexts/LanguageContext";
const NavBarMenü = () => {
  const { language, setLanguage } = useContext(LanguageVerisi);

  const [Skills, setSkills] = useState(); //["Skills","Yetenekler"]
  const [Projects, setProjects] = useState(); //["Projects","Projeler"]
  const [HireMe, setHireMe] = useState(); //["Hire Me","Beni Kirala"]
  useEffect(() => {
    if (language === "tr-TR") {
      setSkills("Beceriler");
      setProjects("Projeler");
      setHireMe("İletişim!");
    } else if (language === "en-US") {
      setSkills("Skills");
      setProjects("Projects");
      setHireMe("Contact!");
    }
  }, [language]);

  return (
    <div id="NavMenü1">
      <div id="KareDis">
        <div id="Kareic">
          <p id="KareYazi">Y</p>
        </div>
      </div>
      <div id="NavMenü2">
        <div id="NavMenü2ic">
          <button className="buttonNav">{Skills}</button>
          <button className="buttonNav">{Projects}</button>
          <button className="buttonNavCerceve">{HireMe}</button>
        </div>
      </div>
    </div>
  );
};

export default NavBarMenü;
