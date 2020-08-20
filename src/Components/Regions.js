import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Country from "./Country";
import axios from "axios";
import NavBar from "./Navigation/NavBar";
import HeroImage from './Navigation/HeroImage';
import TopBanner from './Navigation/TopBanner';
import loadingIcon from "../Assets/dashboardloader3.gif";
import { useParams } from "react-router-dom";
import "../Styles/Regions.scss";
import NumberOfCountriesPergion from './NumberOfCountriesPergion';
import { useToasts } from "react-toast-notifications";
export default function Regions(props) {
  const [loading, setLoading] = useState(true);
  //const [error, setError] = useState(false);
  const [countries, setCountries] = useState([]);
  const {regionName} = useParams();
  const { addToast } = useToasts();
  
 

  useEffect(() => {
    setLoading(true);
   

    const api = `https://restcountries.eu/rest/v2/region/${regionName}`;
    axios({
      method: "GET",
      url: `${api}`,
    })
      .then((res) => {
    
        setCountries(res.data);

        setLoading(false);
      })
      .catch((e) => {
        addToast("Unable to retrieve data, try again", { appearance: 'error', autoDismiss: true, })
      });
  }, [addToast, regionName]);

  return (
    <div>
      <TopBanner/>
      <NavBar/>
      <HeroImage/>
      <NumberOfCountriesPergion countries={countries} />
      <div>
        {loading && (
          <img src={loadingIcon} alt="loading" className="loadingIcon" />
        )}
      </div>
      <div className="container-contries">
      
        <div className="row ">
          {countries.map((data) => (
             
            <Country data={data} key={data.numericCode} />
          ))}
        </div>
      </div>
    </div>
  );
}

