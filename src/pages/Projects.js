import React, { useContext, useEffect, useState } from "react";

import data from "../Data/Data.js";
import Aos from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import ".//CSS/Projects.css";
import { LanguageVerisi } from "../contexts/LanguageContext";
const Projects = () => {
  const { language } = useContext(LanguageVerisi);
  console.log("dsadsa", language);

  useEffect(() => {
    Aos.init({ duration: 2000, disable: false });
  }, []);

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const item12 = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <div id="ProjectsMain">
      <div data-aos="fade" 
        id="ProjectsContainer1">
        <h3>{language === "tr-TR" ? "Projeler" : "Projects"}</h3>
      </div>
      <div
        variants={container}
        initial="hidden"
        animate="visible"
        id="ProjectsContainer2"
      >
        {data
          .filter((item) => item.language === language)
          .map((item) => (
            <div key={item.id} className="Sayfalarim" variants={item12}  data-aos="fade-up">
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
