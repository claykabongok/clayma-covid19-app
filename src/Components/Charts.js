import React from 'react';

import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./Navigation/NavBar";
import TopBanner from "./Navigation/TopBanner";
import HeroImage from "./Navigation/HeroImage";
import Footer from './Navigation/Footer';
import CasesChart from "./CasesChart";
import Barchart from './Barchart';
import '../Styles/Charts.scss';

export default function Charts() {
    return (
        <div>
            <TopBanner/>
            <NavBar/>
            <HeroImage/>
            <div className="container-chart">
      <div className="row">
        <div className="col-lg-6 mb-4 mt-4">
          <CasesChart />
        </div>
        <div className="col-lg-6 mb-4 mt-4">
          <Barchart />
        </div>
      </div>

      </div>
      <Footer/>
        </div>
    )
}
