import React, { useState, useEffect } from "react";
import axios from "axios";
import { Chart } from "react-google-charts";
import "../Styles/Barchchart.scss";
import { useToasts } from "react-toast-notifications";
import loadingIcon from "../Assets/dashboardloader3.gif";
export default function Barchart() {
  const { addToast } = useToasts();
  const [loading, setLoading] = useState(true);

  const [totalConfirmed, setTotalConfirmed] = useState(0);
  const [totalDeaths, setTotalDeaths] = useState(0);
  const [totalRecovered, setTotalRecovered] = useState(0);
  let activeCases = totalConfirmed - totalDeaths - totalRecovered;

  useEffect(() => {
    setLoading(true);
    const api = "https://api.covid19api.com/world/total";
    axios({
      method: "GET",
      url: `${api}`,
    })
      .then((res) => {
        setTotalConfirmed(res.data.TotalConfirmed);
        setTotalDeaths(res.data.TotalDeaths);
        setTotalRecovered(res.data.TotalRecovered);

        setLoading(false);
      })
      .catch((e) => {
        setLoading(false);
        addToast("Unable to retrieve data, try again", {
          appearance: "error",
          autoDismiss: true,
        });
      });
  }, [addToast]);

  return (
    <div>
      <div className="chart-card chart-container">
        {loading ? (
          <img src={loadingIcon} alt="loading" className="loadingIcon" />
        ) : (
          <Chart
            width={"100%"}
            height={"350px"}
            chartType="Bar"
            loader={
              <div>
                <h2 className="header-data-loading">Loading data...</h2>
              </div>
            }
            data={[
              ["Cases", "Confirmed", "Death", "Active cases", "Recovered"],
              [
                "Covid-19 Data",
                totalConfirmed,
                totalDeaths,
                activeCases,
                totalRecovered,
              ],
            ]}
            options={{
              chart: {
                title: "Covid-19 Data",

                subtitle:
                  "Total confirmed " +
                  new Intl.NumberFormat().format(totalConfirmed),
              },
            }}
          />
        )}
      </div>
    </div>
  );
}
