import React from "react";
import Accueil from "./pages/AccueilPage";
import Projets from "./pages/ProjetsPage";
import CV from "./pages/CVPage";
import Contact from "./pages/ContactPage";
import Inconnue from "./pages/Inconnue";

function App() {
  // Obtenez l'URL actuelle
  const currentPath = window.location.pathname;

  // Fonction pour rendre le composant approprié en fonction de l'URL
  const renderComponent = () => {
    switch (currentPath) {
      case "/PortFolio-GP":
        return <Accueil />;
      case "/PortFolio-GP/projets":
        return <Projets />;
      case "/PortFolio-GP/cv":
        return <CV />;
      case "/PortFolio-GP/contact":
        return <Contact />;
      default:
        // Gestion d'une URL inconnue (peut-être une page 404)
        return <Inconnue />;
    }
  };

  return <div>{renderComponent()}</div>;
}

export default App;
