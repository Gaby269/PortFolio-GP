import { Routes, Route } from "react-router-dom";

import AccueilPage from "../pages";
import ProjetsPage from "../pages/projets";
import CVPage from "../pages/cv";
import ContactPage from "../pages/contact";
import Page404 from "../pages/404";

function App() {
  return (
    <Routes>
      <Route path={`${process.env.PUBLIC_URL}/`} element={<AccueilPage />} />
      <Route
        path={`${process.env.PUBLIC_URL}/projets`}
        element={<ProjetsPage />}
      />
      <Route path={`${process.env.PUBLIC_URL}/cv`} element={<CVPage />} />
      <Route
        path={`${process.env.PUBLIC_URL}/contact`}
        element={<ContactPage />}
      />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
}

export default App;
