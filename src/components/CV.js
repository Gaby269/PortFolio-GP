import React, { useEffect, useState } from "react";
import cv_fr from "../static/images/CV_fr.png"; // Assurez-vous que le chemin est correct
import cv_en from "../static/images/CV_en.png"; // Assurez-vous que le chemin est correct
import cv_pdf_fr from "../static/ressources/CV_Gabrielle_POINTEAU_fr.pdf";
import cv_pdf_en from "../static/ressources/CV_Gabrielle_POINTEAU_en.pdf";
import "../style/cv.css";
import { useTranslation } from "react-i18next";

function CV() {
  const tailleImg = {
    maxWidth: "100%",
    height: "auto",
  };
  const { t, i18n } = useTranslation();
  const [cv_pdf, setCV_pdf] = useState([]); // État pour stocker les cv
  const [cv, setCV] = useState([]); // État pour stocker les cv

  useEffect(() => {
    // Fonction pour charger les cv en fonction de la langue
    const loadCV = () => {
      if (i18n.language === "en") {
        setCV_pdf(cv_pdf_en); // Chargez les cv en anglais
        setCV(cv_en); // changer l'image
      } else {
        setCV_pdf(cv_pdf_fr); // Chargez les cv en français par défaut
        setCV(cv_fr); // changer l'image
      }
    };

    loadCV(); // Appelez la fonction lors de la mise à jour de la langue
  }, [i18n.language]);
  return (
    <section className="cv">
      <div className="container">
        <img
          src={cv}
          className="py-3 p-md-1 rounded-2"
          style={tailleImg}
          alt="CV"
        />
        <div className="container">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: "50px",
            }}
          >
            <a
              className="custom-btn btn shadow-1 rounded-1 "
              href={cv_pdf}
              download
            >
              <span className="btn-text">{t("telecharger")}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
    // Chercher à pouvoir telecharger le cv
  );
}

export default CV;
