import React from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import CarteContact from "../components/CarteContact";

//import logo from "./logo.svg";
//import "./App.css";

function Contact() {
  return (
    <div className="contact-page">
      <Header />
      <main>
        <CarteContact />
      </main>
      <Footer />
    </div>
  );
}

export default Contact;
