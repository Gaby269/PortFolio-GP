import React from "react";
import { HashRouter } from "react-router-dom";
import ReactDOM from "react-dom";

import "../node_modules/axentix/dist/axentix.min.css"; // Importez le fichier CSS de Axentix
import "./css/index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
