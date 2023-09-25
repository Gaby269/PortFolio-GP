import React from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import ListeProjets from "../components/ListeProjet";
import { useTranslation } from "react-i18next";

//import logo from "./logo.svg";
//import "./App.css";

function ProjetsPage() {
  const { t } = useTranslation();
  return (
    <div className="projets-page">
      <Header />
      <main>
        <h2 className="p-3">{t("mes-projet")}</h2>
        <ListeProjets />
      </main>
      <Footer />
    </div>
  );
}

export default ProjetsPage;
