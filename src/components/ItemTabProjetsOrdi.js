import React from "react";
import LangageImages from "../static/data/langages.js";
import "../style/projet.css";

function TabProjetsOrdi({
  Titre,
  Image,
  Alt,
  Date,
  DescriptionTitre,
  DescriptionCorps,
  Langages,
  GitHubRepo,
  Site,
  Video,
}) {
  return (
    <tr className="portfolio-item-ordi">
      <td>
        <div className="div-image">
          <img
            src={Image}
            alt={Alt}
            width="125"
            height="125"
            className="td-image"
          ></img>
          <p>
            <strong>{Titre}</strong>
            <br />
            <span className="text-grey">{Date}</span>
          </p>
        </div>
      </td>
      <td>
        <strong>{DescriptionTitre}</strong>
        <br />
        <br />
        <div className="td-description">
          <span className="text-grey">{DescriptionCorps}</span>
        </div>
      </td>
      <td className="td-langages">
        {Langages.map((langage) => (
          <div key={langage}>
            {LangageImages[langage]}
            <br />
          </div>
        ))}
      </td>
      <td className="td-lien">
        {
          // Si il y a un lien git on l'affiche
          GitHubRepo !== "" && (
            <a className="lienProjet" href={GitHubRepo}>
              <svg
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
              >
                <title>GitHub icon</title>
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
            </a>
          )
        }
        {/* Pour ajouter des lignes de vide si il y a deux liens */}
        {GitHubRepo !== "" && Site !== "" && <br />}
        {GitHubRepo !== "" && Site !== "" && <br />}
        {
          // Si il y a un lien vers le site associé on l'affiche
          Site !== "" && (
            <a className="lienProjet" href={Site}>
              <svg
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
              >
                <title>Lien icon</title>
                <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"></path>
              </svg>
            </a>
          )
        }
        {/* Pour ajouter des lignes de vide si il y a deux liens */}
        {GitHubRepo !== "" && Video !== "" && <br />}
        {GitHubRepo !== "" && Video !== "" && <br />}
        {
          // Si il y a un lien vers la video de presentation associé on l'affiche
          Video !== "" && (
            <a className="lienProjet" href={Video}>
              <svg
                role="img"
                viewBox="0 -960 960 960"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="black"
              >
                <title>Movie icon</title>
                <link
                  xmlns=""
                  type="text/css"
                  id="dark-mode"
                  rel="stylesheet"
                  href=""
                />
                <style xmlns="" type="text/css" id="dark-mode-custom-style" />
                <path d="m160-800 80 160h120l-80-160h80l80 160h120l-80-160h80l80 160h120l-80-160h120q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800Zm0 240v320h640v-320H160Zm0 0v320-320Z" />
              </svg>
            </a>
          )
        }
      </td>
    </tr>
  );
}

export default TabProjetsOrdi;
