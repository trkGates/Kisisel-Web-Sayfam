import React from "react";
import Foto from "../img/Foto.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

import "./CSS/Hero.css";
const Hero = () => {
  return (
    <div id="HeroMain">
      <div id="leftSide">
        <div id="sol1" className="mg40">
          <div id="duzCizgi"></div>
          <div id="HeroName"> Yusuf Çolak </div>
        </div>
        <div id="sol2" className="mg40">
          Creative thinker Minimalism Iover
        </div>
        <div id="sol3" className="mg40">
          Hi, I’m Yusuf. I’m a full-stack developer. If you are looking for a
          Developer who to craft solid and scalable frontend products with great
          user experiences. Let’s shake hands with me.
        </div>

        <div id="sol4" className="mg40">
          <div id="sol4Button">
            <button className="sol4-1 buttonSolFont">Hire Me</button>
            <button className="sol4-2 buttonSolFont">
              <p>
              <FontAwesomeIcon icon={faGithub} style={{ color: "#bab2e7" }} />
              </p>
              <p>Github</p>
              
            </button>
            <button className="sol4-3 buttonSolFont">
              <p>
              <FontAwesomeIcon
                icon={faLinkedinIn}
                style={{ color: "#bab2e7" }}
              />
              </p>
             <p>Linkedin</p> 
            </button>
          </div>
        </div>
      </div>

      <div id="rightSide">
        <div id="rightSideBG">
          <img id="rightSideFoto" src={Foto} alt="Kişisel Foto" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
