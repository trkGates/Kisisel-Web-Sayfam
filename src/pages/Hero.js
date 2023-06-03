import React, { useContext, useEffect, useState } from "react";
import Foto from "../img/Foto.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { LanguageVerisi } from "../contexts/LanguageContext";

import "./CSS/Hero.css";
const Hero = () => {
  const { language } = useContext(LanguageVerisi);

  const [sol2, setSol2] = useState("");
  const [sol3, setSol3] = useState("");
  const [sol4, setSol4] = useState("");

  useEffect(() => {
    if (language === "tr-TR") {
      setSol2("Yaratıcı düşünce minimalist yaklaşım");
      setSol3(
        "Merhaba, ben Yusuf. Full-stack web geliştiricisiyim. Harika kullanıcı deneyimleri ile sağlam ve ölçeklenebilir önyüz ürünleri üretecek bir Developer arıyorsanız, hadi el sıkışalım."
      );
      setSol4("İletişim");
    } else if (language === "en-US") {
      setSol2("Creative thinker Minimalism Iover");
      setSol3(
        "Hi, I’m Yusuf. I’m a full-stack developer. If you are looking for a Developer who to craft solid and scalable frontend products with great user experiences. Let’s shake hands with me."
      );
      setSol4("Contact");
    }
  }, [language]);

  return (
    <div id="HeroMain">
      <div id="leftSide">
        <div id="sol1" className="mg40">
          <div id="duzCizgi"></div>
          <div id="HeroName">
            <p>Yusuf Çolak</p>
          </div>
        </div>
        <div id="sol2" className="mg40">
          {sol2}
        </div>
        <div id="sol3" className="mg40">
          {sol3}
        </div>

        <div id="sol4" className="mg40">
          <div id="sol4Button">
            <a
              className="sol4-1 buttonSolFont"
              href=""
              rel="noreferrer"
              target="_blank"
            >
              {sol4}
            </a>
            <a
              className="sol4-2 buttonSolFont"
              href="https://github.com/trkGates"
              rel="noreferrer"
              target="_blank"
            >
           
              <p>
                <FontAwesomeIcon icon={faGithub} style={{ color: "#bab2e7" }} />
              </p>
              <p>Github</p>
            </a>
            <a
              href="https://www.linkedin.com/in/yusuf-çolak-99a309120/"
              className="sol4-3 buttonSolFont"
              rel="noreferrer"
              target="_blank"
            >
              <p>
                <FontAwesomeIcon
                  icon={faLinkedinIn}
                  style={{ color: "#bab2e7" }}
                />
              </p>
              <p>Linkedin</p>
            </a>
          </div>
        </div>
      </div>

      <div id="rightSide">
          <img id="rightSideFoto" src={Foto} alt="Kişisel Foto" />
      </div>
    </div>
  );
};

export default Hero;
