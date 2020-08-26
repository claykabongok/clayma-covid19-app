import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./Navigation/NavBar";
import TopBanner from "./Navigation/TopBanner";
import HeroImage from "./Navigation/HeroImage";
import CounterCases from "./CounterCases";

import '../Styles/Homepage.scss';
import { Link } from "react-router-dom";
import Footer from './Navigation/Footer';

export default function Homepage() {
  return (
    <>
      <TopBanner />
      <NavBar />
      
      <HeroImage />

    
     
      <div className="container-btn-view-data">
       <Link
        to="/searchcountry"
        className="btn-view-data"
       >
       View Data
       </Link>
       </div>
       
      <CounterCases />
      <Footer/>
  
          </>
  );
}
