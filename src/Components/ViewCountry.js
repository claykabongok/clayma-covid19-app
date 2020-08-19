import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./Navigation/NavBar";
import TopBanner from "./Navigation/TopBanner";
import HeroImage from "./Navigation/HeroImage";
import { useParams } from "react-router-dom";
import "../Styles/ViewCountry.scss";
import Axios from "axios";
import CountUp from "react-countup";
import {
  faUserPlus,
  faHeartbeat,
  faPrayingHands,
  faUsers,
  faChartLine,
  faClock,
  faUniversity,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ViewCountry(props) {
  const [totalConfirmed, setTotalConfirmed] = useState(0);
  const [totalDeaths, setTotalDeaths] = useState(0);
  const [totalRecovered, setTotalRecovered] = useState(0);
  const [activeCases, setActiveCases] = useState(0);
  const [NewConfirmed, setNewConfirmed]=useState(0);
  const [NewRecovered, setNewRecovered ]=useState(0);
  const [NewDeaths, setNewDeaths ]=useState(0);
  let recoveryRate=0;
  let deathRate=0;


  if(totalConfirmed >0 && totalRecovered >0 ){
    recoveryRate=Math.round((totalRecovered/totalConfirmed)*100);
    
  }
  
  if(totalConfirmed >0 && totalDeaths >0){
    deathRate=Math.round((totalDeaths/totalConfirmed)*100);
    
  }
  
  const { countryCode, countryname } = useParams();
  const { flag } = props.location.state;

  const [countryData, setCountryData] = useState([]);
  //const api = `https://api.covid19api.com/country/${countryCode}?from=2020-08-17T00:00:00Z&to=2020-08-18T00:00:00Z`;
  const api = `https://corona.azure-api.net/country/${countryCode}`;
  useEffect(() => {
    Axios({
      method: "GET",
      url: api,
    })
      .then((res) => {
        console.log(res.data.Summary);
        setCountryData(res.data.Summary);
        setTotalConfirmed(res.data.Summary.Confirmed);
        setActiveCases(res.data.Summary.Active);
        setTotalDeaths(res.data.Summary.Deaths);
        setTotalRecovered(res.data.Summary.Recovered);
        setNewConfirmed(res.data.Summary.NewConfirmed);
        setNewDeaths(res.data.Summary.NewDeaths);
        setNewRecovered(res.data.Summary.NewRecovered);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [api, countryCode]);

  return (
    <>
      <TopBanner />
      <NavBar />

      <HeroImage />
      <div className="row container-view-country">
        <div className="col-lg-4">
          <div className="card-view-country">
            <div className="card-body">
              <h1 className="card-title">{countryname}</h1>
            </div>
            <img
              className="card-img-top"
              src={flag}
              alt={`flag ${countryname}`}
            />
          </div>
        </div>
        <div className="col-lg-8">
          <div className="card-view-country">
            <div className="card-body">
              <div className="row">
                <div className="col-lg-4 counter-cases-content">
                  <h2 className="counter-case-title">Confirmed</h2>
                  {/* <h2> {countryData.Confirmed}</h2> */}

                  <div className="counter-cases-value confirmed-cases">
                    <FontAwesomeIcon icon={faUserPlus} />
                  </div>
                  <h2 className="counter-cases-value confirmed-cases">
                    <CountUp
                      start={0}
                      end={totalConfirmed}
                      duration={2.75}
                      separator=","
                    />
                  </h2>
                </div>
               
                <div className="col-lg-4 counter-cases-content">
                  <h2 className="counter-case-title">Deaths </h2>

                  <div className="counter-cases-value total-deaths">
                    <FontAwesomeIcon icon={faPrayingHands} />
                  </div>
                  <h2 className="counter-cases-value total-deaths">
                    <CountUp
                      start={0}
                      end={totalDeaths}
                      duration={2.75}
                      separator=","
                    />
                  </h2>
                </div>
                <div className="col-lg-4 counter-cases-content">
                  <h2 className="counter-case-title">Recovered </h2>
                  <div className="counter-cases-value total-recovered">
                    <FontAwesomeIcon icon={faHeartbeat} />
                  </div>
                  <h2 className="counter-cases-value total-recovered">
                    <CountUp
                      start={0}
                      end={totalRecovered}
                      duration={2.75}
                      separator=","
                    />
                  </h2>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-3 counter-cases-content">
                  <h2 className="counter-case-title">New Confirmed</h2>
             
                  <div className="counter-cases-value confirmed-cases">
                    <FontAwesomeIcon icon={faUserPlus} />
                  </div>
                  <h2 className="counter-cases-value confirmed-cases">
                    <CountUp
                      start={0}
                      end={NewConfirmed}
                      duration={2.75}
                      separator=","
                    />
                  </h2>
                </div>

                <div className="col-lg-3 counter-cases-content">
                  <h2 className="counter-case-title">New Deaths </h2>
                
                  <div className="counter-cases-value total-deaths">
                    <FontAwesomeIcon icon={faPrayingHands} />
                  </div>
                  <h2 className="counter-cases-value total-deaths">
                    <CountUp
                      start={0}
                      end={NewDeaths} 
                      duration={2.75}
                      separator=","
                    />
                  </h2>
                </div>
                <div className="col-lg-3 counter-cases-content">
                  <h2 className="counter-case-title">New Recovered </h2>
              
                  <div className="counter-cases-value total-recovered">
                    <FontAwesomeIcon icon={faHeartbeat} />
                  </div>
                  <h2 className="counter-cases-value total-recovered">
                    <CountUp
                      start={0}
                      end={NewRecovered}
                      duration={2.75}
                      separator=","
                    />
                  </h2>
                </div>
                <div className="col-lg-3 counter-cases-content">
                  <h2 className="counter-case-title">Active </h2>
                  <div className="counter-cases-value active-cases">
                    <FontAwesomeIcon icon={faUsers} />
                  </div>
                  <h2 className="counter-cases-value active-cases">
                    <CountUp
                      start={0}
                      end={activeCases}
                      duration={2.75}
                      separator=","
                    />
                  </h2>
                </div>
              </div>
            
              <div className="row">
                <div className="col-lg-5 ">
                <h2><span className="counter-case-title">Recovery rate:  </span> <FontAwesomeIcon icon={faChartLine}></FontAwesomeIcon> {recoveryRate}%   </h2> 
                  <h2> <span className="counter-case-title"> Source: </span><FontAwesomeIcon icon={faUniversity}></FontAwesomeIcon>  {countryData.Source}</h2>
                </div>
                <div className="col-lg-7">
                <h2><span className="counter-case-title">Death rate: </span> <FontAwesomeIcon icon={faPrayingHands}></FontAwesomeIcon> {deathRate}%   </h2> 
                  <h2><span className="counter-case-title">Last Update:  </span> <FontAwesomeIcon icon={faClock}></FontAwesomeIcon> {countryData.Last_Update}</h2>
                </div>
              </div>

            
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
