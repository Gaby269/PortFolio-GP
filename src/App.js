import { Routes, Route } from "react-router-dom";
import Accueil from "./pages/AccueilPage.js";
import Projets from "./pages/ProjectPage.js";
import CV from "./pages/CVPage.js";
import Contact from "./pages/ContactPage.js";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/PortFolio-GP/" element={<Accueil />}></Route>
        <Route path="/PortFolio-GP/projets" element={<Projets />}></Route>
        <Route path="/PortFolio-GP/project" element={<CV />}></Route>
        <Route path="/PortFolio-GP/contact" element={<Contact />}></Route>
      </Routes>
    </>
  );
};

export default App;
