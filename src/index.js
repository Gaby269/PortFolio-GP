import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ReactDOM from "react-dom";

import "../node_modules/axentix/dist/axentix.min.css"; // Importez le fichier CSS de Axentix
import "./css/index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <Router>
    <Route exact path="/" component={App} />
    {/* Ajoutez d'autres routes ici */}
  </Router>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
