import React, { useContext } from "react";
import { LanguageVerisi } from "../../contexts/LanguageContext";
import "./CSS/Language.css";
import { DarkLightMod } from "../../contexts/DarkLightContext";
const Language = () => {
  const { language, setLanguage } = useContext(LanguageVerisi);
  const { theme } = useContext(DarkLightMod);
  const handleLanguageChange = () => {
    const newLanguage = language === "tr-TR" ? "en-US" : "tr-TR";
    setLanguage(newLanguage);
  };

  const TR = (
    <p id="Dil">
      <span
        style={{ color: theme === true ? "#4731D3" : "#BAB2E7" }}
        id="DilAdi"
      >
        TÜRKÇE
      </span>
      'YE GEÇ
    </p>
  );
  const ENG = (
    <p id="Dil">
      <span
        style={{ color: theme === true ? "#4731D3" : "#BAB2E7" }}
        id="DilAdi"
      >
        ENGLISH
      </span>
    </p>
  );
  return (
    <div id="languageMain">
      <button id="languageButton" onClick={handleLanguageChange}>
        {language === "tr-TR" ? ENG : TR}
      </button>
    </div>
  );
};

export default Language;
