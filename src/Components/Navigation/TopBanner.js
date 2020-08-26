import React from "react";
import "../../Styles/TopBanner.scss";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function TopBanner() {
  return (
    <div className="top-banner-container">
      <div className="row">
        <div className="col-lg-3">
          <FontAwesomeIcon icon={faPhone} className="top-banner-icon" />
          +47 241 39402
        </div>
        <div className="col-lg-3">
          <FontAwesomeIcon icon={faEnvelope} className="top-banner-icon" />
          afrgocom@who.int
        </div>
        <div className="col-lg-6">
          COVID-19
          <a
            href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019"
            className="shop_now_link_top_banner"
          >
            Help
          </a>
        </div>
      </div>
    </div>
  );
}
