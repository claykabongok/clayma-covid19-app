import React from "react";
import LinesEllipsis from "react-lines-ellipsis";
import "../Styles/country.scss";
import { Link } from "react-router-dom";

export default function Country({ data }) {
  return (
    
    <div className="col-lg-3 col-md-4  col-sm-6 col-crountry-container">
      <div className="card-country">
        <img className="card-img-top" src={data.flag} alt="flag" />
        <div className="card-body">
          <h4 className="card-title">
            {" "}
            <LinesEllipsis
              text={data.name}
              maxLine="1"
              ellipsis="..."
              trimRight
              basedOn="letters"
            />
          </h4>
       
        </div>
        <div className="card-country-info">
          <Link   className="stretched-link"
            to={{
              pathname: `/viewcountry/${data.alpha2Code}/${data.name}`,
             
              state: { flag: data.flag }
            }}>
          </Link>
       
        </div>
      </div>
    </div>
  );
}
