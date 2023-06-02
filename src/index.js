import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import DarkLightTheme from "./contexts/Context";
import "./reset.css"
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DarkLightTheme>
    <App />
    </DarkLightTheme>
  </React.StrictMode>
);


