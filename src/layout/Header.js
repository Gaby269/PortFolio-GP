import React from "react";
//import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import GP from "../static/images/GP.png";
import "../style/Header.css"; // Remplacez "votre-fichier-css.css" par le chemin vers votre fichier CSS

import { useTranslation } from "react-i18next";
import LangageSelection from "../components/LangueSelection";

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
          <NavLink
            className="link navbar-link"
            to={`${process.env.PUBLIC_URL}/`}
            id="accueil-link-ordi"
            activeClassName="active"
          >
            {t("accueil")}
          </NavLink>
          <NavLink
            className="link navbar-link"
            to={`${process.env.PUBLIC_URL}/projets`}
            id="projets-link-ordi"
            activeClassName="active"
          >
            {t("projets")}
          </NavLink>
          <NavLink
            className="link navbar-link"
            to={`${process.env.PUBLIC_URL}/cv`}
            id="cv-link-ordi"
            activeClassName="active"
          >
            CV
          </NavLink>
          <NavLink
            className="link navbar-link"
            to={`${process.env.PUBLIC_URL}/contact`}
            id="contact-link-ordi"
            activeClassName="active"
          >
            {t("contact")}
          </NavLink>
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
            <NavLink
              className="link navbar-link"
              to={`${process.env.PUBLIC_URL}/`}
              id="accueil-link-mobile"
              activeClassName="active"
            >
              {t("accueil")}
            </NavLink>
            <NavLink
              className="link navbar-link"
              to={`${process.env.PUBLIC_URL}/projets`}
              id="projets-link-mobile"
              activeClassName="active"
            >
              {t("projets")}
            </NavLink>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginTop: "-18px",
            }}
          >
            <NavLink
              className="link navbar-link"
              to={`${process.env.PUBLIC_URL}/cv`}
              id="cv-link-mobile"
              activeClassName="active"
            >
              CV
            </NavLink>
            <NavLink
              className="link navbar-link"
              to={`${process.env.PUBLIC_URL}/contact`}
              id="contact-link-mobile"
              activeClassName="active"
            >
              {t("contact")}
            </NavLink>
          </div>
        </div>

        <LangageSelection />
      </nav>
    </header>
  );
}

export default Header;
