import CartePresentation from "./components/CartePresentation.js";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <CartePresentation />
      </main>
      <Footer />
    </div>
  );
}

export default App;
