import React from "react";
import { useTranslation } from "react-i18next";
import "../style/Footer.css";

function Footer() {
  const { t } = useTranslation();
  // Pourmettre du style
  const footerBasPage = {
    bottom: "0",
    width: "100%",
  };
  return (
    <footer className="d-flex fx-col" style={footerBasPage}>
      <div className="footer p-1 d-flex">
        <p className="text-ordi">
          <strong>Gabrielle POINTEAU</strong>
        </p>
        <p className="text-modif">
          {" "}
          {/*ml-auto pousse à droite le texte pour le mettre à droite*/}
          {/*Copyright © 2023 - */}
          {t("derniere-modif")}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
