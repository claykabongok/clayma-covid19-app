import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import NavBar from "./Navigation/NavBar";
import TopBanner from "./Navigation/TopBanner";
import HeroImage from "./Navigation/HeroImage";
import CounterCases from './CounterCases';

import SearchBar from "./SearchBar";

export default function Homepage() {
 
  return (
    <>
      <TopBanner />
      <NavBar />

      <HeroImage />
     <CounterCases />
      <SearchBar />

      
      <div className="container-contries">
       
      </div>
    </>
  );
}
