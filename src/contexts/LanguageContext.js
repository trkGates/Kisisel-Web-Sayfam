import { createContext, useEffect, useState } from "react";

export const LanguageVerisi = createContext();

const LanguageTuru = ({ children }) => {
  const systemLanguage = navigator.language || navigator.userLanguage;
  console.log(systemLanguage);

  const storedLanguage = localStorage.getItem("language");
  const [language, setLanguage] = useState(
    storedLanguage === null ? systemLanguage : storedLanguage
  );

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  const contextState = {
    language: language,
    setLanguage: setLanguage,
  };

  return (
    <LanguageVerisi.Provider value={contextState}>
      {children}
    </LanguageVerisi.Provider>
  );
};

export default LanguageTuru;
