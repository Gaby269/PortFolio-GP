import React from "react";
import CV from "../../components/CV";
import "../../style/cv.css";

//import logo from "./logo.svg";
//import "./App.css";

function CVPage() {
  return (
    <div className="cv-page">
      <main>
        <h2 className="pl-5 pt-5">Curriculum Vitae</h2>
        <CV />
      </main>
    </div>
  );
}

export default CVPage;
