// i18n.js

import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enTranslation from "./langues/en.json";
import frTranslation from "./langues/fr.json";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: enTranslation,
    },
    fr: {
      translation: frTranslation,
    },
  },
  lng: "fr", // Langue par défaut
  fallbackLng: "fr", // Langue de secours
  interpolation: {
    escapeValue: false, // Permet d'insérer du HTML
  },
});

export default i18n;
