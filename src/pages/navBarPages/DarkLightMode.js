import { useContext, useEffect, useState } from "react";
import { DarkLightMod } from "../../contexts/DarkLightContext";
import "./CSS/DarkLightMode.css";
import { LanguageVerisi } from "../../contexts/LanguageContext";

const DarkLightMode = () => {
  const { theme, setTheme } = useContext(DarkLightMod);
  const { language, setLanguage } = useContext(LanguageVerisi);

  const [darkMode, setDarkMode] = useState(); //["Karanlık Mod","Dark Mod"]
  const [lightMode, setLightMode] = useState(); //["Aydınlık Mod","Light Mod"]
  useEffect(() => {
    if (language === "tr-TR") {
      setDarkMode("Karanlık Mod");
      setLightMode("Aydınlık Mod");
    } else if (language === "en-US") {
      setDarkMode("Dark Mod");
      setLightMode("Light Mod");
    }
  }, [language]);

  return (
    <div id="DarkLight">
      <label htmlFor="theme-toggle" className="switch">
        <input
          id="theme-toggle"
          type="checkbox"
          onChange={() => setTheme(!theme)}
          checked={theme}
        />
        <span className="slider round"></span>
        <span className={theme === false ? "slider2 round2" : ""}></span>
      </label>
      <p style={{color: (theme===true ? "#777777" : "#D9D9D9") }}>{theme === false ? lightMode : darkMode}</p>
    </div>
  );
};

export default DarkLightMode;
