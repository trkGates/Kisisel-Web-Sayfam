import React, { useContext } from "react";
import { LanguageVerisi } from "../../contexts/LanguageContext";
import "./CSS/Language.css";
const Language = () => {
  const { language, setLanguage } = useContext(LanguageVerisi);
  
  const handleLanguageChange = () => {
    const newLanguage = language === "tr-TR" ? "en-US" : "tr-TR";
    setLanguage(newLanguage);
  };

  const TR = <p id="Dil"><span id="DilAdi">TÜRKÇE</span>'YE GEÇ</p>;
  const ENG = <p id="Dil"><span id="DilAdi">ENGLISH</span></p>;
  return (
    <div id="languageMain">
      <button id="languageButton" onClick={handleLanguageChange}>
        {language === "tr-TR" ? ENG : TR}
      </button>
    </div>
  );
};

export default Language;
