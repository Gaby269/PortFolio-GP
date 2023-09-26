//import CartePresentation from "./components/CartePresentation.js";
import Header from "./layout/Header.js";
import Footer from "./layout/Footer.js";
import Routes from "./routes";

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Routes />
      </main>
      <Footer />
    </div>
  );
}

export default App;
