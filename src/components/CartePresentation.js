import React from "react";
import "../style/cartePresentation.css";
import { NavLink } from "react-router-dom";
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
        <div className="card card-presentation">
          <div className="texte-presentation">
            <div className="card-header-pres">
              <h3 className="portFolio text-left" style={amaranthDark5Style}>
                {t("portFolio-de")}{" "}
              </h3>
              <h1 className="nom-prenom text-left" style={amaranthDark5Style}>
                Gabrielle POINTEAU
              </h1>
            </div>
            <div className="card-content-pres">
              <p className="text-justify">
                {"\t"}
                {t("text-presentation1")}{" "}
                <strong>{t("text-presentation2")}</strong>{" "}
                {t("text-presentation3")}{" "}
                <strong>{t("text-presentation4")}</strong>
                {t("text-presentation5")}{" "}
                <NavLink
                  to={`${process.env.PUBLIC_URL}/` + `projets`}
                  style={amaranthDark5Style}
                  id="projets-mot"
                >
                  {t("text-presentation6")}
                </NavLink>{" "}
                {t("text-presentation7")}{" "}
                <NavLink
                  to={`${process.env.PUBLIC_URL}/cv`}
                  style={amaranthDark5Style}
                  id="cv-mot"
                >
                  {t("text-presentation8")}
                </NavLink>{" "}
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
