import React from "react";
import CV from "../../components/CV";
import "../../style/cv.css";

//import logo from "./logo.svg";
//import "./App.css";

function CVPage() {
  return (
    <div className="cv-page">
      <main>
        <h1 className="titre-cv">Curriculum Vitae</h1>
        <CV />
      </main>
    </div>
  );
}

export default CVPage;
