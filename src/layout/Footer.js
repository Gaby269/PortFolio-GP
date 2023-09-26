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
    <footer className="d-flex fx-col amaranth dark-5" style={footerBasPage}>
      <div className="footer p-1 amaranth dark-5 d-flex">
        <p className="ml-3 text-ordi">
          <strong>Gabrielle POINTEAU</strong>
        </p>
        <p className="ml-auto mr-3">
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
