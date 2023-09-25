import React from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

function Inconnue() {
  return (
    <div className="inconnue">
      <Header />
      <main>
        <h4 className="pl-5 pt-5 red">ATTENTION</h4>
        <p>Cette page est inconnue !!</p>
      </main>
      <Footer />
    </div>
  );
}

export default Inconnue;
