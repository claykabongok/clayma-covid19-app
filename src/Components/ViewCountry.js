import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./Navigation/NavBar";
import TopBanner from "./Navigation/TopBanner";
import HeroImage from "./Navigation/HeroImage";
import CounterCases from "./CounterCases";

export default function ViewCountry() {
  return (
    <>
      <TopBanner />
      <NavBar />

      <HeroImage />
    
    </>
  );
}
