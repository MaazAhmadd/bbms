import React from "react";
import FAQ from "../components/FAQ";
import Home from "../components/Home";
import Welcome from "../components/Welcome";
import Footer from "../components/Footer";
import styles from "../styles/Home.module.css";
import Team from "../components/Team";
import Card from "../components/Card";

export default function Main() {
  return (
    <>
      <Home />
      <Welcome />
      <Card />
      <FAQ />
      <Team />
      <Footer />
    </>
  );
}
