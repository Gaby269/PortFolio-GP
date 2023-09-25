import React from "react";
import "../css/cartePresentation.css";
import { useTranslation } from "react-i18next";

function CartePresentation() {
  const { t } = useTranslation();
  // Pourmettre du style
  const amaranthDark5Style = {
    color: "#380613", // Remplacez XXXXXX par le code de couleur amaranth dark-5
    background: "none", // Supprimez tout arrière-plan ou surlignage
    fontWeight: "bold", // Mettez le texte en gras
  };
  return (
    <div className="carte-presentation carte-presentation-centrer ">
      <div className="container">
        <div className="card shadow-1 rounded-2 bd-#380613 bd-solid bd-3 ">
          <div className="text-left m-2 p-3">
            <div className="card-header">
              <h3 className="text-left" style={amaranthDark5Style}>
                {t("portFolio-de")}{" "}
              </h3>
              <h1 className="text-left" style={amaranthDark5Style}>
                Gabrielle POINTEAU
              </h1>
            </div>
            <div className="card-content">
              <p className="text-justify">
                {"\t"}
                {t("text-presentation1")}{" "}
                <strong>{t("text-presentation2")}</strong>{" "}
                {t("text-presentation3")}{" "}
                <strong>{t("text-presentation4")}</strong>
                {t("text-presentation5")}{" "}
                <a href="./projets" style={amaranthDark5Style}>
                  {t("text-presentation6")}
                </a>{" "}
                {t("text-presentation7")}{" "}
                <a href="./cv" style={amaranthDark5Style}>
                  {t("text-presentation8")}
                </a>{" "}
                {t("text-presentation9")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartePresentation;
