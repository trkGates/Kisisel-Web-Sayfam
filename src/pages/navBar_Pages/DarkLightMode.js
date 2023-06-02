import "./CSS/DarkLightMode.css";
import { useContext } from "react";
import { DarkLightMod } from "../../contexts/Context";

const DarkLightMode = () => {
  const { theme, setTheme } = useContext(DarkLightMod);
  console.log(theme);
  return (
    <div>
      <label htmlFor="theme-toggle" className="switch">
        <input
          id="theme-toggle"
          type="checkbox"
          onChange={() => setTheme(!theme)}
          checked={theme}
        />
        <span className="slider round"></span>
        <span className={theme === false ? "slider2 round2": ""}></span>
      </label>
    </div>
  );
};

export default DarkLightMode;
