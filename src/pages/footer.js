import React, { useContext, useEffect, useState } from "react";
import { LanguageVerisi } from "../contexts/LanguageContext";
import "./CSS/Footer.css";

const Footer = () => {
  const { language } = useContext(LanguageVerisi);

  const [yazi, setYazi] = useState();
  const [mail, setMail] = useState();

  useEffect(() => {
    if (language === "tr-TR") {
      setYazi("Birlikte bir sonraki ürününüz üzerinde çalışalım.");
      setMail("Mail adresim");
    } else if (language === "en-US") {
      setYazi("Let’s work together on your next product.");
      setMail("My mail address");
    }
  }, [language]);

  return (
    <div id="FooterMain">
      <div>
        <h3 id="footeryazi">{yazi}</h3>
      </div>
      <div id="footerAlt">
        <div>
          <h4 id="mainBolumu">
            <img className="MailFoto" src={`/images/1.svg`} alt={mail} />
            <a className="MailYazisi" href="mailto:yusuf21706@gmail.com">
              yusuf21706@gmail.com
            </a>
          </h4>
        </div>
        <div id="footerLink">
          <a
            id="github"
            rel="noreferrer"
            target="_blank"
            href="https://github.com/trkGates"
          >
            Github{" "}
          </a>
          <a
            id="linkedin"
            rel="noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/yusuf-çolak-99a309120/"
          >
            Linkedin
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
