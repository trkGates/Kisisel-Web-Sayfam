import React, { useContext, useEffect, useState } from "react";

import data from "../Data/Data.js";

import ".//CSS/Projects.css";
import { LanguageVerisi } from "../contexts/LanguageContext";
const Projects = () => {
  const { language } = useContext(LanguageVerisi);
  console.log("dsadsa", language);

  return (
    <div id="ProjectsMain">
      <div id="ProjectsContainer1">
        <h3>{language === "tr-TR" ? "Projeler" : "Projects"}</h3>
      </div>
      <div id="ProjectsContainer2">
        {data
          .filter((item) => item.language === language)
          .map((item) => (
            <div key={item.id} className="Sayfalarim">
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
