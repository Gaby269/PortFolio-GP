// LanguageSelector.js

import React from "react";
import i18n from "../i18n"; // Assurez-vous que le chemin est correct
import "../css/LangueSelection.css"; // Remplacez "votre-fichier-css.css" par le chemin vers votre fichier CSS

function LangueSelection() {
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div>
      <button
        className={`langue-button ${i18n.language === "fr" ? "active" : ""}`}
        onClick={() => changeLanguage("fr")}
      >
        &nbsp;FR&nbsp;
      </button>
      |
      <button
        className={`langue-button ${i18n.language === "en" ? "active" : ""}`}
        onClick={() => changeLanguage("en")}
      >
        EN&nbsp;
      </button>
    </div>
  );
}

export default LangueSelection;
