import React, { useContext, useEffect, useState } from "react";

import data from "../Data/Data.js";
import Aos from "aos";
import "aos/dist/aos.css";
import ".//CSS/Projects.css";
import { LanguageVerisi } from "../contexts/LanguageContext";
const Projects = () => {
  const { language } = useContext(LanguageVerisi);
  console.log("dsadsa", language);



  useEffect(() => {
    Aos.init({ duration: 2000 , disable: false});
  }, []);
  
  return (
    <div  id="ProjectsMain">
      <div data-aos="fade"  id="ProjectsContainer1">
        <h3>{language === "tr-TR" ? "Projeler" : "Projects"}</h3>
      </div>
      <div   id="ProjectsContainer2">
        {data
          .filter((item) => item.language === language)
          .map((item) => (
            <div key={item.id} data-aos="fade-up" className="Sayfalarim">
              <img
                className="DataFoto"
                src={`/images/${item.image}`}
                alt={item.title}
              />
              <h4 className="DataBaslik">{item.title}</h4>
              <p className="DataAciklama">{item.description}</p>
              <p className="Yazilimlar">
                {item.yazilimlari.map((yazilim) => (
                  <span className="DataYazilimlar" key={yazilim}>
                    {yazilim}
                  </span>
                ))}
              </p>
              <p className="DataLinkler">
                <a rel="noreferrer" target="_blank" href={item.githubLink}>
                  Github
                </a>
                <a rel="noreferrer" target="_blank" href={item.websiteLink}>
                  {language === "tr-TR" ? "Siteye Git" : "View Site"}
                </a>
              </p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Projects;
