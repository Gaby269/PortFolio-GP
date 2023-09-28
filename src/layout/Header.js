import React from "react";
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
      <nav className="navbar">
        <div className="navbar-logo">
          <a
            class="navbar-brand"
            href="https://gaby269.github.io/PortFolio-GP/"
          >
            <img src={GP} className="py-3" alt="GP" />
          </a>
        </div>
        <div className="navbar-menu ordi text-light-3 font-w600 text-right">
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

        <div className="navbar-menu mobile text-light-3 font-w600 text-center">
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
