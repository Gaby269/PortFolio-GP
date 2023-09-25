import React from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import CV from "../components/CV";
import "../css/cv.css";

//import logo from "./logo.svg";
//import "./App.css";

function CVPage() {
  return (
    <div className="cv-page">
      <Header />
      <main>
        <h2 className="pl-5 pt-5">Curriculum Vitae</h2>
        <CV />
      </main>
      <Footer />
    </div>
  );
}

export default CVPage;
