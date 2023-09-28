import React from "react";
import ListeProjets from "../../components/ListeProjet";
import { useTranslation } from "react-i18next";
import "../../style/projet.css";

function ProjetsPage() {
  const { t } = useTranslation();
  return (
    <div className="projets-page">
      <main>
        <h1 className="titre-projet">{t("mes-projet")}</h1>
        <ListeProjets />
      </main>
    </div>
  );
}

export default ProjetsPage;
