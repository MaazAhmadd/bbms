import React from "react";
import FAQ from "../components/FAQ";
import Home from "../components/Home";
import Roadmap from "../components/Roadmap";
import Footer from "../components/Footer";
import styles from "../styles/Home.module.css";
import Team from "../components/Team";

export default function Main() {
  return (
    <>
      <Home />
      <Roadmap />
      <FAQ />
      <Team />
      <Footer />
    </>
  );
}
