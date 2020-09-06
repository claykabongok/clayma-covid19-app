import React from "react";
import NavBar from "./Navigation/NavBar";
import TopBanner from "./Navigation/TopBanner";
import HeroImageNotFound from "./Navigation/HeroImageNotFound";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Styles/PageNotFound.scss";

import { Link } from "react-router-dom";
import Footer from "./Navigation/Footer";

export default function PageNotFound() {
  return (
    <>
      <TopBanner />
      <NavBar />
      <HeroImageNotFound />
      <div className="container-page-not-found">
        <h1>404 - PAGE NOT FOUND</h1>
        <p>
          The page you are looking for might have been removed, had its name
          changed or is temporarily unavailable
        </p>
        <div className="container-btn-view-data">
          <Link to="/" className="btn-view-data">
            GO TO HOMEPAGE
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}
