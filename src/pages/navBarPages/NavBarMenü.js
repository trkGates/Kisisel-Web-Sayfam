import React, { useContext, useEffect, useState } from "react";
import "./CSS/NavBarMenü.css";
import { LanguageVerisi } from "../../contexts/LanguageContext";

const NavBarMenü = () => {
  const { language, setLanguage } = useContext(LanguageVerisi);

  const [Skills, setSkills] = useState();
  const [Projects, setProjects] = useState();
  const [HireMe, setHireMe] = useState();

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

  const scrollToSkills = () => {
    const skillsElement = document.getElementById("SkillsMain");
    setTimeout(() => {
      skillsElement.scrollIntoView({ behavior: "smooth" });
    }, 100); 
  };
  const scrollToProject = () => {
    const skillsElement = document.getElementById("ProjectsMain");
    setTimeout(() => {
      skillsElement.scrollIntoView({ behavior: "smooth" });
    }, 100); 
  };

  return (
    <div id="NavMenü1">
      <div id="KareDis">
        <div id="Kareic">
          <p id="KareYazi">Y</p>
        </div>
      </div>
      <div id="NavMenü2">
        <div id="NavMenü2ic">
          <button className="buttonNav" onClick={scrollToSkills}>
            {Skills}
          </button>
          <button className="buttonNav" onClick={scrollToProject}>
            {Projects}
          </button>
          <a className="buttonNavCerceve" href="mailto:yusuf21706@gmail.com">
            {HireMe}
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavBarMenü;
