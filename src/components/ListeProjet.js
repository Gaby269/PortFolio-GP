import React, { useEffect, useState } from "react";
import TabProjetsOrdi from "./ItemTabProjetsOrdi";
import CardProjetsMobile from "./ItemCardProjetsMobile";
import projetsEn from "./data/projets-en"; // Importez le fichier de projets en anglais
import projetsFr from "./data/projets-fr"; // Importez le fichier de projets en français
import { useTranslation } from "react-i18next";

export default function ListeProjet() {
  const { t, i18n } = useTranslation();
  const [projets, setProjets] = useState([]); // État pour stocker les projets
  const [isMobile, setIsMobile] = useState(window.innerWidth < 700);

  useEffect(() => {
    // Fonction pour charger les projets en fonction de la langue
    const loadProjets = () => {
      if (i18n.language === "en") {
        setProjets(projetsEn); // Chargez les projets en anglais
      } else {
        setProjets(projetsFr); // Chargez les projets en français par défaut
      }
    };

    loadProjets(); // Appelez la fonction lors de la mise à jour de la langue

    // Pour la taille de l'écran
    const handleResize = () => {
      setIsMobile(window.innerWidth < 592);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [i18n.language]);
  return (
    <section id="projet">
      <div className="portfolio-list">
        <div className="card white light-shadow-2 p-3 rounded-2">
          {isMobile ? (
            projets.map((projet, index) => (
              <CardProjetsMobile
                Titre={projet.Titre}
                Image={projet.Image}
                Alt={projet.Alt}
                Date={projet.Date}
                DescriptionTitre={projet.DescriptionTitre}
                DescriptionCorps={projet.DescriptionCorps}
                Langages={projet.Langages}
                GitHubRepo={projet.GitHubRepo}
                Site={projet.Site}
              />
            ))
          ) : (
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th>{t("nom-projet")}</th>
                    <th>{t("description")}</th>
                    <th>{t("langage")}</th>
                    <th>{t("lien")}</th>
                  </tr>
                </thead>
                {/*Utilisation de map pour parcourir les projets*/}
                <tbody>
                  {projets.map((projet, index) => (
                    <TabProjetsOrdi
                      Titre={projet.Titre}
                      Image={projet.Image}
                      Alt={projet.Alt}
                      Date={projet.Date}
                      DescriptionTitre={projet.DescriptionTitre}
                      DescriptionCorps={projet.DescriptionCorps}
                      Langages={projet.Langages}
                      GitHubRepo={projet.GitHubRepo}
                      Site={projet.Site}
                    />
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
