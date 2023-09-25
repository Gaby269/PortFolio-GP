import React from "react";
//import { Link } from "react-router-dom";
import { Link } from "react-router-dom";
import GP from "../../GP.png";
import "../../css/Header.css"; // Remplacez "votre-fichier-css.css" par le chemin vers votre fichier CSS

import { useTranslation } from "react-i18next";
import LangageSelection from "../LangueSelection";

function Header() {
  const headerHautPage = {
    top: "0",
    width: "100%",
  };

  const { t } = useTranslation();

  return (
    <header style={headerHautPage}>
      <nav className="navbar shadow-1 primary amaranth dark-5">
        <div className="navbar-menu ordi text-light-3 font-w600 hover-text-dark text-right">
          <a
            className="link navbar-link"
            href="https://gaby269.github.io/PortFolio-GP/"
            id="accueil-link-ordi"
            activeClassName="active"
          >
            {t("accueil")}
          </a>

          <a
            className="link navbar-link"
            href="https://gaby269.github.io/PortFolio-GP/pages/projets"
            id="projets-link-ordi"
            activeClassName="active"
          >
            {t("projets")}
          </a>
          <a
            className="link navbar-link"
            href="https://gaby269.github.io/PortFolio-GP/pages/cv"
            id="cv-link-ordi"
            activeClassName="active"
          >
            CV
          </a>
          <a
            className="link navbar-link"
            href="https://gaby269.github.io/PortFolio-GP/pages/contact"
            id="contact-link-ordi"
          >
            {t("contact")}
          </a>
        </div>
        <div
          className="navbar-logo ml-auto "
          style={{ display: "flex", alignItems: "center" }}
        >
          <a class="navbar-brand" href="/">
            <img
              src={GP}
              style={{
                width: "35px", // Largeur souhaitée
                height: "60px", // Hauteur souhaitée
                display: "block", // Pour centrer l'image horizontalement
              }}
              className="py-3"
              alt="GP"
            />
          </a>
        </div>
        <div
          className="navbar-menu mobile ml-auto text-right text-light-3 font-w600 hover-text-dark"
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            {/*<Link
              className="link navbar-link"
              href="/PortFolio-GP"
              id="accueil-link-mobile"
              activeClassName="active"
              style={{
                marginRight: "15px",
              }}
            >
              {t("accueil")}
            </Link>
            <Link
              className="link navbar-link"
              href="/PortFolio-GP/projets"
              id="projets-link-mobile"
              activeClassName="active"
              style={{
                marginRight: "15px",
              }}
            >
              {t("projets")}
            </Link>*/}
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginTop: "-18px",
            }}
          >
            {/*<Link
              className="link navbar-link"
              href="/PortFolio-GP/cv"
              id="cv-link-mobile"
              activeClassName="active"
              style={{
                marginRight: "15px",
              }}
            >
              CV
            </Link>
            <Link
              className="link navbar-link"
              href="/PortFolio-GP/contact"
              id="contact-link-mobile"
              activeClassName="active"
              style={{
                marginRight: "15px",
              }}
            >
              {t("contact")}
            </Link>*/}
          </div>
        </div>

        <LangageSelection />
      </nav>
    </header>
  );
}

export default Header;
