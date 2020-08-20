import React, { useEffect, useState } from "react";
import "../Styles/CounterCases.scss";
import axios from "axios";
import loadingIcon from "../Assets/dashboardloader3.gif";
import CountUp from "react-countup";
import {
  faUserPlus,
  faHeartbeat,
  faPrayingHands,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function CounterCases() {
  const [loading, setLoading] = useState(true);
  //const [error, setError] = useState(false);
  // const [totalcases, setTotalcases] = useState([]);

  const [totalConfirmed, setTotalConfirmed] = useState(0);
  const [totalDeaths, setTotalDeaths] = useState(0);
  const [totalRecovered, setTotalRecovered] = useState(0);
  let activeCases = totalConfirmed - totalDeaths - totalRecovered;

  useEffect(() => {
    setLoading(true);
    //setError(false);

    const api = "https://api.covid19api.com/world/total";
    axios({
      method: "GET",
      url: `${api}`,
    })
      .then((res) => {
        setTotalConfirmed(res.data.TotalConfirmed);
        setTotalDeaths(res.data.TotalDeaths);
        setTotalRecovered(res.data.TotalRecovered);
        // setTotalcases(res.data);

        setLoading(false);
      })
      .catch((e) => {
        //setError(true);
        setLoading(false);
      });
  }, []);
  return (
    <div className="container-counter-cases">
      <div>
        {loading && (
          <img src={loadingIcon} alt="loading" className="loadingIcon" />
        )}
      </div>
      <div className="row">
        <div className="col-lg-3 counter-cases-content">
          <h1 className="counter-case-title">Total Confirmed </h1>
          <div className="counter-cases-value confirmed-cases">
            <FontAwesomeIcon icon={faUserPlus} />
          </div>
          <h1 className="counter-cases-value confirmed-cases">
            <CountUp
              start={0}
              end={totalConfirmed}
              duration={2.75}
              separator=","
            />
          </h1>
        </div>
        <div className="col-lg-3 counter-cases-content">
          <h1 className="counter-case-title">Active Cases</h1>
          <div className="counter-cases-value active-cases">
            <FontAwesomeIcon icon={faUsers} />
          </div>
          <h1 className="counter-cases-value active-cases">
            <CountUp
              start={0}
              end={activeCases}
              duration={2.75}
              separator=","
            />
          </h1>
        </div>
        <div className="col-lg-3 counter-cases-content">
          <h1 className="counter-case-title">Total Deaths</h1>
          <div className="counter-cases-value total-deaths">
            <FontAwesomeIcon icon={faPrayingHands} />
          </div>
          <h1 className="counter-cases-value total-deaths">
            {/* {new Intl.NumberFormat().format(totalDeaths)} */}
            <CountUp
              start={0}
              end={totalDeaths}
              duration={2.75}
              separator=","
            />
          </h1>
        </div>

        <div className="col-lg-3 counter-cases-content">
          <h1 className="counter-case-title">Total Recovered</h1>
          <div className="counter-cases-value total-recovered">
            <FontAwesomeIcon icon={faHeartbeat} />
          </div>
          <h1 className="counter-cases-value total-recovered">
            {/* {
         
            new Intl.NumberFormat().format(totalRecovered)} */}

            <CountUp
              start={0}
              end={totalRecovered}
              duration={2.75}
              separator=","
            />
          </h1>
        </div>
      </div>
    </div>
  );
}
