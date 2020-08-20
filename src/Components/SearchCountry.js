import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import axios from "axios";
import NavBar from "./Navigation/NavBar";
import TopBanner from "./Navigation/TopBanner";
import HeroImage from "./Navigation/HeroImage";
import CounterCases from "./CounterCases";
import loadingIcon from "../Assets/dashboardloader3.gif";

import SearchBar from "./SearchBar";
import Country from "./Country";
import  '../Styles/SearchCountry.scss';
import { useToasts } from "react-toast-notifications";

export default function SearchCountry() {
  const { addToast } = useToasts();
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [searchresult, setsearchresult] = useState([]);

  const handleSearchInput = (e) => {
    setQuery(e.target.value);
    setsearchresult([]);
    setError(false);
  };

  const FindCountry = (e) => {
    e.preventDefault();

    if (query !== "") {
      setLoading(true);
      setError(false);
      const api = `https://restcountries.eu/rest/v2/name/${query}`;

      axios({
        method: "GET",
        url: `${api}`,
      })
        .then((res) => {
          setLoading(false);
          setsearchresult(res.data);
         
        })
        .catch((e) => {
          
          setLoading(false);
          
        addToast("Unable to retrieve data, try again", { appearance: 'error', autoDismiss: true, })
        });
    } else {
    
      setLoading(false);
      
      addToast("Please provide a valid  country  and try again.", { appearance: 'info', autoDismiss: true, })
    }
  };
  return (
    <div>
          <TopBanner />
      <NavBar />

      <HeroImage />
   
      <SearchBar
        handleSearchInput={handleSearchInput}
        FindCountry={FindCountry}
        query={query}
      />

      <div>
        {loading && (
          <img src={loadingIcon} alt="loading" className="loadingIcon" />
        )}
      </div>
  
      <div className="row row-search-results">
        {searchresult.length >= 1
          ? searchresult.map((data) => (
              <Country data={data} key={data.numericCode} />
            ))
          : ""}
      </div>
    </div>
  );
}
