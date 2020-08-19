import React from "react";
import "../Styles/NumberOfCountries.scss";

export default function NumberOfCountriesPergion(props) {
  return (
    <div className="number-of-countries">
      {props.countries.length > 0 ? (
        <h1>
          {" "}
          Region {props.countries[0].region}. number of countries, dependencies
          or other territories {props.countries.length}
        </h1>
      ) : (
        ""
      )}
    </div>
  );
}
