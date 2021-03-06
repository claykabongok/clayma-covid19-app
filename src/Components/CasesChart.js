import React, { useEffect, useState } from "react";
import axios from "axios";
import { Chart } from "react-google-charts";
import "../Styles/CasesChart.scss";
import { useToasts } from "react-toast-notifications";
import loadingIcon from '../Assets/dashboardloader3.gif';
export default function CasesChart() {
  const [loading, setLoading] = useState(true);

  const [totalConfirmed, setTotalConfirmed] = useState(0);
  const [totalDeaths, setTotalDeaths] = useState(0);
  const [totalRecovered, setTotalRecovered] = useState(0);
  let activeCases = totalConfirmed - totalDeaths - totalRecovered;
  const { addToast } = useToasts();

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
     
        setLoading(false);
        addToast("Unable to retrieve data, try again", { appearance: 'error', autoDismiss: true, })
      });
  }, [addToast]);

  return (
    <div className="chart-container chart-card">
      {
        loading ?  <img src={loadingIcon} alt="loading" className="loadingIcon" />:
        <Chart
        width={"100%"}
        height={"350px"}
        chartType="PieChart"
        loader={ <div><h2 className="header-data-loading">Loading data...</h2></div>}
        data={[
          ["Category", "Number of cases"],
          ["Total Recovered", totalRecovered],
          ["Total Deaths", totalDeaths],
          ["Active Cases", activeCases]
        
        ]}
        options={{
          title: "Covid-19 Data. Total confirmed: "+new Intl.NumberFormat().format(totalConfirmed),
          
          is3D: true,
        }}
      
      />

      }

         </div>
  );
}
