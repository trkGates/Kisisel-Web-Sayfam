import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import DarkLightTheme from "./contexts/DarkLightContext";
import LanguageTuru from "./contexts/LanguageContext";

import "./reset.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <LanguageTuru>
      <DarkLightTheme>
        <App />
      </DarkLightTheme>
    </LanguageTuru>
  </React.StrictMode>
);
