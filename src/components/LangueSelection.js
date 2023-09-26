// LanguageSelector.js

import React from "react";
import i18n from "../static/langues/i18n"; // Assurez-vous que le chemin est correct
import "../style/LangueSelection.css"; // Remplacez "votre-fichier-css.css" par le chemin vers votre fichier CSS

function LangueSelection() {
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="langueSelection">
      <button
        className={`langue-button ${i18n.language === "fr" ? "active" : ""}`}
        onClick={() => changeLanguage("fr")}
      >
        FR
      </button>
      |
      <button
        className={`langue-button ${i18n.language === "en" ? "active" : ""}`}
        onClick={() => changeLanguage("en")}
      >
        EN
      </button>
    </div>
  );
}

export default LangueSelection;
