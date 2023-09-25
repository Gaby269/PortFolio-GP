import CartePresentation from "../components/CartePresentation.js";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

function Accueil() {
  return (
    <div className="Accueil">
      <Header />
      <main>
        <CartePresentation />
      </main>
      <Footer />
    </div>
  );
}

export default Accueil;
